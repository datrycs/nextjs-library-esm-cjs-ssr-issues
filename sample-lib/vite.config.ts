import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"] })],
  build: {
    copyPublicDir: false,
    sourcemap: true,
    minify: false,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      formats: ["umd", "es"],
      name: "@datrycs/plasmic-commerce-components",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "@commercelayer/react-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
