import { Link } from "react-router-dom";

const MainPage = () => {
	return (
		<>
			<div>MainPage</div>
			<Link to={"/about"}>AboutPage</Link>
		</>
	);
};

export default MainPage;
