import { useSelector } from 'react-redux';

const ContactsRender = ({ deleteContact, contact: [id, name, number] }) => {
  // const contact = useSelector(state => state.contacts);
  // console.log(contact);

  // const filter = useSelector(state => state.filter);
  // console.log(filter);

  return (
    <li key={id}>
      {name}: {number}
      <button type="button" onClick={deleteContact}>
        dell
      </button>
    </li>
  );
};

export default ContactsRender;
