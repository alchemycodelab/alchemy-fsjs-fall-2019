import React from 'react';
import PropTypes from 'prop-types';
import styles from './Face.css';

const Face = ({ emoji }) => <p className={styles.Face}>{emoji}</p>;

Face.propTypes = {
  emoji: PropTypes.string.isRequired
};

export default Face;
