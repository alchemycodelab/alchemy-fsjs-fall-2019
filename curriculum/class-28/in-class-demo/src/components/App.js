import React, { Component } from 'react';
import Character from './character/Character';
import Button from './button/Button';
import ColorPicker from './colors/ColorPicker';

const character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
};

export default class App extends Component {
  state = {
    name: 'ryan',
    count: 0,
    open: false
  };

  myFunc = name => {
    this.setState({ name });
    console.log(name);
  }

  increment = () => {
    this.setState(state => {
      return {
        count: state.count + 1
      };
    });
  }

  toggle = () => {
    this.setState(state => {
      return {
        open: !state.open
      };
    });
  }

  render() {
    return (
      <>
        <ColorPicker colors={['red', 'blue', 'yellow', 'green', 'purple']} />
      </>
    );
  }
}
