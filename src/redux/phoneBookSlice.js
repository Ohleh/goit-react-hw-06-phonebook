import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items = [...state.contacts.items, action.payload];
      console.log(action);
    },
    removeContact: (state, action) => {
      console.log(action);
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
    findContact: (state, action) => {
      state.contacts.filter = action.payload;
      console.log(action);
      console.log(state.contacts.filter);
    },
  },
});

export const { addContact, removeContact, findContact } =
  phoneBookSlice.actions; // експорт екшенів

export default phoneBookSlice.reducer;
