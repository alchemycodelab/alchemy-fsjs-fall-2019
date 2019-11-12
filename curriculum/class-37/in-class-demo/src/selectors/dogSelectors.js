export const getDogName = state => state.dog.name;
export const getDogAge = state => state.dog.age;
export const getDogWeight = state => state.dog.weight;

export const getDogNameLength = state => {
  return getDogName(state).length;
};

export const getDogAgeInHumanYears = state => {
  return getDogAge(state) * 7;
};
