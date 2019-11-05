import React from 'react';
import PropTypes from 'prop-types';

const HabitForm = ({ title, goal, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={handleChange} />
      <input type="number" name="goal" value={goal} onChange={handleChange} />
      <button>Add Habit</button>
    </form>
  );
};

HabitForm.propTypes = {
  title: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default HabitForm;
