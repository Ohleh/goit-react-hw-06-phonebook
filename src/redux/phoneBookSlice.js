import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: {
    items: [1, 4],
    filter: '',
  },
};

export const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items = [...(state.contacts.items + action.payload)];
      console.log(action);
    },
    removeContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    findContact: (state, action) => {},
  },
});

export const { addContact, removeContact, findContact } =
  phoneBookSlice.actions; // експорт екшенів

export default phoneBookSlice.reducer;
