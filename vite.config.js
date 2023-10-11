import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr'; 
import toast from 'react-hot-toast'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), toast()],
  base: "https://cristianbazan-dev.github.io/CB/"
});
