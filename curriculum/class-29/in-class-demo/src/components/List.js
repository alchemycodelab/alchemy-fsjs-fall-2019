import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items, Component }) => {
  const elements = items.map((item, i) => (
    <li key={item._id || i}>
      <Component {...item} />
    </li>
  ));

  return (
    <ul>
      {elements}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  Component: PropTypes.oneOf([PropTypes.func, PropTypes.object]).isRequired
};

export default List;
