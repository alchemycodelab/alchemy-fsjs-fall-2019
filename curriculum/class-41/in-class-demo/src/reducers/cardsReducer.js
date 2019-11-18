import { FETCH_CARDS_LOADING, FETCH_CARDS_DONE, FETCH_CARDS, FETCH_CARD, FETCH_CARD_LOADING, FETCH_CARD_DONE } from '../actions/cardsActions';

const initialState = {
  list: [],
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CARD_LOADING:
    case FETCH_CARDS_LOADING:
      return { ...state, loading: true };
    case FETCH_CARD_DONE:
    case FETCH_CARDS_DONE:
      return { ...state, loading: false };
    case FETCH_CARDS:
      return { ...state, list: [...state.list, ...action.payload] };
    case FETCH_CARD:
      return { ...state, list: [...state.list, action.payload] };
    default:
      return state;
  }
}
