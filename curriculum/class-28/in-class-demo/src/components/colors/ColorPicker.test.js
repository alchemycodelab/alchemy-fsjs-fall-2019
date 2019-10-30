import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker component', () => {
  it('renders ColorPicker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });
});
