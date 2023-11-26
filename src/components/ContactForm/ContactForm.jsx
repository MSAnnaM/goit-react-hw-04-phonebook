import React from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
import Notiflix from 'notiflix';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handelChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handelSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (!name || !number) {
      Notiflix.Notify.warning('Please write your name and number');
      return;
    }
    this.props.onSabmit({ id: nanoid(), name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handelSubmit} className={styles.form}>
        <label>
          <input
            className={styles.form_input}
            type="text"
            name="name"
            placeholder="Name:"
            value={name}
            onChange={this.handelChange}
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
            onChange={this.handelChange}
          />
        </label>
        <button type="submit" className={styles.form_btn}>
          Add Contact
        </button>
      </form>
    );
  }
}
