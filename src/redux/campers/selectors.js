export const selectCampers = (state) => state.favorite.campers;
export const selectFavoriteCampers = (state) => state.favorite.favoriteCampers;
export const selectLoading = (state) => state.favorite.isLoading;
export const selectError = (state) => state.favorite.isError;
export const selectCurrentPage = (state) => state.favorite.currentPage;
export const selectPerPage = (state) => state.favorite.perPage;
export const selectMoreToLoad = (state) => state.favorite.moreToLoad;
