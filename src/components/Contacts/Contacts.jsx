import React from 'react';
import ContactsRender from './ContactsRender';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Contacts = () => {
  const filter = useSelector(state => state.phonebook.contacts.filter);
  const contacts = useSelector(state => state.phonebook.contacts.items);

  const filteredContacts = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <div>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactsRender key={id} contact={[id, name, number]} />
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};

export default Contacts;
