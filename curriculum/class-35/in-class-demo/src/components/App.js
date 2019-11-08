import React, { useContext } from 'react';
import Article from './Article';
import { useStoreState, useDispatch } from '../store';

export default function App() {
  const state = useStoreState();
  const dispatch = useDispatch();

  return (
    <>
      <h1>Hello World</h1>
      <input
        type="number"
        value={state.count}
        onChange={({ target }) => dispatch({ type: 'set', payload: +target.value })} />
      <button onClick={() => dispatch({ type: 'decrement' })}>- {state.count}</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+ {state.count}</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

      <Article />
    </>
  );
}
