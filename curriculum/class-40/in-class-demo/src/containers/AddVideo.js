import React from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/videos/Form';
import { addVideo } from '../actions/videosActions';

export default function AddVideo() {
  const dispatch = useDispatch();
  const handleSubmit = videoId => dispatch(addVideo(videoId));
  return (
    <Form handleSubmit={handleSubmit}/>
  );
}

// const mapDispatchToProps = dispatch => ({
//   handleSubmit(videoId) {
//     dispatch(addVideo(videoId));
//   }
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(Form);
