import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { phonebookOperations, getContacts } from '../../redux/phonebook';

import { CSSTransition } from 'react-transition-group';
import Alert from '../Alert';

import styles from './Form.module.scss';

class Form extends React.Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
    alert: false,
  };
  getContactValue = e => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

  findContactName = contactName => {
    const { contacts } = this.props;
    return contacts.find(({ name }) => name === contactName);
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    if (this.findContactName(name)) {
      this.resetInput();
      this.setState({ alert: true });
      setTimeout(() => this.setState({ alert: false }), 2000);

      return;
    }
    this.props.addContact(name, number);
    this.resetInput();
  };
  resetInput = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number, alert } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <CSSTransition
          in={alert}
          appear
          timeout={500}
          classNames={styles}
          unmountOnExit
        >
          <Alert />
        </CSSTransition>
        <label className={styles.label}>
          Name
          <input
            className={styles.inputs}
            type="text"
            name="name"
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.getContactValue}
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.inputs}
            type="tel"
            name="number"
            autoComplete="off"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.getContactValue}
          />
        </label>
        <button type="submit" className={styles.button}>
          add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: (name, number) =>
    dispatch(phonebookOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
