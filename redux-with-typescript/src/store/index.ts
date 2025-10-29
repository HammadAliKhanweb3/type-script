import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from "../store/bookSlice"
import { persistReducer,persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage";


const rootReducer = combineReducers(
  {
    book:bookReducer
  }
)

const persistConfig = { 
  key:"root",
  storage,
  whitelist:['book']

}


const persistedReducer =  persistReducer(persistConfig,rootReducer)

export const store = configureStore({
reducer:persistedReducer
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persisted = persistStore(store)

