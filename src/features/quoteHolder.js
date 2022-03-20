import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { id: 0, advice: "" },
};

export const quoteHolderSlice = createSlice({
  name: "quoteHolder",
  initialState,
  reducers: {
    newQuote: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { newQuote } = quoteHolderSlice.actions;
export default quoteHolderSlice.reducer;
