import React from 'react';
import styles from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <input
      className={styles.filter_input}
      type="text"
      placeholder="Search contacts"
      value={value}
      onChange={onChange}
    />
  );
};
