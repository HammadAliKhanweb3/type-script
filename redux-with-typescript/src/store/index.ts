// src/store/index.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { persistReducer, persistStore } from 'redux-persist';

// Combine reducers from different slices (if you have more)
const rootReducer = combineReducers({
  book: bookReducer
  // Add other slices here, e.g., user: userReducer
});

// Configure persist settings (if you want to persist state in localStorage)
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['book'] // Only persist the book slice; adjust as needed
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
  // You can add middleware and devTools options here if needed
});

// Types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create persistor to enable persistence
export const persistor = persistStore(store);