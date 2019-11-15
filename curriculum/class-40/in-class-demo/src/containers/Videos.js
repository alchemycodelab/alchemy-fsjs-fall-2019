import React from 'react';
import { useSelector } from 'react-redux';
import Thumbnails from '../components/videos/Thumbnails';
import { getVideoThumbnails } from '../selectors/videosSelectors';

export default function Videos() {
  const imgs = useSelector(getVideoThumbnails);

  return <Thumbnails imgs={imgs} />;
}

// const mapStateToProps = state => ({
//   imgs: getVideoThumbnails(state)
// });

// export default connect(
//   mapStateToProps
// )(Thumbnails);
