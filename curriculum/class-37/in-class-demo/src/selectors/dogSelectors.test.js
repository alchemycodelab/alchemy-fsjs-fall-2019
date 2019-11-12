import { getDogName, getDogAge, getDogWeight } from './dogSelectors';

describe('dog selectors', () => {
  it('can get a dogs name', () => {
    const state = {
      dog: {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      }
    };

    const name = getDogName(state);
    expect(name).toEqual('spot');
  });

  it('can get a dogs age', () => {
    const state = {
      dog: {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      }
    };

    const age = getDogAge(state);
    expect(age).toEqual(5);
  });

  it('can get a dogs weight', () => {
    const state = {
      dog: {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      }
    };

    const weight = getDogWeight(state);
    expect(weight).toEqual('20 lbs');
  });
  
});
