import express   from 'express';
import favicon   from 'serve-favicon';
import useRoutes from './config/routes';

const server = express();
let router = express.Router();

// Configure Jade
server.set('views', './src/server/templates');
server.set('view engine', 'pug');

// Set static & favicon paths
let rootDir = __dirname + '/../..';
let staticDir = rootDir + '/static';

server.use(express.static(staticDir));
server.use(favicon(staticDir + '/img/favicon.ico'));

// Handle routing
useRoutes(router, server);

// Start the server
let port = process.env.PORT || 8080;
let instance = server.listen(port, (error) => {
  if (error) {
    console.error('Error starting server:', error);
  } else {
    let mode = server.settings.env;
    console.log('Listening on port %s in %s mode', port, mode);
  }
});