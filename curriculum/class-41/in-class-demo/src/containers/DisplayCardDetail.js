import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCard } from '../actions/cardsActions';
import CardDetail from '../components/cards/CardDetail';
import { getCard, getCardsLoading } from '../selectors/cardsSelectors';

const DisplayCardDetail = ({ match }) => {
  const card = useSelector(state => getCard(state, match.params.id));
  const loading = useSelector(getCardsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!card) {
      dispatch(fetchCard(match.params.id));
    }
  }, []);

  if(loading) return <h1>Gathering...</h1>;
  if(!card) return <h1>No Card Found</h1>;

  return (
    <CardDetail {...card} />
  );
};

DisplayCardDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default DisplayCardDetail;
