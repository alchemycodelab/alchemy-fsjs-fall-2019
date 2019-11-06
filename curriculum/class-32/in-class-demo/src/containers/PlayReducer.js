import React, { useReducer, useState } from 'react';

// action -> { type: 'ACTION_NAME', payload: value }
function reducer(state, action) {
  switch(action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'age':
      return { ...state, age: Number(action.payload) };
    case 'weight':
      return { ...state, weight: action.payload };
    default:
      return state;
  }
}

const PlayReducer = () => {
  const [dog, dispatch] = useReducer(reducer, { name: 'spot', age: 5, weight: '20lbs' });
  // const [dog, setDog] = useState({ name: 'spot', age: 5, weight: '20lbs' });
  const handleChange = ({ target }) => {
    dispatch({
      type: target.name,
      payload: target.value
    });
  };

  return (
    <form>
      <input type="text" name="name" value={dog.name} onChange={handleChange} />
      <input type="number" name="age" value={dog.age} onChange={handleChange} />
      <input type="text" name="weight" value={dog.weight} onChange={handleChange} />
    </form>
  );
};

export default PlayReducer;
