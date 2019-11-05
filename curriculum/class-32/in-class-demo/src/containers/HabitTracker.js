import React, { Component } from 'react';
import HabitForm from '../components/habits/HabitForm';
import Habits from '../components/habits/Habits';

const LOCAL_STORAGE_KEY = 'habits';

export default class HabitTracker extends Component {
  state = {
    title: '',
    goal: '',
    habits: [
      { title: 'Drink Water', progress: 0, goal: 8 }
    ]
  }

  componentDidMount() {
    const habits = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(habits) {
      this.setState({ habits: JSON.parse(habits) });
    }
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

  handleHabitChange = fn => ({ target }) => {
    this.setState(state => ({
      habits: state.habits.map(habit => {
        if(habit.title !== target.name) return habit;
        return {
          ...habit,
          progress: fn(habit.progress)
        };
      })
    }), () => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.habits));
    });
  }

  handleProgress = this.handleHabitChange(progress => progress + 1)
  
  handleReset = this.handleHabitChange(() => 0);

  render() {
    const { title, goal, habits } = this.state;
    return (
      <>
        <HabitForm
          title={title}
          goal={goal}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        <section>
          <h2>Doing</h2>
          <Habits
            habits={habits.filter(habit => habit.goal > habit.progress)}
            handleClick={this.handleProgress}
            buttonText="+" />
        </section>
        <section>
          <h2>Done</h2>
          <Habits
            habits={habits.filter(habit => habit.goal <= habit.progress)}
            handleClick={this.handleReset}
            buttonText="↻" />
        </section>
      </>
    );
  }
}
