import React, { Component } from 'react';
import HabitForm from '../components/habits/HabitForm';
import Habits from '../components/habits/Habits';

export default class HabitTracker extends Component {
  state = {
    title: '',
    goal: '',
    habits: []
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, goal } = this.state;
    this.setState(state => ({
      habits: [...state.habits, { title, goal: Number(goal), progress: 0 }]
    }));
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleProgress = ({ target }) => {
    this.setState(state => ({
      habits: state.habits.map(habit => {
        if(habit.title !== target.name) return habit;
        return {
          ...habit,
          progress: habit.progress + 1
        };
      })
    }));
  }

  render() {
    const { title, goal, habits } = this.state;
    return (
      <>
        <HabitForm
          title={title}
          goal={goal}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        <Habits habits={habits} handleProgress={this.handleProgress} />
      </>
    );
  }
}
