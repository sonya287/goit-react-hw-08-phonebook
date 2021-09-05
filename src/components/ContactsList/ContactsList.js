import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  phonebookOperations,
  getFilteredContacts,
  getLoading,
  getError,
} from '../../redux/phonebook';
import { Error } from '../Error';
import { Spinner } from '../Loader';

import styles from './ContactsList.module.scss';

class ContactsList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, deleteContact, isLoading, isError } = this.props;
    return (
      <>
        {isLoading && <Spinner />}
        {isError && <Error />}
        <TransitionGroup component="ul" className={styles.list}>
          {contacts.map(({ name, id, number }) => (
            <CSSTransition key={id} timeout={500} classNames={styles}>
              <li key={id} className={styles.item}>
                <span className={styles.item_name}>{name}</span>
                <span className={styles.item_number}>{number}</span>

                <button
                  className={styles.button}
                  type="button"
                  onClick={() => deleteContact(id)}
                >
                  Delete
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </>
    );
  }
}
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    contacts: getFilteredContacts(state),
    isLoading: getLoading(state),
    isError: getError(state),
  };
};

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
