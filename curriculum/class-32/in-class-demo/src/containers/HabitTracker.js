import React, { useReducer, useEffect, useMemo } from 'react';
import HabitForm from '../components/habits/HabitForm';
import Habits from '../components/habits/Habits';

const LOCAL_STORAGE_KEY = 'habits';

function reducer(state, action) {
  // return { ...state, [action.type]: action.payload };
  switch(action.type) {
    case 'title':
      return { ...state, title: action.payload };
    case 'goal':
      return { ...state, goal: action.payload };
    default:
      return state;
  }
}

const SET_HABITS = 'SET_HABITS';
const CREATE_HABIT = 'CREATE_HABIT';
const PROGRESS_HABIT = 'PROGRESS_HABIT';
const RESET_HABIT = 'RESET_HABIT';

const handleProgressChange = (state, title, fn) => {
  return state.map(habit => {
    if(habit.title !== title) return habit;
    return {
      ...habit,
      progress: fn(habit.progress)
    };
  });
};

function habitsReducer(state, action) {
  switch(action.type) {
    case SET_HABITS:
      return action.payload;
    case CREATE_HABIT:
      return [...state, action.payload];
    case PROGRESS_HABIT:
      return handleProgressChange(state, action.payload, progress => progress + 1);
    case RESET_HABIT:
      return handleProgressChange(state, action.payload, () => 0);
    default:
      return state;
  }
}

const HabitTracker = () => {
  const [formState, dispatch] = useReducer(reducer, { title: '', goal: '' });
  const [habits, dispatchHabits] = useReducer(habitsReducer, [
    { title: 'Drink Water', progress: 0, goal: 8 }
  ]);
  // const [habits, setHabits] = useState([
  //   { title: 'Drink Water', progress: 0, goal: 8 }
  // ]);

  useEffect(() => {
    const habits = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(habits) {
      dispatchHabits({
        type: SET_HABITS,
        payload: JSON.parse(habits)
      });
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    const { title, goal } = formState;
    dispatchHabits({
      type: CREATE_HABIT,
      payload: { title, goal: Number(goal), progress: 0 }
    });
  };

  const handleChange = ({ target }) => {
    dispatch({
      type: target.name,
      payload: target.value
    });
  };

  const handleProgress = ({ target }) => {
    dispatchHabits({
      type: PROGRESS_HABIT,
      payload: target.name
    });
  };

  const handleReset = ({ target }) => {
    dispatchHabits({
      type: RESET_HABIT,
      payload: target.name
    });
  };

  return (
    <>
      <HabitForm
        title={formState.title}
        goal={formState.goal}
        handleChange={handleChange}
        handleSubmit={handleSubmit} />
      <section>
        <h2>Doing</h2>
        <Habits
          habits={habits.filter(habit => habit.goal > habit.progress)}
          handleClick={handleProgress}
          buttonText="+" />
      </section>
      <section>
        <h2>Done</h2>
        <Habits
          habits={habits.filter(habit => habit.goal <= habit.progress)}
          handleClick={handleReset}
          buttonText="↻" />
      </section>
    </>
  );
};

export default HabitTracker;

// export default class HabitTracker extends Component {
//   state = {
//     title: '',
//     goal: '',
//     habits: [
//       { title: 'Drink Water', progress: 0, goal: 8 }
//     ]
//   }

//   componentDidMount() {
//     const habits = localStorage.getItem(LOCAL_STORAGE_KEY);
//     if (habits) {
//       this.setState({ habits: JSON.parse(habits) });
//     }
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//     const { title, goal } = this.state;
//     this.setState(state => ({
//       habits: [...state.habits, { title, goal: Number(goal), progress: 0 }]
//     }));
//   }

//   handleChange = ({ target }) => {
//     this.setState({ [target.name]: target.value });
//   }

//   handleHabitChange = fn => ({ target }) => {
//     this.setState(state => ({
//       habits: state.habits.map(habit => {
//         if (habit.title !== target.name) return habit;
//         return {
//           ...habit,
//           progress: fn(habit.progress)
//         };
//       })
//     }), () => {
//       localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.habits));
//     });
//   }

//   handleProgress = this.handleHabitChange(progress => progress + 1)

//   handleReset = this.handleHabitChange(() => 0);

//   render() {
//     const { title, goal, habits } = this.state;
//     return (
//       <>
//         <HabitForm
//           title={title}
//           goal={goal}
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit} />
//         <section>
//           <h2>Doing</h2>
//           <Habits
//             habits={habits.filter(habit => habit.goal > habit.progress)}
//             handleClick={this.handleProgress}
//             buttonText="+" />
//         </section>
//         <section>
//           <h2>Done</h2>
//           <Habits
//             habits={habits.filter(habit => habit.goal <= habit.progress)}
//             handleClick={this.handleReset}
//             buttonText="↻" />
//         </section>
//       </>
//     );
//   }
// }
