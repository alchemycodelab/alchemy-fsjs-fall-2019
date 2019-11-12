import reducer from './dogReducer';
import { incrementAge, setDogName } from '../actions/dogActions';

describe('dog reducer', () => {
  it('handles unknown action', () => {
    const newState = reducer(undefined, { type: '@@INIT' });
    expect(newState).toEqual({
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    });
  });

  it('handles the INCREMENT_AGE action', () => {
    const state = {
      name: 'my test dog',
      age: 3,
      weight: '20 lbs'
    };

    const action = incrementAge();

    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...state,
      age: 4
    });
  });

  it('handles the SET_DOG_NAME action', () => {
    const state = {
      name: 'my test dog',
      age: 3,
      weight: '20 lbs'
    };

    const action = setDogName('my new name');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...state,
      name: 'my new name'
    });

    expect(state).toEqual({
      name: 'my test dog',
      age: 3,
      weight: '20 lbs'
    });
  });
});
