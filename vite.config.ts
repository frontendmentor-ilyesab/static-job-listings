import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/static-job-listings",
  plugins: [react(), svgr()],
})
