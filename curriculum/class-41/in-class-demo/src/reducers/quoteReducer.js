import { SET_QUOTE } from '../actions/quoteActions';

const initialState = {
  name: '',
  img: '',
  text: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_QUOTE:
      return action.payload;
    default:
      return state;
  }
}
