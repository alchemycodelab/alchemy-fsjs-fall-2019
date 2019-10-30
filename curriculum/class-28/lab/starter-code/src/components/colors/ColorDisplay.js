import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ backgroundColor }) => (
  <div style={{
    backgroundColor,
    width: '100px',
    height: '100px'
  }}></div>
);

ColorDisplay.propTypes = {
  backgroundColor: PropTypes.string.isRequired
};

export default ColorDisplay;
