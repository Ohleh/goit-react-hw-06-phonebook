import { configureStore } from '@reduxjs/toolkit';
import phoneBookSlice from './phoneBookSlice';

export default configureStore({
  reducer: {
    phoneBookSlice,
  },
});
