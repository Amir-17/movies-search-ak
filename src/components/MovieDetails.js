import { Comment, Header, Icon, Segment } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = (props) => {
	const { details } = props;
	const [loadingReviews, setLoadingReviews] = useState(false);
	const [reviews, setReviews] = useState([]);

	const fetchReviews = async () => {
		setLoadingReviews(true);
		await axios
			.get(
				`https://imdb-api.com/en/API/Reviews/${process.env.REACT_APP_IMDB_API_KEY}/${details.id}`
			)
			.then((response) => {
				/* console.log(response.data.items) */ setReviews(response.data.items);
			})
			.catch((error) => console.log(error))
			.finally(() => {
				setLoadingReviews(false);
			});
	};

	useEffect(() => {
		fetchReviews();
	}, [details]);

	return (
		<Segment.Group size="massive">
			<Header as="h3">Details</Header>
			<Segment>
				<Header as="h4">Release:</Header>
				{details?.releases}
			</Segment>
			<Segment>
				<Header as="h4">Genres:</Header> {details?.genres}
			</Segment>
			<Segment>
				<Header as="h4">Awards:</Header> {details?.awards}
			</Segment>
			<Segment loading={loadingReviews}>
				<Header as="h4">Reviews:</Header>
				<Comment.Group className="comment-group">
					{reviews?.map((review, index) => {
						return (
							<Comment key={`comment_${index}`}>
								<Comment.Content>
									<Comment.Author as="a" href={review?.userUrl}>
										{review?.username}
									</Comment.Author>
									<Comment.Metadata>
										<div>{review?.date}</div>{" "}
										<div>
											<Icon name="star" />
											{review?.rate === "" ? "0" : review?.rate}
										</div>{" "}
									</Comment.Metadata>
									<Comment.Text>{review?.content}</Comment.Text>
									<Comment.Metadata>
										<div>{review?.helpful}</div>
									</Comment.Metadata>
								</Comment.Content>
							</Comment>
						);
					})}
				</Comment.Group>
			</Segment>
		</Segment.Group>
	);
};

export default MovieDetails;
