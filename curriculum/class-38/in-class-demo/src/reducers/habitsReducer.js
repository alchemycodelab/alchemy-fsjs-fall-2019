import { CREATE_HABIT, INCREMENT_PROGRESS } from '../actions/habitsActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case CREATE_HABIT:
      return [...state, action.payload];
    case INCREMENT_PROGRESS:
      return state.map(habit => {
        if(habit.title !== action.payload) return habit;
        
        return { ...habit, progress: habit.progress + 1 };
      });
    default:
      return state;
  }
}
