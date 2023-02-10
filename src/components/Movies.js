import DetailsScreen from "./DetailsScreen";
import { Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import MainScreen from "./MainScreen";
import {
	setIsSearching,
	setSearchQuery,
	setShowDetails,
} from "../redux/movies/actions";
import Header from "./Header";
import React from "react";
import "../App.css";

const Movies = (props) => {
	const {
		showDetails,
		searchQuery,
		isSearching,
		setSearchQuery,
		setIsSearching,
		setShowDetails,
		searchResults,
	} = props;

	return (
		<>
			<Header />
			{!showDetails ? (
				searchResults?.length > 0 ? (
					<MainScreen />
				) : (
					<Segment as="h3">Enter a search term and search for movies</Segment>
				)
			) : null}
			{showDetails && <DetailsScreen />}
		</>
	);
};

const mapStateToProps = (state) => {
	const { movies } = state;
	return {
		showDetails: movies.showDetails,
		searchQuery: movies.searchQuery,
		isSearching: movies.isSearching,
		searchResults: movies.searchResults,
	};
};

const mapDispatchToProps = (dispatch) => ({
	setSearchQuery: (query) => dispatch(setSearchQuery(query)),
	setIsSearching: (isSearching) => dispatch(setIsSearching(isSearching)),
	setShowDetails: (show) => dispatch(setShowDetails(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
