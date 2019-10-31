import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class WaterForm extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    handleNumberChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }
  
  render() {
    const { number, handleNumberChange, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={number}
          placeholder="Drink amount?"
          onChange={handleNumberChange} />
        <button>Add Water</button>
      </form>
    );
  }
}
