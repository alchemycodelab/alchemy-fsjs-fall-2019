import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote }) => (
  <figure>
    <img src={quote.img} alt={quote.name} />
    <figcaption>{quote.name}</figcaption>
    <p>{quote.text}</p>
  </figure>
);

Quote.propTypes = {
  quote: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Quote;
