# React Hooks

React hooks allow to to easily create and manage state in a **functional** component.

Hooks are JavaScript functions, but they impose additional rules:

* Hooks must be named with a `use` prefix (i.e. `useFishingPole`)
* Only call Hooks at the top level. Don’t call Hooks inside loops,
  conditions, or nested functions.
* Only call Hooks from React function components. Don’t call Hooks
  from regular JavaScript functions. (There is just one other valid
  place to call Hooks — your own custom Hooks. We’ll learn about
  them in a moment.)

## Resources

* [Hooks API](https://reactjs.org/docs/hooks-reference.html)

## useState

`useState` creates react state (like the state that we create in
a class component) inside a functional component.

```js
import React, { Component } from 'react'

export default class MyComp extends Component {
  state = {
    count: 0,
    input: ''
  }

  handleCount = () => {
    this.setState(state => ({ count: state.count + 1 }));
  }

  handleInputChange = ({ target }) => {
    this.setState({ input: target.value });
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleCount}>Add</button>
        <input type="text" value={this.state.input} onChange={this.handleInputChange} />
      </>
    )
  }
}
```

```js
import React, { useState } from 'react'

export default function MyComp() {
  const [count, updateCount] = useState(0);
  // count -> this.state.count;
  // updateCount(5) -> this.setState({ count: 5 })
  const [input, updateInput] = useState('');

  const handleCount = () => updateCount(prevCount => prevCount + 1);
  // this.setState(state => ({ count: state.count + 1 }));
  const handleInputChange = ({ target }) => updateInput(target.value);

  return (
      <>
        <h1>{count}</h1>
        <button onClick={handleCount}>Add</button>
        <input type="text" value={input} onChange={handleInputChange} />
      </>
    )
}
```

## useEffect

`useEffect` allows us to perform side effects (changes that don't depend
on what is passed to our component). This is useful for making API calls.

```js
import React, { useState, useEffect } from 'react';
import { getCharacters } from '../services/characterApi.js';

export default function MyComp({ page, title }) {
  const [characters, updateCharacters] = useState([]);

  useEffect(() => {
    getCharacters(page)
      .then(newCharacters => updateCharacters(newCharacters));
  }, [page]);

  return (
    <>
      <h1>{title}</h1>
      <ul>
        {characters.map(character => (
          <li key={character._id}>
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
    </>
    )
}
```
