import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ count }) => (
  <h2>{count}</h2>
);

Display.propTypes = {
  count: PropTypes.number.isRequired
};

export default Display;
