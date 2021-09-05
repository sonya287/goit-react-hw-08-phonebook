import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { getContacts } from '../../redux/phonebook';
import { connect } from 'react-redux';

import Form from '../../components/Form';
import ContactsList from '../../components/ContactsList';
import Filter from '../../components/Filter';

import styles from './ContactsViews.module.scss';

const nodeRef = React.createRef(null);

const ContactsViews = ({ contacts }) => {
  return (
    <section className={styles.container}>
      <CSSTransition
        nodeRef={nodeRef}
        in={true}
        appear={true}
        timeout={500}
        classNames={{ ...styles }}
        unmountOnExit
      >
        <h1 ref={nodeRef} className={styles.title}>
          Phonebook
        </h1>
      </CSSTransition>

      <Form></Form>
      <div className={styles.contacts_container}>
        <h2 className={styles.contact_title}>Contacts</h2>
        {contacts.length > 1 && <Filter />}

        <ContactsList />
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

export default connect(mapStateToProps)(ContactsViews);
