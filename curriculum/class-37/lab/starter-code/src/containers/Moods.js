import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};

const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
  { name: 'STUDY', text: 'Study', stateName: 'studies' },
];

// eslint-disable-next-line react/prop-types
const Moods = ({ actions, emoji, handleSelection }) => (
  <>
    <Controls actions={actions} handleSelection={handleSelection} />
    <Face emoji={emoji} />
  </>
);

const mapStateToProps = state => ({
  actions: actions.map(action => ({ ...action, count: state[action.stateName] })),
  emoji: getFace(state)
});

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch({
      type: name
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);
