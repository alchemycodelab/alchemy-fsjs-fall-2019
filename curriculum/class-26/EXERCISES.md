# Promise and React Exercises

## Transformer

* create and export a `transform(src)` function
  * require `const fsPromises = require('fs').promises;`
  * use `fsPromises.readFile` to read a file
  * `then` remove all capital letters
  * `then` make all letters capital
  * `then` reverse the string

## Create and render a Color component

Demo [Simple Color](http://demo.alchemycodelab.io/simple-color)

* create a `Color` component that displays a color's name, hex, and rgb
* create an `App` component that uses your `Color` component
* create an `index.js` that renders your `App` component
* BONUS
  * use [inline styling](https://reactjs.org/docs/dom-elements.html#style)
    to display the color on the page
