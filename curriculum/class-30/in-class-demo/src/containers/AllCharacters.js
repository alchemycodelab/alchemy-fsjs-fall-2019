import React, { Component } from 'react';
import { getCharacters } from '../services/rickAndMortyApi';

export default class AllCharacters extends Component {
  state = {
    characters: [],
    loading: false,
    page: 1
  }

  fetchCharacters = () => {
    this.setState({ loading: true });
    return getCharacters()
      .then(characters => this.setState({ characters, loading: false }));
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(prevProp, prevState) {
    if(prevState.page !== this.state.page) {
      this.fetchCharacters();
    }
  }

  decrementPage = () => {
    this.setState(state => ({
      page: state.page - 1
    }));
  }

  incrementPage = () => {
    this.setState(state => ({
      page: state.page + 1
    }));
  }

  render() {
    if(this.state.loading) return <img src="https://cdn.dribbble.com/users/233030/screenshots/3932726/rick-sanchez.gif" />;

    return (
      <>
        <h1>{this.state.characters.map(({ name }) => name).join(' ')}</h1>
        <button onClick={this.decrementPage}>Prev</button>
        <button onClick={this.incrementPage}>Next</button>
      </>
    );
  }

}
