import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Thumbnail = ({ img, videoId }) => (
  <Link to={`/videos/${videoId}`}>
    <figure>
      <img src={img} />
    </figure>
  </Link>
);

Thumbnail.propTypes = {
  img: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired
};

export default Thumbnail;
