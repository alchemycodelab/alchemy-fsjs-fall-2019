import React from 'react';
import PropTypes from 'prop-types';

const Habit = ({ title, progress, goal, handleClick }) => (
  <section>
    <h2>{title}</h2>
    <progress max={goal} value={progress}></progress>
    <button name={title} onClick={handleClick}>+</button>
  </section>
);

Habit.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Habit;
