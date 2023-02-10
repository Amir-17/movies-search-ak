import { setSelectedMovieId, setShowDetails } from "../redux/movies/actions";
import { Card, Grid, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import React from "react";

const MovieCover = (props) => {
	const { setShowDetails, data, setSelectedMovieId, detailView } = props;

	return (
		<Grid.Column>
			{detailView && detailView === true ? (
				<Card centered={detailView && detailView === true ? true : false}>
					<Image
						wrapped
						ui={false}
						src={
							data.cover
								? data.cover
								: "https://innovating.capital/wp-content/uploads/2021/05/vertical-placeholder-image.jpg"
						}
					/>
					<Card.Content>
						<Card.Header>{data.title}</Card.Header>
					</Card.Content>
				</Card>
			) : (
				<Card
					centered={detailView && detailView === true ? true : false}
					onClick={() => {
						setShowDetails(true);
						setSelectedMovieId(data?.id);
					}}>
					<Image
						wrapped
						ui={false}
						src={
							data.cover
								? data.cover
								: "https://innovating.capital/wp-content/uploads/2021/05/vertical-placeholder-image.jpg"
						}
					/>
					<Card.Content>
						<Card.Header>{data.title}</Card.Header>
					</Card.Content>
				</Card>
			)}
		</Grid.Column>
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
	setShowDetails: (show) => dispatch(setShowDetails(show)),
	setSelectedMovieId: (movieId) => dispatch(setSelectedMovieId(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCover);
