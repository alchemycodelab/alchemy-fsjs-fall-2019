import React from 'react';
import PropTypes from 'prop-types';

const ColorPicker = ({ colors, selectColor }) => {
  const colorButtons = colors.map(color => (
    <button key={color} onClick={() => selectColor(color)}>{color}</button>
  ))
  return (
    <>
      {colorButtons}
    </>
  )
};

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectColor: PropTypes.func.isRequired
};

export default ColorPicker;
