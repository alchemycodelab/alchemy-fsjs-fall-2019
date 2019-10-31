import React from 'react';
import PropTypes from 'prop-types';

function WaterDisplay({ total, max }) {
  return (
    <section>
      <p>{total}oz of water today!!</p>
      <progress max={max || 240} value={total} />
    </section>
  )
}

WaterDisplay.propTypes = {
  total: PropTypes.number.isRequired,
  max: PropTypes.number
};

export default WaterDisplay;
