import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

const Header = () => {
	return (
		<div className="w-full max-w-[80rem] h-[8rem] bg-gradient-to-r from-black to-teal-950 flex flex-col justify-center gap-2  items-center mx-auto rounded-full px-6 sm:flex-row sm:justify-between sm:gap-0 sm:h-[5rem] ">
			<Logo />
			<Search />
			<NumResults />
		</div>
	);
};

export default Header;
