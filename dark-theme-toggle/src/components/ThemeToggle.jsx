import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./ThemeSlice";

const ThemeToggle = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.theme.theme);

	return (
		<button
			onClick={() => dispatch(toggleTheme())}
			className={` ${
				theme === "light"
					? "bg-purple-950 text-white"
					: "bg-white text-purple-950"
			} px-4 py-2 rounded-md transition-colors duration-300`}>
			Toggle {theme === "light" ? "Dark" : "Light"} Mode
		</button>
	);
};

export default ThemeToggle;
