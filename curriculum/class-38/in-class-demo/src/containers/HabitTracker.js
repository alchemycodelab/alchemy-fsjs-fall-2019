import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Habits from '../components/habits/Habits';
import { getHabits } from '../selectors/habitsSelectors';
import { incrementProgress, createHabit } from '../actions/habitsActions';
import HabitForm from '../components/habits/HabitForm';
import { getFormTitle, getFormGoal } from '../selectors/habitFormSelectors';
import { updateFormTitle, updateFormGoal } from '../actions/habitFormActions';

const HabitTracker = ({ habits, title, goal, handleChange, handleSubmit, handleClick }) => {
  return (
    <>
      <HabitForm
        title={title}
        goal={goal}
        handleChange={handleChange}
        handleSubmit={event => handleSubmit(event, { title, goal, progress: 0 })} />
      <Habits habits={habits} handleClick={handleClick} />
    </>
  );
};

HabitTracker.propTypes = {
  habits: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    goal: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired
  })).isRequired,
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  goal: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  habits: getHabits(state),
  title: getFormTitle(state),
  goal: getFormGoal(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    if(target.name === 'title') {
      dispatch(updateFormTitle(target.value));
    }

    if(target.name === 'goal') {
      dispatch(updateFormGoal(Number(target.value)));
    }
  },
  handleSubmit(event, habit) {
    event.preventDefault();
    dispatch(createHabit(habit));
  },
  handleClick({ target }) {
    dispatch(incrementProgress(target.name));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitTracker);
