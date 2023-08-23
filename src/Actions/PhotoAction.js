import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../App";
import { toast } from "react-hot-toast";

export const fetchPhotos = createAsyncThunk(
  "photos/fetchPhotos",
  async (category) => {
    try {
      if (category === "All") {
        var link = await `${server}/photos`;
      } else {
        link = await `${server}/photos?category=${category}`;
      }
      const response = await axios.get(link);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(error.response.data.error.message);
    }
  }
);
export const fetchPhotosAll = createAsyncThunk(
  "photos/fetchPhotosAll",
  async (filters) => {
    const price = await filters[2];
    if (filters[1] === null) {
      filters[1] = 0;
    }
    try {
      let link =
        await `${server}/photos/all?rating=${filters[1]}&price[lte]=${price[1]}&price[gte]=${price[0]}&page=${filters[3]}`;
      if (filters[0] && filters[0] !== "All") {
        link =
          await `${server}/photos/all?category=${filters[0]}&rating=${filters[1]}&price[lte]=${price[1]}&price[gte]=${price[0]}&page=${filters[3]}`;
      }
      const response = await axios.get(link);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(error.response.data.error.message);
    }
  }
);

export const fetchPhotoDetails = createAsyncThunk(
  "photos/fetchPhotoDetails",
  async (id) => {
    try {
      if (!id) {
        return toast.error("Product details not available");
      }
      const response = await axios.get(`${server}/photo/${id}`);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      throw new Error(error.response.data.error.message);
    }
  }
);
