import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const loggerMiddleware = store => next => action => {
  console.log('in my logger', action, store.getState());

  next(action);

  console.log('current state', store.getState());
};

export default createStore(
  reducer,
  applyMiddleware(
    loggerMiddleware
  )
);
