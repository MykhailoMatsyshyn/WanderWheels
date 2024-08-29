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

      console.log("filters:", filters);

      if (filters.location) {
        console.log("filters.location:", filters.location);
        url.searchParams.append("location", filters.location);
      }

      // if (filters.type && filters.type !== "all") {
      //   url.searchParams.append("form", filters.type);
      // }

      //  if (filters.equipment) {
      //    let searchLine = [];
      //    Object.keys(filters.equipment).forEach((key) => {
      //      if (filters.equipment[key]) {
      //        searchLine.push(key);
      //        console.log(key, searchLine);
      //      }
      //    });
      //    if (searchLine)
      //      url.searchParams.append("search", searchLine.join(" "));
      //  }

      const response = await axios.get(url.toString());
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
