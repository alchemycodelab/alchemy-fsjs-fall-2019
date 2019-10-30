import React, { Component } from 'react';
import PropTypes from 'prop-types';

// function -> class
// extends Component
// render method returns jsx
// move propTypes into static property

export default class Character extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    myFunc: PropTypes.func.isRequired
  };

  render() {
    const { name, species, status, image, myFunc } = this.props;

    return (
      <dl>
        <dt onClick={() => myFunc(name)}>Name</dt>
        <dd>{name}</dd>

        <dt>Species</dt>
        <dd>{species}</dd>

        <dt>Status</dt>
        <dd>{status}</dd>

        <dt>Image</dt>
        <dd><img src={image} /></dd>
      </dl>
    );
  }
}

// const Character = ({ name, species, status, image, myFunc }) => {
//   return (
//     <dl>
//       <dt onClick={() => myFunc(name)}>Name</dt>
//       <dd>{name}</dd>

//       <dt>Species</dt>
//       <dd>{species}</dd>

//       <dt>Status</dt>
//       <dd>{status}</dd>

//       <dt>Image</dt>
//       <dd><img src={image} /></dd>
//     </dl>
//   );
// };
