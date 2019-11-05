import React from 'react';
import PropTypes from 'prop-types';

const Habit = ({ title, progress, goal, handleProgress }) => {
  return (
    <section>
      <h3>{title}</h3>
      <progress value={progress} max={goal}></progress>
      <button name={title} onClick={handleProgress}>+</button>
    </section>
  );
};

Habit.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  handleProgress: PropTypes.func.isRequired
};

export default Habit;
