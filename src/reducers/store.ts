import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { searchApi } from "./reducer";
import { sortSlice } from "./action-creation";

const rootReducer = combineReducers({
  [searchApi.reducerPath]: searchApi.reducer,
  [sortSlice.name]: sortSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => getDefault().concat(searchApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
