# Redux

## Agenda

* store
* actions
* reducers
* using redux
  * `getState`
  * `dispatch`
  * `subscribe`
* react and redux

## Dependencies

* `npm i redux react-redux`

## Resources

* [Three Principles](https://redux.js.org/introduction/three-principles)
* [Actions](https://redux.js.org/basics/actions)
* [Reducers](https://redux.js.org/basics/reducers)

## Store

The store is responsible for holding our applications state. You can
think of it as a global object accessible from anywhere in your application,
like `window.location`.

## Actions

Actions are plain JavaScript objects that send data/events to your store.
Actions always have a `type` key which is the name of the event.
Additionally, an action can also have a `payload`.

```js
const myAction = {
  type: 'DO_STUFF'
}
```

## Reducers

Reducers are pure functions responsible for updating our state in response
to actions. Every action we dispatch will be sent to the reducer along with
the current state. The reducer is then responsible for handling the action
and returning a new state object based on the action.

```js
function reducer(state, action) {
  switch(action.type) {
    case 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}
```

**NOTE** don't forget to provide a default case in case your reducer
cannot handle a particular action.

We can also setup initial state with our reducer.

```js
const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}
```

## Using Redux

We can create a new store object by using the `createStore` function
and passing it a reducer.

```js
import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);
```

### `getState`

We can get our current state with `getState`.

```js
import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState()); // { stuff: 'unfinished' }
```

### `dispatch`

We can send actions to our store with `dispatch`.

```js
import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);
store.dispatch({
  type: 'DO_STUFF'
})
console.log(store.getState()); // { stuff: 'done' }
```

### `subscribe`

We can subscribe to state changes with subscribe

```js
import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);
store.subscribe(() => {
  // will print every time state changes
  console.log(store.getState());
});

store.dispatch({
  type: 'DO_STUFF'
})
```

`subscribe` returns an unsubscribe function we can use to
stop listening to state changes

```js
import { createStore } from 'redux';

const initialState = {
  stuff: 'unfinished'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DO_STUFF':
      return { stuff: 'done' };
    default:
      return state;
  }
}

const store = createStore(reducer);
const unsubscribe = store.subscribe(() => {
  // will print every time state changes
  console.log(store.getState());
});

store.dispatch({
  type: 'DO_STUFF'
})

unsubscribe();
```

## React and Redux

### Setting up the store

In order to start using redux with react we need to setup a store.

```js
import { createStore } from 'redux';
import reducer from './reducers';

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

### Using Provider

In order for our store to get passed to all components, without explicitly
passing it as a property we can setup a provider.

```js
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### connect

`react-redux` provides a `connect` higher-order component that allows
us to connect a component to the redux store. All connected components
are containers.

The `connect` function takes two arguments `mapStateToProps` and
`mapDispatchToProps` and returns a function that takes a component
that you want to connect to the store.

```js
import { connect } from 'react-redux';
import MyComponent from '../../components/MyComponent';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);

```

Both `mapStateToProps` and `mapDispatchToProps` are functions that return
objects. Each key of the returned object will be passed to the connected
component as a property.

#### mapStateToProps

`mapStateToProps` is a function that takes state. State comes from the store
via `store.getState()`. By using selectors you can get or derive information
from state and map that information onto properties that your component expects.

```js
import { connect } from 'react-redux';
import { getPosts } from '../../selectors/postSelectors';
import Posts from '../../components/posts/Posts';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

export default connect(
  mapStateToProps
)(Posts);
```

#### mapDispatchToProps

`mapDispatchToProps` is a function that takes dispatch. Dispatch is the
`store.dispatch` function. `mapDispatchToProps` is used to pass functions,
as properties, to your component. These functions can dispatch actions to
update your state.

```js
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';
import PostForm from '../../components/posts/PostForm';

const mapDispatchToProps = dispatch => ({
  onSubmit(title, body) {
    dispatch(createPost(title, body));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
```
