import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
	const { mode, paths, isDev } = options;

	return {
		mode,
		entry: {
			main: paths.entry,
		},
		output: {
			filename: "[name].[contenthash].js",
			path: paths.output,
			clean: true,
		},
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(),
		plugins: buildPlugins(options),
		devServer: isDev ? buildDevServer(options) : undefined,
		devtool: isDev ? "inline-source-map" : undefined,
	};
};
