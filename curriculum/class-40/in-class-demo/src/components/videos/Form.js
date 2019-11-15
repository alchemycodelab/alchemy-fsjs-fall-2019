import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleSubmit }) => {
  const [videoId, setVideoId] = useState();

  const handleFormSubmit = event => {
    event.preventDefault();
    handleSubmit(videoId);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={videoId}
        onChange={({ target }) => setVideoId(target.value)}/>
      <button>Submit</button>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Form;
