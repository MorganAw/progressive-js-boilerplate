# progress-boilerplate [Branch: expressjs]
My personal boilerplate for full-stack JS projects based on how I learned to
develop full-stack JS.

**Note:** Make sure you have Node.js installed!

## Running a basic Express.js server
Assuming you've aleardy cloned the repository to your local machine ...

1. Install the required node modules
...```
...$ npm install
...```
2. Run the server
...```
...$ npm run local-server
...```
3. Open `127.0.0.1:8080` on your browser

## What's going on ...
When you run the `$ npm run local-server` command, it actually just runs the
`local-server` script that I define in the `package.json` file. And what I have
is just the command `node src/server/server.js`. This means that instead of
running the `$ npm run local-server` command, you could start the server in the
exact same way by running the `$ node src/server/server.js` command.

This command just tells your computer to have node run the `server.js` file.
In this file, we create an instance of an Express application and tack on our
configurations (static file locations, favicon info, port to listen on, etc).

**The most important thing being configured at this time is the routes!** In
this case, it would be the lines
```javascript
router.get('/', (req, res) => {
  res.status(200).render('index');
});
```
These lines just define what happens when the server encounters a `GET` request
for the root path and in our case, it just sends a response status of `200` and
renders our `index.jade` template!

So now when you direct your browser to `127.0.0.1:8080`, you'll see our `Hello
World`!
