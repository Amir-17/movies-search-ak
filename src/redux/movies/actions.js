import moviesActionTypes from "./types";

export const setSearchQuery = (searchQuery) => ({
	type: moviesActionTypes.SET_SEARCH_QUERY,
	payload: searchQuery,
});

export const setIsSearching = (isSearching) => ({
	type: moviesActionTypes.SET_IS_SEARCHING,
	payload: isSearching,
});

export const setShowDetails = (show) => ({
	type: moviesActionTypes.SET_SHOW_DETAILS,
	payload: show,
});

export const setSearchResults = (results) => ({
	type: moviesActionTypes.SET_SEARCH_RESULTS,
	payload: results,
});

export const setSelectedMovieId = (id) => ({
	type: moviesActionTypes.SET_SELECTED_MOVIE,
	payload: id,
});

export const setIsLoadingDetails = (loading) => ({
	type: moviesActionTypes.SET_IS_LOADING_DETAILS,
	payload: loading,
});

export const setMovieDetails = (details) => ({
	type: moviesActionTypes.SET_MOVIE_DETAILS,
	payload: details,
});
