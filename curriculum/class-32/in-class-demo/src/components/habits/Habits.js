import React from 'react';
import PropTypes from 'prop-types';
import Habit from './Habit';

const Habits = ({ habits, handleProgress }) => {
  const habitElements = habits.map(habit => (
    <li key={habit.title}>
      <Habit
        title={habit.title}
        progress={habit.progress}
        goal={habit.goal}
        handleProgress={handleProgress} />
    </li>
  ));
  return (
    <ul>
      {habitElements}
    </ul>
  );
};

Habits.propTypes = {
  habits: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    goal: PropTypes.number.isRequired
  })).isRequired,
  handleProgress: PropTypes.func.isRequired
};

export default Habits;
