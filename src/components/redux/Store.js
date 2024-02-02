import { contactsReducer, filtersReducer } from './Reducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = {
  contacts: contactsReducer,
  filters: filtersReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});


