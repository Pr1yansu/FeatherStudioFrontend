import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../Actions/CategoryAction";

const initialState = {
  categories: [],
  status: null,
  error: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        console.log(action);
        state.error = action.error.message;
      });
  },
});
