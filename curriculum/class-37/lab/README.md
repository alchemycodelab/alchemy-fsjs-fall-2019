# LAB - Redux in Depth

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

### Refactor

Refactor your Moods application so it uses action creators and selectors.

#### Action creators

* use action creators to dispatch actions
* create action type constants

#### Selectors

* use selectors to select data in `mapStateToProps`
* use selectors to derive data

#### Reducers

* extract reducer into its own file
* use action type constants

### Add Reset button

Add a reset button that resets all state to 0. You should only add one
action type.

### Add a new reducer

Add the ability to save a game state. Store the state with a new reducer.

* add a new reducer and use `combineReducer`
* create a button to store your current game state
* create a sidebar with all previous stored games

#### Stretch

* add ability to click on a previous game and load that game as
  your current game
  
### Assignemnt Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
