import React, { Component } from 'react';

export default class CreateWolf extends Component {
  state = {
    name: '',
    img: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.name, this.state.img);
    this.setState({ name: '', img: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  }

  handleImgChange = event => {
    this.setState({ img: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        <input type="text" name="img" value={this.state.img} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}
