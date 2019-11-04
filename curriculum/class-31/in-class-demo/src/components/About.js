import React from 'react';
import PropTypes from 'prop-types';

const About = ({ match }) => {
  const { name } = match.params;

  return (
    <h1>About {name}</h1>
  );
};

About.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default About;
