import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ decrement, increment }) => (
  <>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </>
);

Controls.propTypes = {
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
};

export default Controls;
