import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ url }) => (
  <iframe src={url} />
);

VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired
};

export default VideoPlayer;
