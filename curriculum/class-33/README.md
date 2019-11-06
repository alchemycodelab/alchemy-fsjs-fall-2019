# Custom Hooks

## Agenda

* useReducer
* custom hooks
  * useCharacters

## useReducer

An alternative to useState. Accepts a reducer of type
`(state, action) => newState`, and returns the current
state paired with a dispatch method. (If you’re familiar
with Redux, you already know how this works.)

```js
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter({initialState}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
```

## Custom Hooks

* Use the `useXxxx()` naming convention
* Manage their own state internally
* Export data, methods, or both
* Have access to the react cycle
* Used in functional components

### useCharacters

```js
import { useState, useEffect } from 'react';
import { getCharacters } from '../services/charactersApi';

export const useCharacters = (page = 1) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(page)
      .then(fetchedCharacters => setCharacters(fetchedCharacters));
  }, [page]);

  return characters;
}

....

import React from 'react';
import Characters from '../components/characters/Characters';
import { useCharacters } from '../hooks/characters'

const AllCharacters = () => {
  const characters = useCharacters()

  return (
    <Characters characters={characters} />
  );
};

export default AllCharacters;
```
