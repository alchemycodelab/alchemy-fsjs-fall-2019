# LAB - Props and State

This lab is an opportunity to practice passing props and state between components. Its also the first refactoring of a "To Do List" application.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

Starter code has been provided for you in the `/lab/starter-code` folder. There are 3 separate assignments, each with it's own folder.

## Refactor

Right now state in contained inside of the `App` component. Extract
state from the `App` component and create a `src/containers/ColorContainer.js`
file. Import the `ColorContainer` into `App`.

## Random Color

Demo [Random Color](https://demo.alchemycodelab.io/random-color)

* create a `src/containers/RandomColor.js` that changes colors
  randomly every second
* import `RandomColor` into `App'
* BONUS
  * if the color wasn't changed (the same color was randomly selected) set the
    background image to https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg

## Tests

Write mount/enzyme tests for each component

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
