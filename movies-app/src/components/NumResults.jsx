/* eslint-disable react/prop-types */
const NumResults = ({ movies }) => {
	return (
		<p className="text-gray-300">
			Found <strong>{movies.length}</strong> results
		</p>
	);
};

export default NumResults;
