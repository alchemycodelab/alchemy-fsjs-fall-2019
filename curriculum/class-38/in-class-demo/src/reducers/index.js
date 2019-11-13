import { combineReducers } from 'redux';
import habits from './habitsReducer';
import form from './habitFormReducer';

export default combineReducers({
  habits,
  form
});
