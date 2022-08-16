import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { findContact } from 'redux/phoneBookSlice';

const Filter = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <>
      <label>
        Find Contacts by name
        <br />
        <input
          type="text"
          value={value}
          onChange={e => dispatch(findContact(e.target.value))}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  // value: propTypes.string.isRequired,
  // onChange: propTypes.func.isRequired,
};

export default Filter;
