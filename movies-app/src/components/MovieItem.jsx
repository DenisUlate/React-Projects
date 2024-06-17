/* eslint-disable react/prop-types */
const MovieItem = ({ movie, onSelectMovie }) => {
	return (
		<li
			key={movie.imdbID}
			onClick={() => onSelectMovie(movie.imdbID)}
			className="flex text-white border-b border-neutral-600/50 py-4 gap-4 cursor-pointer hover:bg-teal-950 transition-all duration-500 ease-in-out">
			<img
				src={movie.Poster}
				alt={`${movie.Title} poster`}
				className="w-[9rem] h-auto rounded-lg shadow-lg object-cover"
			/>
			<div className="flex flex-col gap-2">
				<p className="text-sm text-teal-500">Movie</p>
				<h3 className="font-bold">{movie.Title}</h3>
				<div className="bg-neutral-800 rounded-md w-full max-w-[5rem] px-2">
					<p className="flex gap-2 text-sm text-neutral-300">
						<span>🗓</span>
						<span>{movie.Year}</span>
					</p>
				</div>
				<span className="text-xs text-neutral-400">Genre: Action</span>
			</div>
		</li>
	);
};

export default MovieItem;
