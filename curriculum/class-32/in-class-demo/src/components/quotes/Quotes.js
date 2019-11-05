import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';
import styles from './Quotes.css';

const Quotes = ({ quotes }) => {
  const quoteElements = quotes.map(quote => (
    <li key={quote.text}>
      <Quote name={quote.name} text={quote.text} image={quote.image} />
    </li>
  ));

  return (
    <ul className={styles.Quotes}>
      {quoteElements}
    </ul>
  );
};

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default Quotes;
