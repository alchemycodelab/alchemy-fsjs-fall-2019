import React from 'react';
import { useDispatch, useStoreState } from '../store';
import Article from './Article';

export default function App() {
  const state = useStoreState();
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch({ type: 'increment' })}>{state.count}</button>
      <Article />
    </>
  );
}
  
