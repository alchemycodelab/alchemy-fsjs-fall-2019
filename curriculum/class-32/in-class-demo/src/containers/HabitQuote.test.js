import React from 'react';
import { shallow } from 'enzyme';
import HabitQuote from './HabitQuote';

jest.mock('../services/futuramaApi.js', () => ({
  getQuotes() {
    return Promise.resolve([
      { name: 'Test', text: 'quote 1', image: 'my image' }
    ]);
  }
}));

describe('HabitQuote', () => {
  it('updates state with an array of quotes', () => {
    const wrapper = shallow(<HabitQuote match={{ params: { progress: '3' } }} />);
    return wrapper.instance()
      .fetchQuotes()
      .then(() => {
        expect(wrapper.state('quotes')).toEqual([
          { name: 'Test', text: 'quote 1', image: 'my image' }
        ]);
      });
  });
});
