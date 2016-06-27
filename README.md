# progressive-js-boilerplate

My full-stack JS boilerplates for different technologies.

## Branch: express

### Main Technologies
- [Express.js](http://expressjs.com/)
- [Pug](https://github.com/pugjs/pug)

### Description
This branch is the barest-boned of boilerplates. All it does is run an Express
instance that renders Pug templates.

## Branches
1. **[Express.js](../../tree/express)**
2. [Transpiling](../../tree/transpiling)
3. [Vanilla React.js](../../tree/react)
4. [Server-Rendered-React](../../tree/server-rendered-react)
5. ~~[React.js + Redux](../../tree/reactredux)~~

## How to Run
**NOTE:** Make sure to have [Node.js](https://nodejs.org/en/) installed!
Also, all the build scripts are specific to Linux-based systems (sorry Windows).

If you ever forget, all the build/run commands are in the `package.json`

1. Install dependencies - `npm install`
2. Open a terminal window
3. Run server - `npm run server`
 * Run production server - `npm start`
3. Open browser to `127.0.0.1:8080` or `localhost:8080`

## Structure
```
Project
|-- src (Project source)
|   |-- server
|       |-- server.js
|       |-- config
|       |   `-- [Routing config]
|       |
|       `-- templates
|           `-- [Templating files (probably .pug)]
|-- static
|   `-- [Public static resources (Ex: favicon.ico)]
`-- package.json (Project config)
```

## Motivation
When I first started this project, it was meant to be a partly documentary
process with each branch representing each stage of growth for my development
career. This way friends (or anybody in general) trying to follow the same path
would have a kind of guideline to follow. In the end, I never had enough time to
accomplish that (and the way I learned probably also was not the best way to
learn). 

This repo is now a place where I can just deposit all my boilerplates. I
sometimes go on these stints where I'll get overly ambitious and start a bunch
of different projects. There almost always ends up being a bunch of code that I
end up copy-pasting so I decided to stop and make a  repo that I can clone to
start new projects.