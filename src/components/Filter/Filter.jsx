import React from 'react';

import { useDispatch } from 'react-redux';
import { findContact } from 'redux/phoneBookSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <label>
        Find Contacts by name
        <br />
        <input
          type="text"
          // value={value}
          onChange={e => dispatch(findContact(e.target.value))}
        />
      </label>
    </>
  );
};

// Filter.propTypes = {
//   value: propTypes.string.isRequired,
// };

export default Filter;
