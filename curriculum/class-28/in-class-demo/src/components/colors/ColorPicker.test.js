import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  it('renders ColorPicker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });

  it('console logs on color click', () => {
    const wrapper = shallow(<ColorPicker colors={['red', 'green', 'purple']} />);
    wrapper.findWhere(el => el.key() === 'green').simulate('click');
    expect(wrapper.state('backgroundColor')).toBe('green');
  });
});
