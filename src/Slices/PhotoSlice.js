import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPhotoDetails,
  fetchPhotos,
  fetchPhotosAll,
} from "../Actions/PhotoAction";

const initialState = {
  photos: [],
  status: null,
  error: null,
  photoDetail: null,
};

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.photos = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchPhotosAll.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPhotosAll.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.photos = action.payload;
      })
      .addCase(fetchPhotosAll.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchPhotoDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPhotoDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.photoDetail = action.payload;
      })
      .addCase(fetchPhotoDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
