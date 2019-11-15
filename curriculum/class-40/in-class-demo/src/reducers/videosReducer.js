import { ADD_VIDEO } from '../actions/videosActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_VIDEO:
      return [...state, action.payload];
    default:
      return state;
  }
}
