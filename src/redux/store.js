import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from './phoneBookSlice';

export default configureStore({
  reducer: {
    phonebook: phoneBookSlice.reducer,
  },
});
