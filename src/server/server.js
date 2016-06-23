var express = require('express');
var useRoutes = require('./config/routes.js')

const app = express();
var router = express.Router();

// Configure Jade
app.set('views', './src/templates');
app.set('view engine', 'pug');

// Set static & favicon paths
var root_dir = __dirname + '/../..';
var static_res_dir = root_dir + '/static';

app.use(express.static(static_res_dir));

// Handle routing
useRoutes(router, app);

// Start the server
var server = app.listen(process.env.PORT || 8080, () => {
  var host = server.address().address;
  var port = server.address().port;
  var mode = app.settings.env;

  console.log('App listening at http://%s:%s in %s mode', host, port, mode);
});