import React from 'react';
import PropTypes from 'prop-types';
import styles from './Flex.css';

const Flex = ({ children, title, justify }) => {
  return (
    <>
      {title && <h1>{title}</h1>}
      <div className={styles.Flex} style={{ justifyContent: justify }}>
        {children}
      </div>
    </>
  );
};

Flex.propTypes = {
  title: PropTypes.string,
  justify: PropTypes.string,
  children: PropTypes.node.isRequired
};

Flex.defaultProps = {
  justify: 'center'
};

export default Flex;
