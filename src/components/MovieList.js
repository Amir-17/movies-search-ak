import { Grid, Segment } from "semantic-ui-react";
import MovieCover from "./MovieCover";
import { connect } from "react-redux";
import React from "react";

const MovieList = (props) => {
	const { searchResults, searchQuery, columns, similars } = props;
	return (
		<Grid doubling stretched columns={columns ? columns : 5}>
			{similars?.length ? (
				similars?.map((similar, index) => {
					return (
						<MovieCover
							key={`similar_${index}`}
							data={{
								id: similar.id,
								title: similar.title,
								cover: similar.image,
							}}
						/>
					);
				})
			) : !similars?.length && searchResults?.length ? (
				searchResults?.map((result, index) => {
					return (
						<MovieCover
							key={`cover_${index}`}
							data={{
								id: result.id,
								cover: result.image,
								title: result.title,
							}}
						/>
					);
				})
			) : (
				<Segment>No results for the query: {searchQuery}</Segment>
			)}
		</Grid>
	);
};

const mapStateToProps = (state) => {
	const { movies } = state;
	return {
		searchResults: movies.searchResults,
		searchQuery: movies.searchQuery,
	};
};

export default connect(mapStateToProps, null)(MovieList);
