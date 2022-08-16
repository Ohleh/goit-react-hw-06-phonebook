import { configureStore } from '@reduxjs/toolkit';
import phonebook from './phoneBookSlice';

export default configureStore({
  reducer: {
    phonebook,
    // phonebook: phoneBookSlice.reducer,
  },
});
