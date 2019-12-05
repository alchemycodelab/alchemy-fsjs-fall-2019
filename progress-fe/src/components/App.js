import React, { useState, useEffect } from 'react';
import { useSocket, useEmitEvent, useOnEvent } from '../socket';

const Form = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  return (
    <form onSubmit={event => handleSubmit(event, name)}>
      <input type="text" value={name} onChange={({ target }) => setName(target.value)} />
      <button>Create Progress</button>
    </form>
  );
};

const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'PROGRESS_SEEN':
      console.log(payload);
      return state;
    default:
      return state;
  }
};

export default function App() {
  const createProgress = useEmitEvent('CREATE_PROGRESS');
  const updateProgress = useEmitEvent('UPDATE_PROGRESS');
  const eventState = useOnEvent(reducer, ['PROGRESS_SEEN']);

  const handleSubmit = (event, name) => {
    event.preventDefault();
    createProgress({ name });
  };
  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <button onClick={() => updateProgress({ id: '5de6e36c727a9e58107d8947' })}>Update</button>
    </>
  );
}
