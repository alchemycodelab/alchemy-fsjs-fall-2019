import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/about/${this.state.name}`);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={name} onChange={this.handleChange} />
        <button>Go</button>
      </form>
    );
  }
}
