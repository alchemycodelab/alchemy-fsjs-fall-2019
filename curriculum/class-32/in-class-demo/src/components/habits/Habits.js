import React from 'react';
import PropTypes from 'prop-types';
import Habit from './Habit';

const Habits = ({ habits, handleClick, buttonText }) => {
  const habitElements = habits.map(habit => (
    <li key={habit.title}>
      <Habit
        title={habit.title}
        progress={habit.progress}
        goal={habit.goal}
        handleClick={handleClick}
        buttonText={buttonText} />
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
  handleClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default Habits;
