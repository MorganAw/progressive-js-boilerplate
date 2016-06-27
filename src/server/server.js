var express = require('express');
var useRoutes = require('./config/routes.js')

var server = express();
var router = express.Router();

// Configure Jade
server.set('views', './src/server/templates');
server.set('view engine', 'pug');

// Set static & favicon paths
var rootDir = __dirname + '/../..';
var staticDir = rootDir + '/static';

server.use(express.static(staticDir));

// Handle routing
useRoutes(router, server);

// Start the server
var port = process.env.PORT || 8080;
var instance = server.listen(port, (error) => {
  if (error) {
    console.error('Error starting server:', error);
  } else {
    var mode = server.settings.env;
    console.log('Listening on port %s in %s mode', port, mode);
  }
});