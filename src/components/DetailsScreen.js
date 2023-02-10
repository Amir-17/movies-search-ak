import { setIsLoadingDetails, setMovieDetails } from "../redux/movies/actions";
import { Header, Segment } from "semantic-ui-react";
import MovieDetails from "./MovieDetails";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieCover from "./MovieCover";
import MovieList from "./MovieList";
import axios from "axios";
import "../App.css";

const DetailsScreen = (props) => {
	const {
		setIsLoadingDetails,
		selectedMovieId,
		setMovieDetails,
		movieDetails,
	} = props;

	const fetchMovieDetails = () => {
		axios
			.get(
				`https://imdb-api.com/en/API/Title/${process.env.REACT_APP_IMDB_API_KEY}/${selectedMovieId}`
			)
			.then((response) => {
				setMovieDetails(response.data);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		const loadingTimeout = setTimeout(() => {
			setIsLoadingDetails(true);
		}, 500);
		fetchMovieDetails();
		return () => {
			setIsLoadingDetails(false);
			clearTimeout(loadingTimeout);
		};
	}, []);

	return (
		<div className="details-screen">
			<Segment.Group
				horizontal={window.screen.width > 768 ? true : false}
				className="first-row">
				<Segment compact className="left-side">
					<MovieCover
						detailView={true}
						data={{ cover: movieDetails?.image, title: movieDetails?.title }}
					/>
				</Segment>
				<Segment className="right-side">
					<MovieDetails
						details={{
							id: movieDetails?.id,
							releases: movieDetails?.releaseDate,
							genres: movieDetails?.genres,
							awards: movieDetails?.awards,
						}}
					/>
				</Segment>
			</Segment.Group>
			<Segment className="second-row">
				<Header as="h3">More movies like this</Header>
				<MovieList columns={10} similars={movieDetails?.similars} />
			</Segment>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { movies } = state;
	return {
		selectedMovieId: movies.selectedMovieId,
		isLoadingDetails: movies.isLoadingDetails,
		movieDetails: movies.movieDetails,
	};
};

const mapDispatchToProps = (dispatch) => ({
	setIsLoadingDetails: (loading) => dispatch(setIsLoadingDetails(loading)),
	setMovieDetails: (details) => dispatch(setMovieDetails(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
