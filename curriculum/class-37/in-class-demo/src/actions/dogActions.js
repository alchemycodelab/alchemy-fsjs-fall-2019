export const INCREMENT_AGE = 'INCREMENT_AGE';
export const incrementAge = () => ({
  type: INCREMENT_AGE
});

export const SET_DOG_NAME = 'SET_DOG_NAME';
export const setDogName = name => ({
  type: SET_DOG_NAME,
  payload: name
});
