import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b3ae307fba54a5b7edd52d.mockapi.io/api";

function constructUrl(filters = {}, baseUrl = axios.defaults.baseURL) {
  const url = new URL("/adverts", baseUrl);

  if (filters.location) {
    url.searchParams.append("location", filters.location);
  }

  if (filters.vehicleType && filters.vehicleType !== "filter-off") {
    url.searchParams.append("form", filters.vehicleType);
  }

  if (filters.equipment) {
    for (const [key, value] of Object.entries(filters.equipment)) {
      if (value) {
        switch (key) {
          case "airConditioner":
            url.searchParams.append("isAirConditioner", true);
            break;
          case "kitchen":
            url.searchParams.append("isKitchen", true);
            break;
          case "TV":
            url.searchParams.append("isTV", true);
            break;
          case "shower":
          case "wc":
            url.searchParams.append("isShowerOrWC", true);
            break;
          case "automatic":
            url.searchParams.append("transmission", "automatic");
            break;
        }
      }
    }
  }

  return url;
}

async function fetchTotalCount(filters = {}) {
  try {
    const url = constructUrl(filters);
    const response = await axios.get(url.toString());
    return response.data.length;
  } catch (e) {
    throw new Error(e.message);
  }
}

export const fetchCampersPage = createAsyncThunk(
  "campers/fetchCampersPage",
  async ({ page, limit, filters = {} }, thunkAPI) => {
    try {
      const totalCount = await fetchTotalCount(filters);

      const url = constructUrl(filters);
      url.searchParams.append("limit", limit);
      url.searchParams.append("page", page);

      const response = await axios.get(url.toString());
      return {
        campers: response.data,
        totalCount,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
