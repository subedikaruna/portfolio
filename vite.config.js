import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Update the base path to match your repository name
export default defineConfig({
  plugins: [react()],
  base: "/portfolio",
});
