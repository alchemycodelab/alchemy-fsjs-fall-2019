import { combineReducers } from 'redux';
import dog from './dogReducer';
import cat from './catReducer';

export default combineReducers({
  dog,
  cat
});
