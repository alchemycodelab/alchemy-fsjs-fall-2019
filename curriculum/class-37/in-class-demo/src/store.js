import { createStore } from 'redux';
import { INCREMENT_AGE, SET_DOG_NAME } from './actions/dogActions';

const initialState = {
  name: 'spot',
  age: 5,
  weight: '20 lbs'
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT_AGE:
      return { ...state, age: state.age + 1 };
    case SET_DOG_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
