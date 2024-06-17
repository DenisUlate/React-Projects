/* eslint-disable react/prop-types */
import { useState } from "react";

const ListBox = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="h-[85vh] max-w-[40rem] w-full bg-gradient-to-b from-black to-teal-950 my-4 rounded-xl relative overflow-y-scroll mx-auto">
			<button
				onClick={() => setIsOpen((open) => !open)}
				className="absolute top-0 right-0 w-6 h-6 bg-neutral-600 rounded-full text-white p-2 justify-center items-center flex m-2">
				{isOpen ? "-" : "+"}
			</button>
			{isOpen && children}
		</div>
	);
};

export default ListBox;
