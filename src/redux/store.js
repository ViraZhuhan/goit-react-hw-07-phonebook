import { configureStore } from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import contactsSlice from './contacts/sliceContacts';
import filterSlice from './filter/sliceFilter';


const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})

