function useRoutes(router, app) {
  router.use((req, res, next) => {
    console.log('***** Handling \'%s\' request at route \'%s\' *****',
                req.method,
                req.url);
    next();
  });

  router.get('/', (req, res) => {
    res.status(200).render('index');
  });

  app.use('/', router);
}

module.exports = useRoutes;