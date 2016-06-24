export default function useRoutes(router, server) {
  router.use((req, res, next) => {
    console.log('***** Handling \'%s\' request at route \'%s\' *****', req.method, req.url);
    next();
  });

  router.get('/', (req, res) => {
    res.status(200).render('index');
  });

  server.use('/', router);
}