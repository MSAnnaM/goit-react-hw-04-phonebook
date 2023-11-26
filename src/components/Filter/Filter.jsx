import React from 'react';
import styles from './Filter.module.css';

export class Filter extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <input
        className={styles.filter_input}
        type="text"
        placeholder="Search contacts"
        value={value}
        onChange={onChange}
      />
    );
  }
}
