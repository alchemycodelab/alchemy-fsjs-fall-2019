import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls component', () => {
  let wrapper;
  let handleSelection;
  beforeEach(() => {
    const actions = [
      { name: 'DO_STUFF', text: 'stuff' },
      { name: 'other' }
    ];
    handleSelection = jest.fn();

    wrapper = shallow(<Controls
      actions={actions}
      handleSelection={handleSelection} />);
  });

  it('renders Controls', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('handlesSelection with the action name', () => {
    wrapper.findWhere(el => el.key() === 'DO_STUFF').simulate('click');
    expect(handleSelection).toHaveBeenCalledWith('DO_STUFF');
  });
});
  
