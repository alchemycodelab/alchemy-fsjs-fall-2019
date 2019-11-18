import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './Cards.css';

const Cards = ({ cards }) => {
  const cardElements = cards.map(card => (
    <li key={card.id}>
      <Card {...card} />
    </li>
  ));

  return (
    <ul className={styles.Cards}>
      {cardElements}
    </ul>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
  })).isRequired
};

export default Cards;
