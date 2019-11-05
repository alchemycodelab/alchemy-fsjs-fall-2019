import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quote = ({ name, text, image }) => {
  return (
    <figure className={styles.Quote}>
      <img src={image} alt={name} />
      <figcaption>{name}</figcaption>
      <p>{text}</p>
    </figure>
  );
};

Quote.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Quote;
