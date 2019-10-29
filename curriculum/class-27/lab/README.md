# LAB - Component Based UI

Create and style a counter application using React components.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

Starter code has been provided for you in the `/lab/starter-code` folder.

## Requirements

### Modularize and Refactor

Refactor the application given by first modularizing it, and then
altering it's basic functionality of generating a random number
into a proper counter application that tracks a number based on
button clicks.

* Move the `Header` and `Footer` components to separate files
* Properly `export` them as defaults
* Import them into the `App` Component using ES6 `import` statement
* Create a `Character` component that takes `img`, `name`, and `species`
  as props
* Import `Character` into `App` and display 10 Rick and Morty characters
  (or characters from your favorite show)
* BONUS:
  * Make a `List` component that takes and array of `items` and
    a `component`
  * `List` creates a `ul` of `li` with `component` by iterating over
    `items`

### Design Implementation

* Add some creative styling for the header in a `Header.css` file
* Create a file called `Character.css` and `import` that into
  the `Character` component
  * Add character styling like https://rickandmortyapi.com

### Assignemnt Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
