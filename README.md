# progress-boilerplate [Branch: reactjs]
My personal boilerplate for full-stack JS projects based on how I learned to
develop full-stack JS.

**Note:** Make sure you have Node.js installed!

## Starting with React.js
So this branch isn't really reflective of how I started with React. I learned
React by plunging in head first and basically jumbled everything together up
until the cumulation of all the other progressive branches.

This branch builds off of the
[Express.js](https://github.com/MorganCAw/progressive-js-boilerplate/tree/expressjs)
branch and is almost exactly what the
[Getting Started](https://facebook.github.io/react/docs/getting-started.html#quick-start-without-npm)
section has on the [React.js](https://facebook.github.io/react/index.html) main
site.

## What's going on ...
Similar to the last branch, you can run the local-server using the `npm run
local-server` command. The difference in this branch is that instead of having
the **Hello World** text hardcoded into the site, it is now rendered using
React.

How this is done is through all of the scripts located in the `static/script`
directory. In this directory, there are 3 files

1. `react.js`
2. `react-dom.js`
3. `HelloWorld.js`

`react.js` and `react-dom.js` essentially are the files that make up React.js.
Since React v0.14, the folks over at Facebook split off the chunk that handles
the DOM into its own module because
[React Native](https://facebook.github.io/react-native/) also uses the React
component but doesn't need access to the DOM due to it being on mobile.

The `HelloWorld.js` file is the code that we create that tells React to render
our **Hello World** text onto the page. The content of this file is actually
very minimal but hopefully I'll be able to demonstrate more of React's
functionality in the future branches.


Taking a look into the `HelloWorld.js` file, this is all it has:
```jsx
ReactDOM.render(
  <h1>Hello World!</h1>,
  document.getElementById('content')
);
```

In order to get access to `ReactDOM` in this file, we include the `react.js` and
`react-dom.js` files in our `index.jade`. After this happens, we just call the
`render` method in `ReactDOM` and give it 2 arguments.

#### The First Argument

```jsx
<h1>Hello World!</h1>
```

While this may look like we're passing an h1 element into the render method,
this is actually .jsx syntax for simplifying the following code:

```jsx
React.createElement('h1', null, 'Hello, world!')
```

Both are valid ways of doing things but in my opinion, jsx syntax does make
creating React elements much more simplified.

#### The Second Argument

```javascript
document.getElementById('content')
```

All this statement does is tell `ReactDOM` which DOM element to mount itself on.
If you take a look at the `index.jade`, you'll see that we've created a
`#content` element where `|Hello World` used to be.

If you open your browser's dev tools though, you'll see that the page has
rendered the following:

```HTML
<div id="content">
  <h1 data-reactid=".0">Hello World</h1>
</div>
```

## Additional Information
That's basically it for this branch. If you want more information on
[React.js](https://facebook.github.io/react/index.html), they have a lot of
information in their
[docs](https://facebook.github.io/react/docs/getting-started.html). Or if you
want to get more information on [Jade](http://jade-lang.com/), you can read up
more on their [reference](http://jade-lang.com/reference/) page as well.