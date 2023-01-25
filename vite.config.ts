import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: import.meta.env.GITHUB_PAGES ? "react-github-actions" : "./",
  plugins: [react()],
})
