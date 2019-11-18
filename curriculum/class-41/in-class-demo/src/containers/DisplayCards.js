import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cards from '../components/cards/Cards';
import { getCards, getCardsLoading } from '../selectors/cardsSelectors';
import { fetchCards } from '../actions/cardsActions';

function DisplayCards({ cards, loading, fetchCards }) {
  useEffect(() => {
    fetchCards();
  }, []);

  if(loading) return <h1>Gathering...</h1>;

  return (
    <Cards cards={cards} />
  );
}

DisplayCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchCards: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cards: getCards(state),
  loading: getCardsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCards() {
    dispatch(fetchCards());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayCards);
