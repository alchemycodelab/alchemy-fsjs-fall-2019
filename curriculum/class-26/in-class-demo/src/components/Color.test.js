import React from 'react';
import { shallow } from 'enzyme'
import Color from './Color';

describe('Color component', () => {
  it('matches a snapshot', () => {
    const color = shallow(<Color />);
    expect(color).toMatchSnapshot();
  });
});
