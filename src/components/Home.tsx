import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from '../config';
import Button from './Button';
import Grid from './Grid';
import HeroImage from './HeroImage';
import NoImage from '../images/no_image.jpg';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import React, {Component} from 'react';
import Thumb from './Thumb';
import {useHomeFetch} from '../hooks/useHomeFetch';

const Home: React.FC = () =>
{
	const {setSearchTerm, setIsLoadingMore, searchTerm, state, loading, error} = useHomeFetch ();

	if (error)
	{
		return <div>Shit's broken</div>
	}

	return (
		<>
			{!searchTerm && state.results [0] ? <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results [0].backdrop_path}`} text={state.results [0].overview} title={state.results [0].original_title} /> : null}
			<SearchBar setSearchTerm={setSearchTerm} />
			<Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
				{state.results.map (movie => (
						<Thumb alternative={movie.title + " Thumbnail"} clickable={true} image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage} movieId={movie.id}></Thumb>
					))
				}
			</Grid>
			{loading && <Spinner />}
			{state.page < state.total_pages && !loading && (<Button callback={() => setIsLoadingMore (true)} text="Load More" />)}
		</>
	);
}

export default Home;