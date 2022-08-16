import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
};

export const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    removeContact: (state, { payload: id }) => {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== id
      );
    },
    findContact: (state, action) => {
      state.contacts.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, findContact } =
  phoneBookSlice.actions; // експорт екшенів

export default phoneBookSlice.reducer;
