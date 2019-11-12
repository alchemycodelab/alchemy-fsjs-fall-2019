import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { incrementAge, setDogName } from '../actions/dogActions';

const DogPlay = ({ name, age, weight, handleDogNameChange, handleClick }) => {
  return (
    <>
      <input type="text" value={name} onChange={handleDogNameChange} />
      <dl>
        <dt>Name</dt>
        <dd>{name}</dd>

        <dt>Age</dt>
        <dd onClick={handleClick}>{age}</dd>

        <dt>Weight</dt>
        <dd>{weight}</dd>
      </dl>
    </>
  );
};

DogPlay.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleDogNameChange: PropTypes.func.isRequired
};

// store.getState()
const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    weight: state.weight
  };
};

// store.dispatch
const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      dispatch(incrementAge());
    },
    handleDogNameChange({ target }) {
      dispatch(setDogName(target.value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogPlay);
