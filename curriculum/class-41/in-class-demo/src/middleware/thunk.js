export const thunkMiddleware = store => next => action => {
  console.log('i am in thunk land!', action);
  if(typeof action === 'function') {
    action(store.dispatch);
  } else {
    next(action);
  }
};
