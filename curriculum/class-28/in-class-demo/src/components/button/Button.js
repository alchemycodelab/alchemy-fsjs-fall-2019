import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ handleClick, count }) => {
  return (
    <button onClick={handleClick}>Increment - {count}</button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

export default Button;
