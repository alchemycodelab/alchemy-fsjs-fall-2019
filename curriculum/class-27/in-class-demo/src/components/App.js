import React from 'react';
import Dog from './Dog';
import Color from './colors/Color';

export default function App() {
  return (
    <>
      <Color
        name="Red"
        rgb={{ r: 245, g: 0, b: 0 }} />
      <Dog
        name="Rover"
        age={10} />
      <Dog
        name="Spot"
        age={15}
        weight="100 lbs" />
      <Dog
        name="Max"
        age={1}
        weight="5 lbs" />
    </>
  );
}
