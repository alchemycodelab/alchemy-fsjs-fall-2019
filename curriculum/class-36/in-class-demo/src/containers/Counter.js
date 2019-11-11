import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/counter/Controls';
import Display from '../components/counter/Display';

const Counter = ({ count, decrement, increment }) => (
  <>
    <Controls decrement={decrement} increment={increment} />
    <Display count={count} />
  </>
);

// takes state from redux and passes props to component
const mapStateToProps = state => ({
  count: state.count
});

// uses dispatch from redux and passes props to component
const mapDispatchToProps = dispatch => ({
  decrement() {
    dispatch({
      type: 'DECREMENT'
    });
  },
  increment() {
    dispatch({
      type: 'INCREMENT'
    });
  }
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
