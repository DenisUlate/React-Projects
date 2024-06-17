/* eslint-disable react/prop-types */
// Función para calcular el promedio de un array
const average = (arr) =>
	arr.reduce((acc, cur, arr) => acc + cur / arr.length, 0);

const WatchedSummary = ({ watched }) => {
	// Calcula el promedio de las calificaciones de IMDb
	const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	// Calcula el promedio de las calificaciones de los usuarios
	const avgUserRating = average(watched.map((movie) => movie.userRating));
	// Calcula el promedio de la duración de las películas
	const avgRuntime = average(watched.map((movie) => movie.runtime));

	return (
		<div className="bg-neutral-800 rounded-lg shadow-lg shadow-teal-500/20 px-6 py-4">
			<h2 className="text-white uppercase tracking-widest font-light">
				Movies you watched
			</h2>
			<div className="flex flex-col sm:flex-row gap-3 items-center mt-4 text-white p-2">
				<p className="flex items-center gap-2">
					<span>
						<i className="bx bx-camera-movie text-xl text-teal-700"></i>
					</span>
					<span className="text-sm text-white font-semibold">
						{watched.length} movies
					</span>
				</p>
				<p className="flex items-center gap-2 my-auto">
					<span>
						<i className="bx bx-star text-xl text-teal-700"></i>
					</span>
					<span className="text-sm text-white font-semibold">
						{avgImdbRating.toFixed(2)}
					</span>
				</p>
				<p className="flex items-center gap-2">
					<span>
						<i className="bx bx-user-circle text-xl text-teal-700"></i>
					</span>
					<span className="text-sm text-white font-semibold">
						{avgUserRating.toFixed(2)}
					</span>
				</p>
				<p className="flex items-center gap-2">
					<span>
						<i className="bx bx-time-five text-xl text-teal-700"></i>
					</span>
					<span className="text-sm text-white font-semibold">
						{avgRuntime} min
					</span>
				</p>
			</div>
		</div>
	);
};

export default WatchedSummary;
