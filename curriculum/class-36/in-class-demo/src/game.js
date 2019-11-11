import { createStore } from 'redux';

function reducer(state = '', action) {
  switch(action.type) {
    case 'ADD_A_LETTER':
      return state + action.payload;
    case 'REMOVE_FIRST_LETTER':
      return state.slice(1);
    case 'CRASH_GAME':
      while(true) {
        console.log('1 million');
      }
    case 'SANDWICH':
      return state.charAt(state.length - 1) + state;
    case 'GET_RID_OF_ANNOYING_LETTERS':
      return state.replace(/z|q|x/, 'e');
    case 'ADD_ANNOYING_LETTER':
      return state.replace(/e|t|r|s|a|b/, 'v');
    case 'WIN_GAME':
      return state.replace(/z/, '');
    case 'ADD_LETTER_TO_START':
      return action.payload + state;
    case 'WE_WILL_SEE_IF_THIS_WORKS':
      return state.replace(/fxfvif/, 'ryan');
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_A_LETTER',
  payload: 'x'
});

store.dispatch({
  type: 'ADD_A_LETTER',
  payload: 'i'
});

store.dispatch({
  type: 'REMOVE_FIRST_LETTER'
});

store.dispatch({
  type: 'ADD_A_LETTER',
  payload: 'z'
});

store.dispatch({
  type: 'SANDWICH',
});

store.dispatch({
  type: 'GET_RID_OF_ANNOYING_LETTERS'
});

store.dispatch({
  type: 'ADD_A_LETTER',
  payload: 'f'
});

store.dispatch({
  type: 'SANDWICH'
});

store.dispatch({
  type: 'WIN_GAME'
});

store.dispatch({
  type: 'ADD_ANNOYING_LETTER'
});

store.dispatch({
  type: 'ADD_LETTER_TO_START',
  payload: 'x'
});

store.dispatch({
  type: 'SANDWICH'
});

store.dispatch({
  type: 'WE_WILL_SEE_IF_THIS_WORKS'
});

console.log(store.getState());
