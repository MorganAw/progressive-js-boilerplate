import React                    from 'react';
import { renderToString }       from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import reactRoutes              from '../../shared/reactRoutes';

export default function useRoutes(router, server) {
  router.use((req, res, next) => {
    console.log('***** Handling \'%s\' request at route \'%s\' *****', req.method, req.url);
    next();
  });

  router.get('/', reactRender);

  server.use('/', router);
}

function reactRender(req, res) {
  match({ routes: reactRoutes, location: req.url },
        (error, redirectLocation, renderProps) => {
          if (error) {
            res.status(500).send(error.message);
          } else if (redirectLocation) {
            res.redirect(302,
                         redirectLocation.pathname + redirectLocation.search);
          } else if (renderProps) {
            const markup = renderToString(<RouterContext { ...renderProps } />);
            res.status(200).render('index', { markup });
          } else {
            res.status(404).send('Not found');
          }
        })
}