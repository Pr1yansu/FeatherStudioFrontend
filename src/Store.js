import { configureStore } from "@reduxjs/toolkit";
import { photoSlice } from "./Slices/PhotoSlice";
import { categorySlice } from "./Slices/CategorySlice";
import { userSlice } from "./Slices/UserSlice";
export const store = configureStore({
  reducer: {
    photos: photoSlice.reducer,
    categories: categorySlice.reducer,
    Authuser: userSlice.reducer,
  },
});
