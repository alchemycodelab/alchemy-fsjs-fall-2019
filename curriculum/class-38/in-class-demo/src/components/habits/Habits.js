import React from 'react';
import PropTypes from 'prop-types';
import Habit from './Habit';

const Habits = ({ habits, handleClick }) => {
  const habitElements = habits.map(habit => (
    <li key={habit.title}>
      <Habit {...habit} handleClick={handleClick} />
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
    goal: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired
  })).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Habits;
