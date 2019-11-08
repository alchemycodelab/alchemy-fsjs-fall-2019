import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CountContext = createContext({ count: 0 });

export const CountProvider = ({ initialCount, children }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(oldCount => oldCount + 1);
  const decrement = () => setCount(oldCount => oldCount - 1);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

CountProvider.propTypes = {
  initialCount: PropTypes.number.isRequired,
  children: PropTypes.node
};
