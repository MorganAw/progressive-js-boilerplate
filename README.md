# progressive-js-boilerplate

My full-stack JS boilerplates for different technologies.

## Branch: server-rendered-react

### Main Technologies
- [Express.js](http://expressjs.com/)
- [Webpack](https://webpack.github.io/)
- [Babel](https://babeljs.io/)
- [React.js](https://facebook.github.io/react/)
 - [Redux](https://github.com/reactjs/redux)
 - [React Redux](https://github.com/reactjs/react-redux)
 - [React Router](https://github.com/reactjs/react-router)
 - [react-router-redux](https://github.com/reactjs/react-router-redux)

### Description


<!-- This branch enables the client-side app to be server-rendered first before it
is sent and mounted onto the DOM. While React Router is not necessary to
complete this task, I've added it so that the client can handle its own
routing instead of making requests to the server every time.

On the server-side, we create a single-use instance of React Router and
initialize the history object. Once that happens we use the `renderToString`
method to generate the initial markup for our app and merge it into our
`index.pug` template.

For more information on React Router, take a look at their tutorial
[here](https://github.com/reactjs/react-router-tutorial). -->

## Branches

1. [Express.js](../../tree/express)
2. [Transpiling](../../tree/transpiling)
3. [Vanilla React.js](../../tree/react)
4. [Server-Rendered React.js](../../tree/server-rendered-react)
5. **[React.js + Redux](../../tree/react-redux)**

## How to Run

**NOTE:** Make sure to have [Node.js](https://nodejs.org/en/) installed!
Also, all the build scripts are specific to Linux-based systems (sorry Windows).

If you ever forget, all the build/run commands are in the `package.json`

1. Install dependencies - `npm install`
2. Open 2 terminal windows (if you want webpack to watch and rebuild client)
 * Build & run server - `npm run server`
 * Build client (watches for changes) - `npm run client`
 * Build client (don't watch for changes) - `npm run client-single`
3. Open browser to `127.0.0.1:8080` or `localhost:8080`

## Structure
```
Project
|-- src (Project source)
|   |-- server
|   |   |-- server.js
|   |   |-- config
|   |   |   `-- [Routing config]
|   |   `-- templates
|   |       `-- [Templating files (probably .pug)]
|   |-- client
|   |   |-- client.jsx
|   |   `-- [Styling files]
|   `-- shared
|       |--reactRoutes.jsx
|       `--[React components]
|-- static
|   `-- [Public static resources (Ex: favicon.ico)]
|-- package.json (Project config)
`-- webpack.config.js (Build config)
```

## Motivation

When I first started this project, it was meant to be a partly documentary process with each branch representing each stage of growth for my development career. This way friends (or anybody in general) trying to follow the same path would have a kind of guideline to follow. In the end, I never had enough time to accomplish that (and the way I learned probably also was not the best way to learn). 

This repo is now a place where I can just deposit all my boilerplates. I sometimes go on these stints where I'll get overly ambitious and start a bunch of different projects. There almost always ends up being a bunch of code that I end up copy-pasting so I decided to stop and make a  repo that I can clone to start new projects.