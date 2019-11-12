import { combineReducers } from 'redux';
import dog from './dogReducer';
import cat from './catReducer';
import titleSubtitle from './titleSubtitleReducer';

export default combineReducers({
  dog,
  cat,
  titleSubtitle
});
