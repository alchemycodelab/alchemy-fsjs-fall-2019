import React from 'react';
import WaterTracker from '../containers/WaterTracker';
import Wolves from './wolves/Wolves';
import List from './List';
import Wolf from './wolves/Wolf';
import Flex from './flexible/Flex';
import CreateWolf from './wolves/CreateWolf';

const wolves = [
  { name: 'scout', img: 'https://ih1.redbubble.net/image.509463701.1253/mp,840x860,gloss,f8f8f8,t-pad,1000x1000,f8f8f8.jpg' },
  { name: 'glasses', img: 'https://ih1.redbubble.net/image.423723364.3266/aps,840x830,small,transparent-pad,1000x1000,f8f8f8.u2.jpg' }
];

export default function App() {
  return (
    <>
      <Flex>
        <p>hi</p>
        <p>there</p>
      </Flex>
      <CreateWolf />
    </>
  );
}
