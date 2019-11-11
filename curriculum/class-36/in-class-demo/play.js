import { createStore } from 'redux';

const initalState = {
  drink: null,
  chips: null,
  sandwich: null,
  sweet: null
};

function reducer(state = initalState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
    case 'REMOVE_DRINK':
      return { ...state, drink: null };
    default:
      return state;
  }
}

const store = createStore(reducer);

const unsubscibe = store.subscribe(() => {
  console.log('something changed');
});

console.log('first', store.getState());

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'water'
});

unsubscibe();

console.log('second', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'fritos'
});

console.log('third', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK'
});

console.log('fourth', store.getState());
