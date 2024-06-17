/* eslint-disable react/prop-types */
const WatchedMovieItem = ({ movie, onRemoveWatchedMovie }) => {
	const { imdbID } = movie;
	return (
		<li
			className="flex flex-col md:flex-row gap-6 text-white py-12 px-8 border-b border-neutral-600/50"
			key={movie.imdbID}>
			<img
				src={movie.Poster}
				alt={`${movie.Title} poster`}
				className="rounded-md w-[12rem] h-auto"
			/>
			<div>
				<h3 className="text-xl mb-4">{movie.Title}</h3>
				<div className="flex gap-4 items-center">
					<p className="flex items-center gap-2">
						<span>
							<i className="bx bx-star text-2xl text-teal-700"></i>
						</span>
						<span>{movie.imdbRating}</span>
					</p>
					<p className="flex items-center gap-2">
						<span>
							<i className="bx bx-user-circle text-2xl text-teal-700"></i>
						</span>
						<span>{movie.userRating}</span>
					</p>
					<p className="flex items-center gap-2">
						<span>
							<i className="bx bx-time-five text-2xl text-teal-700"></i>
						</span>
						<span>{movie.runtime} min</span>
					</p>
					<button
						className="flex items-center justify-center bg-red-500 rounded-full w-3 h-3 p-3 hover:bg-red-400"
						onClick={() => onRemoveWatchedMovie(imdbID)}>
						X
					</button>
				</div>
			</div>
		</li>
	);
};

export default WatchedMovieItem;
