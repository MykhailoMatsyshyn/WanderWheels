import { createSlice } from "@reduxjs/toolkit";
import { fetchCampersPage } from "./operations";

export const initialStateCampers = {
  campers: [],
  favoriteCampers: [],
  filters: {},
  perPage: 4,
  currentPage: 1,
  moreToLoad: true,
  isLoading: false,
  isError: false,
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
    resetСampers(state) {
      state.campers = [];
    },
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    setError(state, action) {
      state.isError = action.payload;
    },
    addToFavorite(state, action) {
      const camperId = action.payload;
      state.favoriteCampers.push(camperId);
    },
    deleteFromFavorite(state, action) {
      const camperId = action.payload;

      const index = state.favoriteCampers.findIndex(
        (сamper) => сamper._id === camperId
      );
      state.favoriteCampers.splice(index, 1);
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

        const ids = state.campers.map((camper) => camper._id);

        state.campers = [
          ...state.campers,
          ...action.payload.campers.filter(
            (camper) => !ids.includes(camper._id)
          ),
        ];

        const loadedCampersCount = state.campers.length;
        if (loadedCampersCount >= action.payload.totalCount) {
          state.moreToLoad = false;
        }
      })
      .addCase(fetchCampersPage.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.moreToLoad = false;
      });
  },
});

export const {
  deleteFromFavorite,
  addToFavorite,
  incrementPage,
  setPage,
  setFilters,
  setError,
  resetPage,
  resetСampers,
} = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
