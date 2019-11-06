import React from 'react';
import { shallow } from 'enzyme';
import HabitTracker from './HabitTracker';

describe('HabitTracker', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<HabitTracker />);
    expect(wrapper).toMatchSnapshot();
  });

  it('handlesProgress by incrementing habit progress state', () => {
    const wrapper = shallow(<HabitTracker />);

    wrapper.instance().handleProgress({ target: { name: 'Drink Water' } });

    const drinkWaterHabit = wrapper.state('habits')[0];
    expect(drinkWaterHabit).toEqual({
      title: 'Drink Water',
      progress: 1,
      goal: 8
    });
  });
});
