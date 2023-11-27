import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
import Notiflix from 'notiflix';

export const ContactForm = ({ onSabmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handelChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handelSubmit = e => {
    e.preventDefault();
    if (!name || !number) {
      Notiflix.Notify.warning('Please write your name and number');
      return;
    }
    onSabmit({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handelSubmit} className={styles.form}>
      <label>
        <input
          className={styles.form_input}
          type="text"
          name="name"
          placeholder="Name:"
          value={name}
          onChange={handelChange}
        />
      </label>
      <label>
        <input
          className={styles.form_input}
          type="tel"
          name="number"
          placeholder="Number:"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          onChange={handelChange}
        />
      </label>
      <button type="submit" className={styles.form_btn}>
        Add Contact
      </button>
    </form>
  );
};
