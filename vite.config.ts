import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "unsafe-none", // Modify or remove based on your needs
      "Cross-Origin-Embedder-Policy": "unsafe-none",
    },
  },
});
