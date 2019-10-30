import React from 'react';
import PropTypes from 'prop-types';

const ColorPicker = ({ colors }) => {
  const style = {
    border: 0,
    padding: '1rem',
    margin: '0.4rem'
  };

  const buttons = colors.map(color => (
    <button
      key={color}
      style={{ ...style, backgroundColor: color }}
      onClick={() => console.log(color)}>{color}</button>
  ));

  return (
    <>
      {buttons}
    </>
  );
};

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string)
};

ColorPicker.defaultProps = {
  colors: ['red', 'blue', 'yellow']
};

export default ColorPicker;
