import { createStore, compose } from 'redux';

const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'DRINK_COFFEE':
      return { ...state, coffees: state.coffees + 1 };
    case 'EAT_SNACKS':
      return { ...state, snacks: state.snacks + 1 };
    case 'TAKE_NAP':
      return { ...state, naps: state.naps + 1 };
    case 'STUDY':
      return { ...state, studies: state.studies + 1 };
    default:
      return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers()
);
