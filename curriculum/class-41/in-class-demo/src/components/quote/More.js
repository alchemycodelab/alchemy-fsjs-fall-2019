import React from 'react';
import PropTypes from 'prop-types';

const More = ({ more }) => (
  <button onClick={more}>More</button>
);

More.propTypes = {
  more: PropTypes.func.isRequired
};

export default More;
