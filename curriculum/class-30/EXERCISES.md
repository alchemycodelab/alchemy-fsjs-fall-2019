# React Async Exercises

## Name Tag

* `NameTag.js`
  * Container component
  * contains state
  * Uses the other components
* `ColorSelector.js`
  * Presentational/Functional component
  * Color input to change font color
  * Color input to change background color
* `TextSelector.js`
  * Presentational/Functional component
  * Text input
* `Shape.js`
  * Presentational/Functional component
  * takes `text`, `color` and `backgroundColor` props
  * Should display `text`
  * Should change `color` and `backgroundColor` based on props
  * HINT: Use `<div style={{ width: '100px', height: '100px' }}>` to pass in styles

## Create an application to display futurama quotes

Demo [Simple Futurama Quotes](http://demo.alchemycodelab.io/simple-futurama-quotes)

* create a `Quote` presentational component
  * display character, quote, and image
* create a `Quotes` presentational component
* create a `TopQuotes` container component
  * `TopQuotes` take a count property
  * fetch `count` quotes from the [futurama api](http://futuramaapi.herokuapp.com/) and
    display them
* create an `App` component that uses your `TopQuotes` component
* create an `index.js` that renders your `App` component
* BONUS
  * create a `CharacterQuotes` container component
    * `CharacterQuotes` take a count and character
    * display quotes by only that character
  * add a select to select characters to get quotes for
