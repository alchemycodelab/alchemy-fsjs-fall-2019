import React from 'react';

export const withList = (Component, listKey) => {
  // eslint-disable-next-line react/prop-types
  return function ListHOC(props) {
    const elements = props[listKey].map((item, i) => (
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
};
