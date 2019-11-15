import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

const Thumbnails = ({ imgs }) => {
  const imgElements = imgs.map(({ img, videoId }) => (
    <li key={img}>
      <Thumbnail img={img} videoId={videoId} />
    </li>
  ));

  return (
    <ul>
      {imgElements}
    </ul>
  );
};

Thumbnails.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired
  })).isRequired
};

export default Thumbnails;
