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

      if (filters.vehicleType) {
        console.log("filters.vehicleTypes:", filters.vehicleType);
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

      const response = await axios.get(url.toString());
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
