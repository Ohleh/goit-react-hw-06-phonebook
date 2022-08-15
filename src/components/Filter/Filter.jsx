import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Filter = ({ value, onChange }) => {
  const filter = useSelector(state => state.filter);
  console.log(filter);

  return (
    <>
      <label>
        Find Contacts by name
        <br />
        <input type="text" value={value} onChange={onChange} />
      </label>
    </>
  );
};

Filter.propTypes = {
  // value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;
