import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/phoneBookSlice';

const ContactsRender = ({ contact: [id, name, number] }) => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      {name}: {number}
      <button type="button" onClick={() => dispatch(removeContact(id))}>
        dell
      </button>
    </li>
  );
};

export default ContactsRender;
