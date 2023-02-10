import moviesActionTypes from "./types";

const INITIAL_STATE = {
	isSearching: false,
	searchQuery: "",
	showDetails: false,
	searchResults: [],
	selectedMovieId: {},
	isLoadingDetails: false,
	movieDetails: {},
};

const moviesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case moviesActionTypes.SET_SEARCH_QUERY:
			return {
				...state,
				searchQuery: action.payload,
			};
		case moviesActionTypes.SET_IS_SEARCHING:
			return {
				...state,
				isSearching: action.payload,
			};
		case moviesActionTypes.SET_SHOW_DETAILS:
			return {
				...state,
				showDetails: action.payload,
			};
		case moviesActionTypes.SET_SEARCH_RESULTS:
			return {
				...state,
				searchResults: action.payload,
			};
		case moviesActionTypes.SET_SELECTED_MOVIE:
			return {
				...state,
				selectedMovieId: action.payload,
			};
		case moviesActionTypes.SET_IS_LOADING_DETAILS:
			return {
				...state,
				isLoadingDetails: action.payload,
			};
		case moviesActionTypes.SET_MOVIE_DETAILS:
			return {
				...state,
				movieDetails: action.payload,
			};
		default:
			return state;
	}
};

export default moviesReducer;
