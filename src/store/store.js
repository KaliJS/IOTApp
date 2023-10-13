import { configureStore } from '@reduxjs/toolkit';
import snackbarReducer from './snackbar/slice';
const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
  },
});

export default store;
