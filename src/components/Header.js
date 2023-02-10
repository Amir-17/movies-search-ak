import { Button, Form, Icon, Input, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import {
	setSearchQuery,
	setSearchResults,
	setShowDetails,
} from "../redux/movies/actions";
import axios from "axios";
import React from "react";
import "../App.css";

const Header = (props) => {
	const { setShowDetails, searchQuery, setSearchQuery, setSearchResults } =
		props;
	const baseUrl = "https://imdb-api.com/en/API";

	const handleChange = (e) => {
		e.preventDefault();

		setSearchQuery(e.target.value);
	};

	const submitForm = async () => {
		if (searchQuery?.length > 0) {
			await axios
				.get(
					`${baseUrl}/SearchMovie/${process.env.REACT_APP_IMDB_API_KEY}/${searchQuery}`
				)
				.then((response) => {
					// console.log(response);
					setSearchResults(response.data.results);
				})
				.catch((error) => console.log(error));
		}
	};

	return (
		<Menu className="movies-nav" secondary color="blue" size="massive">
			<Menu.Item onClick={() => setShowDetails(false)} position="left">
				<Icon name="film" /> Movies
			</Menu.Item>
			<Menu.Menu>
				<Menu.Item>
					<Form>
						<Form.Field inline>
							<Input
								onChange={(e) => handleChange(e)}
								value={searchQuery}
								placeholder="Search movies..."
							/>
							<Button
								icon
								primary
								disabled={!searchQuery?.length}
								onClick={() => submitForm()}>
								<Icon name="search" />
							</Button>
						</Form.Field>
					</Form>
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};

const mapStateToProps = (state) => {
	const { movies } = state;
	return {
		showDetails: movies.showDetails,
		searchQuery: movies.searchQuery,
		isSearching: movies.isSearching,
	};
};

const mapDispatchToProps = (dispatch) => ({
	setSearchQuery: (query) => dispatch(setSearchQuery(query)),
	setShowDetails: (show) => dispatch(setShowDetails(show)),
	setSearchResults: (result) => dispatch(setSearchResults(result)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
