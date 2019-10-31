import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ColorPicker extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string),
    backgroundColor: PropTypes.string.isRequired,
    updateColor: PropTypes.func.isRequired
  };

  static defaultProps = {
    colors: ['red', 'blue', 'yellow']
  }

  componentDidMount() {
    console.log('You birthed me!');
  }

  componentWillUnmount() {
    console.log('you killed me!');
  }

  render() {
    const style = {
      border: 0,
      padding: '1rem',
      margin: '0.4rem'
    };

    const buttons = this.props.colors.map(color => (
      <button
        key={color}
        style={{ ...style, backgroundColor: color }}
        onClick={() => this.props.updateColor(color)}>{color}</button>
    ));

    return (
      <>
        {buttons}
        <div style={{ width: '100px', height: '100px', backgroundColor: this.props.backgroundColor }}></div>
      </>
    );
  }
}
