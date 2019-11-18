# Redux Async Lab

## Create an Avatar character list

Demo [Redux Avatar Thunk](https://demo.alchemycodelab.io/redux-avatar-thunk)

* Create your `App` component
* Create your presentational components
  * `Character`
  * `Characters`
* create a service to get characters from https://last-airbender-api.herokuapp.com/api/v1/characters
* implement redux
  * create actions to fetch characters
  * create a combine reducer
  * create a store with middleware
    * use the `redux-thunk` middleware
  * create selectors to get character state
    * `getCharacters`
    * `getCharactersLoading`
    * `getCharactersError`
  * create `AllCharacters` container
    * pass it your characters and loading state
    * pass it a function that will fetch from the avatar API and update state

## Create an Avatar character list with promises

Demo [Redux Avatar Promise](https://demo.alchemycodelab.io/redux-avatar-promise)

* create a new branch based on the Redux Avatar Thunk exercise
  * refactor your store to use the promise middleware
  * refactor your action creator
BONUS:
  * Add a character detail page

## Simpsons Quotes

### Fetch Simpsons quotes

Use the [Simpsons Quotes API](https://thesimpsonsquoteapi.glitch.me)

* create `src/services/simpsonsApi.js`
  * create a `getQuote` function that fetches a simpson quote
* create `src/action/simpsons.js`
  * create a `fetchQuote` actionCreator
  * use the promise middleware to fetch from the simpsonsApi
* update the `src/reducers/simpsons.js` reducer to handle your action

### Display Quote

* create a `src/components/quote/Quote.js`
  * display a quote, characterName, and characterImage
* create a `src/containers/facts/SimpsonsQuote.js`
  * create a class `SimpsonsQuote` that takes `quote`, `characterName`,
    `characterImage` and `fetch` props
  * on `componentDidMount` call the `fetch` function
  * `render` the `Quote` component
  * connect `SimpsonsQuote` to redux
    * mapStateToProps passes facts
      * create a `src/selectors/simpsons.js` with a `getQuote`, `getCharacterName`,
        `getCharacterImage` selector
    * mapDispatchToProps passes fetch
      * fetch dispatches the `fetchQuote` action
* Add `SimpsonsQuote` to your `App.js` file

### Add button to fetch another quote

* create a `src/components/quote/Load.js
  * display a button
* add the `Load` component to `SimpsonsQuote`
  * pass `fetch` to the `Load` component

### Refactor

* Show a loading screen while waiting
  * add loading to your redux state
* Create a `withFetch` higher order component

### Deploy

* Deploy your app to netlify
