import React from 'react';
import PropTypes from 'prop-types';
import styles from './Color.css';

const colorToHex = color => color.toString(16).padStart(2, '0').toUpperCase();

const rgbToHex = rgb => {
  return `#${colorToHex(rgb.r)}${colorToHex(rgb.g)}${colorToHex(rgb.b)}`;
};

const Color = ({ name, rgb }) => {
  const hex = rgbToHex(rgb);

  return (
    <dl className={styles.Color}>
      <dt><input type="text" /></dt>
      <dd>{name}</dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>RGD</dt>
      <dd>
        <p>Red - {rgb.r}</p>
        <p>Green - {rgb.g}</p>
        <p>Blue - {rgb.b}</p>
      </dd>

    </dl>
  );
};

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.shape({
    r: PropTypes.number.isRequired,
    g: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired
  }).isRequired
};

export default Color;
