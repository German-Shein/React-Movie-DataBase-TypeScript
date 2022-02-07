import Actor from './Actor';
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import {IMAGE_BASE_URL, POSTER_SIZE} from "../config";
import MovieInfo from './MovieInfo';
import MovieInfoBar from "./MovieInfoBar";
import NoImage from '../images/no_image.jpg'
import React from "react";
import Spinner from './Spinner';
import { useMovieFetch } from '../hooks/useMovieFetch';
import { useParams } from 'react-router-dom';

const Movie: React.FC = () =>
{
	const {movieId} = useParams ();
	const {state: movie, loading, error} = useMovieFetch (Number (movieId));
	if (loading)
	{
		return <Spinner />
	}
	if (error)
	{
		return <div>Something went wrong...</div>
	}
	return (
		<>
			<BreadCrumb movieTitle={movie.original_title} />
			<MovieInfo movie={movie}></MovieInfo>
			<MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}></MovieInfoBar>
			<Grid header="Actors">
				{movie.actors.map (actor => (
					<Actor character={actor.character} imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage} key={actor.credit_id} name={actor.name}></Actor>
				))}
			</Grid>
		</>
	);
}

export default Movie;