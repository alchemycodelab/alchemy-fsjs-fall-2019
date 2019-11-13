import { createHabit } from '../actions/habitsActions';
import reducer from './habitsReducer';

describe('habits reducer', () => {
  it('handles the CREATE_HABIT action', () => {
    const action = createHabit({
      title: 'My Habit',
      progress: 0,
      goal: 100
    });

    const newState = reducer([], action);

    expect(newState).toEqual([
      {
        title: 'My Habit',
        progress: 0,
        goal: 100
      }
    ]);
  });
});
