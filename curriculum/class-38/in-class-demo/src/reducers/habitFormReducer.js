import { FORM_UPDATE_TITLE, FORM_UPDATE_GOAL } from '../actions/habitFormActions';

const initialState = {
  title: '',
  goal: 0
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FORM_UPDATE_TITLE:
      return { ...state, title: action.payload };
    case FORM_UPDATE_GOAL:
      return { ...state, goal: action.payload };
    default: 
      return state;
  }
}
