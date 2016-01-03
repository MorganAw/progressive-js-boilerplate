var express = require('express');
var favicon = require('serve-favicon');

const app = express();
var router = express.Router();

// Configure Jade
app.set('views', './src/templates');
app.set('view engine', 'jade');

// Set static & favicon paths
var root_dir = __dirname + '/../..';
var static_res_dir = root_dir + '/static';

app.use(express.static(static_res_dir));
app.use(favicon(static_res_dir + '/img/favicon.ico'));

// Handle routing
router.use((req, res, next) => {
  console.log('***** Handling \'%s\' request at route \'%s\' *****', req.method, req.url);
  next();
});

router.get('/', (req, res) => {
  res.status(200).render('index');
});

app.use('/', router);
// Start the server
var server = app.listen(process.env.PORT || 8080, () => {
  var host = server.address().address;
  var port = server.address().port;
  var mode = app.settings.env;

  console.log('App listening at http://%s:%s in %s mode', host, port, mode);
});