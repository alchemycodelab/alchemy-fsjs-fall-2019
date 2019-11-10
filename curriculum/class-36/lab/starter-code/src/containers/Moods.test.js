import React from 'react';
import { shallow } from 'enzyme';
import Moods, { isTired, isHyper, isEducated, isHungry, getFace } from './Moods';

describe('Moods', () => {
  describe('mood selectors', () => {
    it('knows if it is tired', () => {
      expect(isTired({ coffees: 0, naps: 0 })).toBeTruthy();
    });

    it('knows if it is not tired', () => {
      expect(isTired({ coffees: 1, naps: 0 })).toBeFalsy();
    });

    it('knows if it is hyper', () => {
      expect(isHyper({ coffees: 4 })).toBeTruthy();
    });

    it('knows if it is not hyper', () => {
      expect(isHyper({ coffees: 3 })).toBeFalsy();
    });

    it('knows if it is educated', () => {
      expect(isEducated({ studies: 3 })).toBeTruthy();
    });

    it('knows if it is not educated', () => {
      expect(isEducated({ studies: 2 })).toBeFalsy();
    });

    it('knows if it is hungry', () => {
      expect(isHungry({ snacks: 0 })).toBeTruthy();
    });

    it('knows if it is not hungry', () => {
      expect(isHungry({ studies: 2 })).toBeFalsy();
    });

    it('is very angry if tired and hungry', () => {
      expect(getFace({ coffees: 0, naps: 0, snacks: 0 })).toEqual('🤬');
    });

    it('is sick if hyper and hungry', () => {
      expect(getFace({ coffees: 4, snacks: 0 })).toEqual('🤮');
    });

    it('is sleeping if tired', () => {
      expect(getFace({ coffees: 4, snacks: 0 })).toEqual('🤮');
    });

    it('is crazy if hyper', () => {
      expect(getFace({ coffees: 4, naps: 0, snacks: 0, studies: 0 })).toEqual('🤮');
    });

    it('is mindblown if educated', () => {
      expect(getFace({ coffees: 1, naps: 0, snacks: 1, studies: 3 })).toEqual('🤯');
    });

    it('is angry if hungry', () => {
      expect(getFace({ coffees: 1, naps: 0, snacks: 0, studies: 0 })).toEqual('😡');
    });

    it('is happy if not tired, hungry, educated, or hungry', () => {
      expect(getFace({ coffees: 1, naps: 0, snacks: 1, studies: 0 })).toEqual('😀');
    });
  });

  describe('container', () => {
    it('matches a snapshot', () => {
      const wrapper = shallow(<Moods />);
      expect(wrapper).toMatchSnapshot();
    });

    it('updates state on DRINK_COFFEE selection', () => {
      const wrapper = shallow(<Moods />);
      wrapper.instance().handleSelection('DRINK_COFFEE');

      expect(wrapper.state('coffees')).toEqual(1);
    });

    it('updates state on TAKE_NAP selection', () => {
      const wrapper = shallow(<Moods />);
      wrapper.instance().handleSelection('TAKE_NAP');

      expect(wrapper.state('naps')).toEqual(1);
    });

    it('updates state on EAT_SNACK selection', () => {
      const wrapper = shallow(<Moods />);
      wrapper.instance().handleSelection('EAT_SNACK');

      expect(wrapper.state('snacks')).toEqual(1);
    });

    it('updates state on STUDY selection', () => {
      const wrapper = shallow(<Moods />);
      wrapper.instance().handleSelection('STUDY');

      expect(wrapper.state('studies')).toEqual(1);
    });
  });
});
