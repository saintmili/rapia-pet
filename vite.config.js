import { defineConfig } from "vite";
// import { createHtmlPlugin } from "vite-html-plugin";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
  },
  plugins: [
    // createHtmlPlugin({
    //   inject: {},
    // }),
    react({
      include: "**/*.{jsx,tsx}",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
