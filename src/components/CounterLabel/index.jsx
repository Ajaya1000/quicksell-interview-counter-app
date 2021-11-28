import React from 'react';
import styles from './index.module.css';

export const CounterLabel = ({ value }) => {
  return <div className={styles.container}>Counter Value: {value}</div>;
};
