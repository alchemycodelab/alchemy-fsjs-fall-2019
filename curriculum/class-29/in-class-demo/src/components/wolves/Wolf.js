import React from 'react';
import PropTypes from 'prop-types';

const Wolf = ({ name, img }) => {
  return (
    <figure>
      <img src={img} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

Wolf.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default Wolf;
