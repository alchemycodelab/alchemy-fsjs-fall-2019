import { combineReducers } from 'redux';
import quote from './quoteReducer';
import cards from './cardsReducer';

export default combineReducers({
  quote,
  cards
});
