/* eslint-disable react/prop-types */
import WatchedMovieItem from "./WatchedMovieItem";

const WatchedMovieList = ({ watched, onRemoveWatchedMovie }) => {
	return (
		<ul>
			{watched.map((movie, index) => (
				<WatchedMovieItem
					key={`${movie.imdbID}-${index}`}
					movie={movie}
					onRemoveWatchedMovie={onRemoveWatchedMovie}
				/>
			))}
		</ul>
	);
};

export default WatchedMovieList;
