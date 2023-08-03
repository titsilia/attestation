import { createSlice } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
  name: "sort",
  initialState: {
    orderSort: {
      param: "desc",
    },
  },
  reducers: {
    setParam: (state, action) => {
      state.orderSort = {
        param: action.payload,
      };
    },
  },
});

export const { setParam } = sortSlice.actions;
