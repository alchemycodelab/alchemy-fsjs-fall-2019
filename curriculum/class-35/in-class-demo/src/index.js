import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { CountProvider } from './CountContext';
import { StoreProvider } from './store';

render(
  <StoreProvider reducer={reducer} initialState={{ count: 0 }}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);

function reducer(state, action) {
  switch(action.type) {
    case 'set':
      return { ...state, count: action.payload };
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    default:
      return state;
  }
}
