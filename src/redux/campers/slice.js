import { createSlice } from "@reduxjs/toolkit";
import { fetchCampersPage } from "./operations";

export const initialStateCampers = {
  campers: [],
  perPage: 4,
  currentPage: 1,
  //   filters: {},
  favoriteCampers: [],
  isLoading: false,
  isError: false,
  moreToLoad: true,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: initialStateCampers,
  reducers: {
    incrementPage(state) {
      state.currentPage++;
    },
    resetPage(state) {
      state.currentPage = 1;
      state.campers = [];
    },
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    resetItems(state) {
      state.campers = [];
    },
    addToFavorite(state, action) {
      const camperId = action.payload;
      state.favoriteCampers.push(camperId);
      updateFavorites(state.favoriteCampers);
    },
    deleteFromFavorite(state, action) {
      const camperId = action.payload;
      state.favoriteCampers = state.favoriteCampers.filter(
        (id) => id !== camperId
      );
      updateFavorites(state.favoriteCampers);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampersPage.pending, (state) => {
        state.isLoading = true;
        state.moreToLoad = true;
      })
      .addCase(fetchCampersPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;

        // const ids = state.campers.map((camper) => camper._id);

        // state.campers = [
        //   ...state.campers,
        //   ...action.payload.filter((camper) => !ids.includes(camper._id)),
        // ];

        // if (action.payload.length < state.perPage) {
        //   state.moreToLoad = false;
        // }
      })
      .addCase(fetchCampersPage.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.moreToLoad = false;
      });
  },
});
