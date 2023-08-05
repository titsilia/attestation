import { createSlice } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
  name: "sort",
  initialState: {
    orderSort: {
      param: "desc",
      page: 1,
    },
  },
  reducers: {
    setParam: (state, action) => {
      state.orderSort = {
        param: action.payload,
        page: action.payload,
      };
    },
  },
});

export const { setParam } = sortSlice.actions;
