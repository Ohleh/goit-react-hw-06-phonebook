import { useSelector } from 'react-redux';

import Contacts from './Contacts';
import Form from './Form';
import Filter from './Filter';

export const App = () => {
  const filter = useSelector(state => state.phonebook.contacts.filter);
  const contacts = useSelector(state => state.phonebook.contacts.items);

  const filtered = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <Form checkContacts={contacts} />
        <h2>Contacts</h2>
        <Filter value={filter} />
        <Contacts contacts={filtered} />
      </div>
    </>
  );
};
