import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b3ae307fba54a5b7edd52d.mockapi.io/api";

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
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
