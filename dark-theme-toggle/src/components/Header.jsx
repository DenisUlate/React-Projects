import { FaReact } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";

const Header = () => {
	const theme = useSelector((state) => state.theme.theme);

	return (
		<header
			className={`${
				theme === "light" ? "bg-white text-blue-600" : "bg-gray-900 text-white"
			}  flex items-center justify-around p-6 w-full border`}>
			<FaReact className="text-4xl" />
			<h1 className="uppercase">Dark Theme Toggle</h1>
			<ThemeToggle />
		</header>
	);
};

export default Header;
