import React from 'react';
import styles from './index.module.css';
export const Counter = ({ value, onIncrement, onDecrement, onRefresh }) => {
  return (
    <div className={styles.counterContainer}>
      <button className={styles.counterItem} onClick={onIncrement}>
        <span className={styles.counterItemText}>-</span>
      </button>
      <button className={styles.counterItem} onClick={onRefresh}>
        <span className={styles.counterItemText}>{value}</span>
      </button>
      <button className={styles.counterItem} onClick={onDecrement}>
        <span className={styles.counterItemText}>+</span>
      </button>
    </div>
  );
};
