import React from 'react';
import styles from './index.module.css';
export const Counter = ({ value, onChange }) => {
  return (
    <div className={styles.counterContainer}>
      <div className={styles.counterItem}>
        <button
          className={styles.counterButton}
          onClick={() => {
            onChange(value - 1);
          }}
        >
          <span className={styles.counterItemText}>-</span>
        </button>
      </div>
      <div className={styles.counterItem}>
        <input
          className={styles.counterInput}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </div>
      <div className={styles.counterItem}>
        <button
          className={styles.counterButton}
          onClick={() => {
            onChange(value - 1 + 2);
          }}
        >
          <span className={styles.counterItemText}>+</span>
        </button>
      </div>
    </div>
  );
};
