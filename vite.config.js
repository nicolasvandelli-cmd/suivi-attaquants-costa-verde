import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // indique à Vite que le projet démarre à la racine
  build: {
    outDir: 'dist',
  }
})
