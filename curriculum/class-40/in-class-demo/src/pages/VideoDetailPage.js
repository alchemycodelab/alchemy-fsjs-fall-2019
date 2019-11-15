import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';

const VideoDetailPage = ({ match }) => (
  <VideoPlayerContainer videoId={match.params.videoId} />
);

VideoDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      videoId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default VideoDetailPage;
