import { getCards, getCard } from '../services/mtgApi';

export const FETCH_CARDS_LOADING = 'FETCH_CARDS_LOADING';
export const FETCH_CARDS = 'FETCH_CARDS';
export const FETCH_CARDS_DONE = 'FETCH_CARDS_DONE';
export const fetchCards = () => dispatch => {
  dispatch({
    type: FETCH_CARDS_LOADING
  });

  getCards()
    .then(cards => {
      dispatch({
        type: FETCH_CARDS,
        payload: cards
      });

      dispatch({
        type: FETCH_CARDS_DONE
      });
    });
};

export const FETCH_CARD_LOADING = 'FETCH_CARD_LOADING';
export const FETCH_CARD = 'FETCH_CARD';
export const FETCH_CARD_DONE = 'FETCH_CARD_DONE';
export const fetchCard = id => ({
  type: FETCH_CARD,
  payload: getCard(id),
  pendingType: FETCH_CARD_LOADING,
  fulfilledType: FETCH_CARD_DONE
});
