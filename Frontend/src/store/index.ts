import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

// CORRECT storage import - use one of these options:

// Option A: LocalStorage (most common)
import storage from 'redux-persist/es/storage';

// Option B: If the above doesn't work, try this:
// import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
// const storage = createWebStorage('local');

const rootReducer = combineReducers({
  book: bookReducer
});

// Simple server-side storage
const createNoopStorage = () => {
  return {
    getItem(_key: string): Promise<string | null> {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string): Promise<void> {
      return Promise.resolve();
    },
    removeItem(_key: string): Promise<void> {
      return Promise.resolve();
    },
  };
};

// Use proper conditional storage
const storageEngine = typeof window !== "undefined" ? storage : createNoopStorage();

const persistConfig = {
  key: "root",
  storage: storageEngine,
  whitelist: ['book']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persisted = persistStore(store);