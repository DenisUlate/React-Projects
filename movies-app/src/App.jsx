/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ListBox from "./components/ListBox";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";

const tempMovieData = [
	{
		imdbID: "tt1375666",
		Title: "Inception",
		Year: "2010",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		imdbID: "tt0133093",
		Title: "The Matrix",
		Year: "1999",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
	},
	{
		imdbID: "tt6751668",
		Title: "Parasite",
		Year: "2019",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
	},
];

const tempWatchedData = [
	{
		imdbID: "tt1375666",
		Title: "Inception",
		Year: "2010",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
		runtime: 148,
		imdbRating: 8.8,
		userRating: 10,
	},
	{
		imdbID: "tt0088763",
		Title: "Back to the Future",
		Year: "1985",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		runtime: 116,
		imdbRating: 8.5,
		userRating: 9,
	},
];
const KEY = "1207a162";

function App() {
	const [movies, setMovies] = useState(tempMovieData);
	const [watched, setWatched] = useState(tempWatchedData);
	const [query, setQuery] = useState("inception");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [selectedId, setSelectedId] = useState(null);

	function handleSelectedMovie(id) {
		setSelectedId((selectedId) => (selectedId === id ? null : id));
	}

	/**
	 * Closes the movie details.
	 */
	function handleCloseMovieDetails() {
		setSelectedId(null);
	}

	/**
	 * Adds a movie to the watched list.
	 * @param {object} movie - The movie object to be added.
	 */
	function handleAddWatchedMovie(movie) {
		setWatched((watched) => {
			// Check if the movie already exists in the watched list
			const movieExists = watched.some(
				(watchedMovie) => watchedMovie.imdbID === movie.imdbID
			);

			// If the movie doesn't exist, add it to the list
			if (!movieExists) {
				return [...watched, movie];
			}

			return watched;
		});
	}

	/**
	 * Removes a movie from the watched list.
	 * @param {string} id - The ID of the movie to be removed.
	 */
	function handleRemoveWatchedMovie(id) {
		setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
	}

	useEffect(() => {
		const abortController = new AbortController();
		async function fetchMovies() {
			if (!query.length) {
				setMovies([]);
				setError("");
				return;
			}

			try {
				setIsLoading(true);
				const response = await fetch(
					`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
					{ signal: abortController.signal }
				);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				if (data.Response === "False") {
					throw new Error("No results found");
				}

				setMovies(data.Search);
				setError("");
			} catch (error) {
				console.error(error.message);
				if (error.name === "AbortError") {
					setError(error.message);
				}
			} finally {
				setIsLoading(false);
			}
		}

		fetchMovies();
		return () => {
			abortController.abort();
		};
	}, [query]);

	return (
		<div className="w-full h-screen bg-gradient-to-t from-teal-950 to-neutral-950 px-6 py-6">
			<Header query={query} setQuery={setQuery} movies={movies} />

			{/* Main content */}
			<main className="w-full max-w-[80rem] mx-auto flex gap-2">
				<ListBox>
					{isLoading && <Loader />}
					{!isLoading && !error && (
						<MovieList movies={movies} onSelectMovie={handleSelectedMovie} />
					)}
					{error && <ErrorMessage message={error} />}
				</ListBox>
				<ListBox>
					{selectedId ? (
						<MovieDetails
							selectedId={selectedId}
							onMovieClose={handleCloseMovieDetails}
							onAddWatchedMovie={handleAddWatchedMovie}
							watched={watched}
						/>
					) : (
						<>
							<WatchedSummary watched={watched} />
							<WatchedMovieList
								watched={watched}
								onRemoveWatchedMovie={handleRemoveWatchedMovie}
							/>
						</>
					)}
				</ListBox>
			</main>
		</div>
	);
}

export default App;
