import { defineConfig } from "vite";
// import { createHtmlPlugin } from "vite-html-plugin";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "src",
  server: {
    port: 3000,
  },
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
