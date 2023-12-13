import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

import { useTheme } from "./theme";
import "./styles/index.scss";

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Suspense fallback={"Loading..."}>
				<Routes>
					<Route path={"/about"} element={<AboutPageAsync />} />
					<Route path={"/"} element={<MainPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};
