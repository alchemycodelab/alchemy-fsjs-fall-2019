import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../store';
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
    let wrapper;
    store.dispatch = jest.fn();
    beforeEach(() => {
      wrapper = shallow(<Moods store={store} />).dive();
    });

    it('matches a snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('updates state on DRINK_COFFEE selection', () => {
      wrapper.props().handleSelection('DRINK_COFFEE');

      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'DRINK_COFFEE'
      });
    });

    it('updates state on TAKE_NAP selection', () => {
      wrapper.props().handleSelection('TAKE_NAP');

      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'TAKE_NAP'
      });
    });

    it('updates state on EAT_SNACK selection', () => {
      wrapper.props().handleSelection('EAT_SNACK');

      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'EAT_SNACK'
      });
    });

    it('updates state on STUDY selection', () => {
      wrapper.props().handleSelection('STUDY');

      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'STUDY'
      });
    });
  });
});
