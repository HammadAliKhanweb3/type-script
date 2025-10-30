import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice"
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  book: bookReducer
})

// Enhanced debugging version
const createNoopStorage = () => {
  console.log('Using noop storage (server-side)');
  return {
    getItem(_key: string) {
      console.log('Noop storage: getItem called with key:', _key);
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      console.log('Noop storage: setItem called with key:', _key);
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      console.log('Noop storage: removeItem called with key:', _key);
      return Promise.resolve();
    },
  };
};

const createDebugStorage = () => {
  console.log('Using debug localStorage');
  return {
    getItem(key: string) {
      console.log('Debug storage: getItem called with key:', key);
      try {
        const value = localStorage.getItem(key);
        console.log('Debug storage: getItem returning:', value);
        return Promise.resolve(value);
      } catch (error) {
        console.error('Debug storage: getItem error:', error);
        return Promise.resolve(null);
      }
    },
    setItem(key: string, value: any) {
      console.log('Debug storage: setItem called with key:', key, 'value:', value);
      try {
        localStorage.setItem(key, value);
        return Promise.resolve(value);
      } catch (error) {
        console.error('Debug storage: setItem error:', error);
        return Promise.resolve(value);
      }
    },
    removeItem(key: string) {
      console.log('Debug storage: removeItem called with key:', key);
      try {
        localStorage.removeItem(key);
        return Promise.resolve();
      } catch (error) {
        console.error('Debug storage: removeItem error:', error);
        return Promise.resolve();
      }
    },
  };
};

const storageEngine = typeof window !== "undefined" ? createDebugStorage() : createNoopStorage();

const persistConfig = { 
  key: "root",
  storage: storageEngine,
  whitelist: ['book']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persisted = persistStore(store)