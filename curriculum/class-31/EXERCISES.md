# React Forms and Router

## Create and render a TextFormatter component

Demo [Simple Text Formatter](https://demo.alchemycodelab.io/simple-text-formatter/)

* create a `TextFormatter` component
  * use a text input to capture text
  * print text below input
  * use a color input to set the color of the text
  * BONUS
    * use figlet (`npm i figlet`) to format the text
    * HINT: you'll need to `cp -r node_modules/figlet/fonts .`
* create an `App` component
* create an `index.js` that renders your `App` component

## Create a color routes application

Demo [Simple Color Routes](http://demo.alchemycodelab.io/simple-color-routes)

* create a `Red` component that displays a red splotch
* create a `Blue` component that displays a blue splotch
* create a `Yellow` component that displays a yellow splotch
* create a `Header` component
  * have a nav with links to `/red`, `/blue`, `/yellow`
* create an `App` component
  * render your `Header` component
  * create routes for `Red`, `Blue`, `Yellow`
* create an `index.js` that renders your `App` component
* BONUS
  * create a route `/:color` that can display any color
