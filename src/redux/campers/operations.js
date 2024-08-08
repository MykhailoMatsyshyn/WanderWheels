import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6686810d83c983911b02885b.mockapi.io/api";

export const fetchCampersPage = createAsyncThunk(
  "campers/fetchCampersPage",
  async ({ page, limit, filters = {} }, thunkAPI) => {
    try {
      const url = new URL("/adverts", axios.defaults.baseURL);

      url.searchParams.append("limit", limit);
      url.searchParams.append("page", page);

      const response = await axios.get(url.toString());
      return response.data;
    } catch (e) {
      //   console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
