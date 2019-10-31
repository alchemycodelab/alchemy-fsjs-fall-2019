import React from 'react';
import PropTypes from 'prop-types';
import Wolf from './Wolf';
import { withList } from '../withList';

// const Wolves = ({ wolves }) => {
//   const wolfElements = wolves.map(wolf => (
//     <li key={`${wolf.name}-${wolf.img}`}>
//       <Wolf {...wolf} />
//     </li>
//   ));

//   return (
//     <ul>
//       {wolfElements}
//     </ul>
//   );
// };

const Wolves = withList(Wolf, 'wolves');

Wolves.propTypes = {
  wolves: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  })).isRequired
};

export default Wolves;
