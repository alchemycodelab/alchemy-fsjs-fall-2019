import { INCREMENT_AGE, incrementAge } from './dogActions';

describe('dog actions', () => {
  it('creates an increment age action', () => {
    expect(incrementAge()).toEqual({
      type: INCREMENT_AGE
    });
  });
});
