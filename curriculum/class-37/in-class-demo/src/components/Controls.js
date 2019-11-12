import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ title, subtitle, handleChange }) => (
  <>
    <input type="text" name="title" value={title} onChange={handleChange} />
    <input type="text" name="subtitle" value={subtitle} onChange={handleChange} />
  </>
);

Controls.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Controls;
