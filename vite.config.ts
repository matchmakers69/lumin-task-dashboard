import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
	resolve: {
		alias: {
			"@assets": path.resolve(__dirname, "src/assets"),
			"@app": path.resolve(__dirname, "src/app"),
			"@mocks": path.resolve(__dirname, "src/mocks"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@features": path.resolve(__dirname, "src/features"),
			"@components": path.resolve(__dirname, "src/components"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@theme": path.resolve(__dirname, "src/theme"),
			"@types": path.resolve(__dirname, "src/types"),
		},
	},
	optimizeDeps: {
		include: [],
	},
	plugins: [react(), tsconfigPaths()],
	build: {
		assetsInlineLimit: 0,
		outDir: "dist",
		rollupOptions: {
			input: {
				app: "./index.html",
			},
		},
	},
});
