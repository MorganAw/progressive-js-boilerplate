import React                        from 'react';
import { Provider }                 from 'react-redux';
import { match,
         createMemoryHistory,
         RouterContext }            from 'react-router';
import { syncHistoryWithStore }     from 'react-router-redux';
import { renderToString }           from 'react-dom/server';
import configStore                  from '../../shared/redux/store';
import reactRoutes                  from '../../shared/reactRoutes';

export default function useRoutes(router, server) {
  router.use((req, res, next) => {
    console.log('***** Handling \'%s\' request at route \'%s\' *****', req.method, req.url);
    next();
  });

  router.get('/', (req, res) => {
    const initialState = {text: 'World Hello'};
    reactRender(req, res, initialState);
  });

  server.use('/', router);
}

function reactRender(req, res, stateData) {
  let initialState = Object.assign({}, stateData);

  const memoryHistory = createMemoryHistory(req.url);
  const store = configStore(memoryHistory, initialState);
  const history = syncHistoryWithStore(memoryHistory, store);

  match(
    { history, routes: reactRoutes , location: req.url },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const markup = renderToString(
          <Provider store={ store }>
            <RouterContext { ...renderProps } />
          </Provider>
        );

        const finalState = store.getState();

        const data = {
          markup,
          initState: finalState
        };
        res.status(200).render('index', data);
      } else {
        res.status(404).send('Not Found');
      }
  });
}