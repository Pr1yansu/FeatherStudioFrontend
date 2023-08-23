import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../App";
export const fetchCategories = createAsyncThunk("category", async () => {
  try {
    const response = await axios.get(`${server}/category`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
});
