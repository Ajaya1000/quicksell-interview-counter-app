import React from 'react';
import styles from './index.module.css';

export const Loader = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderItem}>
        <div className={styles.loader}>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className={styles.loaderItem}>
        <p className={styles.loaderItemText}>Saving counter value</p>
      </div>
    </div>
  );
};
