import { createSlice } from "@reduxjs/toolkit";
import { googleLogin } from "../Actions/UserAction";

const initialState = {
  user: [],
  status: null,
  error: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(googleLogin.pending, (state) => {
        state.status = "loading";
        state.isAuthenticated = false;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.isAuthenticated = false;
      });
  },
});
