import React from 'react';
import Color from './Color';

const Header = () => (
  <header>
    <h1>My Dog</h1>
  </header>
);

const Dog = () => {
  const dog = {
    name: 'Spot',
    age: 5,
    weight: '20 lbs'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{dog.name}</dd>

      <dt>Age</dt>
      <dd>{dog.age}</dd>

      <dt>Weight</dt>
      <dd>{dog.weight}</dd>
    </dl>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Dog />
      <Color />
    </>
  );
};
