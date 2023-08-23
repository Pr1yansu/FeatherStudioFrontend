import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../App";

export const googleLogin = createAsyncThunk("Auth/fetchUser", async () => {
  try {
    const link = `${server}/me`;
    const response = await axios.get(link, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.error.message);
  }
});
