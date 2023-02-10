import moviesReducer from "./movies/reducer";
import { combineReducers } from "redux";

export default combineReducers({
	movies: moviesReducer,
});
