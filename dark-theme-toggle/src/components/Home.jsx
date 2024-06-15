import { SiRockstargames } from "react-icons/si";
import { useSelector } from "react-redux";

const Home = () => {
	const theme = useSelector((state) => state.theme.theme);

	return (
		<section
			className={`${
				theme === "light" ? "bg-white text-black" : "bg-black text-purple-950"
			} w-full h-screen flex flex-col items-center justify-center gap-28 transition-colors duration-300`}>
			<h1 className="uppercase font-semibold text-2xl">
				React App | Dark Toggle
			</h1>
			<SiRockstargames className="text-6xl" />
		</section>
	);
};

export default Home;
