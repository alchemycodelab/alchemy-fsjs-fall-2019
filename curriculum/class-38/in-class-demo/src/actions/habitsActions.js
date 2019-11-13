export const CREATE_HABIT = 'CREATE_HABIT';
export const createHabit = habit => ({
  type: CREATE_HABIT,
  payload: habit
});

export const INCREMENT_PROGRESS = 'INCREMENT_PROGRESS';
export const incrementProgress = title => ({
  type: INCREMENT_PROGRESS,
  payload: title
});
