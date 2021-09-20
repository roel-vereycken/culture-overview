import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter1: "",
    filter2: "",
  },
  reducers: {
    update: (state, action) => {
      state.filter1 = action.payload;
    },
    update2: (state, action) => {
      state.filter2 = action.payload;
    },
  },
});

export const { update, update2 } = filterSlice.actions;
export default filterSlice.reducer;
