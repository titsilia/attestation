import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { searchApi } from "./reducer";
import { setParam } from "./action-creation";

const rootReducer = combineReducers({
  [searchApi.reducerPath]: searchApi.reducer,
  setParam,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => getDefault().concat(searchApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
