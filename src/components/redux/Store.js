// import { InitialState } from './InitialState'
// import {createStore} from 'redux'
// import { reducer } from './Reducer'
import { contactsReducer } from './Reducer';
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)