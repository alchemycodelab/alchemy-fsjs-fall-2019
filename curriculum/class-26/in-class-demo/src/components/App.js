import React from 'react';
import Dog from './Dog';

const Header = () => (
  <header>
    <h1>My Dogs</h1>
  </header>
)

const App = () => {
  return (
    <>
      <Header />
      <Dog />
      <ul>
        <li>Spot</li>
        <li>Rover</li>
        <li>Max</li>
      </ul>
    </>
  );
}

export default App;
