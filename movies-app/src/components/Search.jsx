/* eslint-disable react/prop-types */
const Search = ({ query, setQuery }) => {
	return (
		<input
			className="w-[20rem] h-[2rem] bg-transparent border border-white/15 text-white text-center rounded-xl "
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={(e) => setQuery(e.target.value)}
		/>
	);
};

export default Search;
