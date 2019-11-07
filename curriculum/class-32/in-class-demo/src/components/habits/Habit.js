import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Habit = ({ title, progress, goal, handleClick, buttonText }) => {
  console.log('habit', title);
  return (
    <section>
      <Link to={`/progress/${progress}`}><h3>{title}</h3></Link>
      <progress value={progress} max={goal}></progress>
      <button name={title} onClick={handleClick}>{buttonText}</button>
    </section>
  );
};

Habit.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default Habit;
