import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import VideoPlayer from '../components/videos/VideoPlayer';
import { getVideoEmbedUrl } from '../selectors/videosSelectors';

export default function VideoPlayerContainer({ videoId }) {
  const url = useSelector(state => getVideoEmbedUrl(state, videoId));

  return <VideoPlayer url={url} />;
}

VideoPlayerContainer.propTypes = {
  videoId: PropTypes.string.isRequired
};

// const mapStateToProps = (state, { videoId }) => ({
//   url: getVideoEmbedUrl(state, videoId)
// });

// export default connect(
//   mapStateToProps
// )(VideoPlayer);
