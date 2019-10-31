import React, { Component } from 'react';
import ColorPicker from './colors/ColorPicker';

export default class App extends Component {
  state = {
    backgroundColor: 'red',
    open: true
  };

  updateColor = color => {
    this.setState({ backgroundColor: color });
  }

  componentDidMount() {
    console.log('I am mounted');
  }

  componentDidUpdate() {
    console.log('I am updated');
  }

  componentWillUnmount() {
    console.log('i am unmounted');
  }

  render() {
    return (
      <>
        <button onClick={() => this.setState(state => ({ open: !state.open }))}>Display color picker</button>
        {this.state.open && <ColorPicker
          colors={['red', 'blue', 'yellow', 'green', 'purple']}
          backgroundColor={this.state.backgroundColor}
          updateColor={this.updateColor}
        />}
      </>
    );
  }
}
