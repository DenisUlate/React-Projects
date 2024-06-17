/* eslint-disable react/prop-types */
import MovieItem from "./MovieItem";

const MovieList = ({ movies, onSelectMovie }) => {
	return (
		<ul className="px-2">
			{movies?.map((movie, index) => (
				<MovieItem
					key={`${movie.imdbID}-${index}`}
					movie={movie}
					onSelectMovie={onSelectMovie}
				/>
			))}
		</ul>
	);
};

export default MovieList;
