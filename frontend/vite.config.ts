import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
		tailwindcss(),
		tsconfigPaths(),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@lib/*": path.resolve(__dirname, "./src/lib/*"),
			"@api/*": path.resolve(__dirname, "./src/api/*"),
			"@store/*": path.resolve(__dirname, "./src/store/*"),
			"@mocks/*": path.resolve(__dirname, "./src/mocks/*"),
			"@assets/*": path.resolve(__dirname, "./src/assets/*"),
			"@components/*": path.resolve(__dirname, "./src/components/*"),
		},
	},
});
