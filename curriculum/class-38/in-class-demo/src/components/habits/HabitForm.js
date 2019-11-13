import React from 'react';
import PropTypes from 'prop-types';

const HabitForm = ({ title, goal, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input name="title" value={title} onChange={handleChange} />
    <input name="goal" value={goal} onChange={handleChange} />
    <button>Submit</button>
  </form>
);

HabitForm.propTypes = {
  title: PropTypes.string.isRequired,
  goal: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default HabitForm;
