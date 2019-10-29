import React from 'react';
import PropTypes from 'prop-types';

const If = ({ condition, children }) => {
  if(condition) {
    return (
      <>
        {children}
      </>
    );
  } else {
    return null;
  }
};

export default function Dog({ name, age, weight }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Age</dt>
      <dd>{age}</dd>

      <If condition={weight}>
        <>
          <dt>Weight</dt>
          <dd>{weight}</dd>
        </>
      </If>
    </dl>
  );
}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string
};
