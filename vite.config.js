import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change 'Betelwise_WebSIte' if your repo name differs
export default defineConfig({
  plugins: [react()],
  base: "/",
});
