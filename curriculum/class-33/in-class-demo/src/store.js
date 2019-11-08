import React, { createContext, useReducer, useContext } from 'react';

const StoreContext = createContext();

export const StoreProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useDispatch = () => {
  const storeContext = useContext(StoreContext);
  return storeContext.dispatch;
};

export const useStoreState = () => {
  const storeContext = useContext(StoreContext);
  return storeContext.state;
};
