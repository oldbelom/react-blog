import path from "path";
import { buildWebpackConfig } from "./config/build/BuildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		output: path.resolve(__dirname, "build"),
		html: path.resolve(__dirname, "public", "index.html"),
	};

	const PORT = env.port || 3000;

	const mode = env.mode || "development";
	const isDev = mode === "development";

	return buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
	});
};
