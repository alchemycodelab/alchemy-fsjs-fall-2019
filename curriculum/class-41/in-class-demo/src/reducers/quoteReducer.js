import { SET_QUOTE, SET_QUOTE_LOADING, SET_QUOTE_DONE } from '../actions/quoteActions';

const initialState = {
  name: '',
  img: '',
  text: '',
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_QUOTE:
      return { ...state, ...action.payload };
    case SET_QUOTE_LOADING:
      return { ...state, loading: true };
    case SET_QUOTE_DONE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
