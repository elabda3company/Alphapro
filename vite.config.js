import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets',
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        assetFileNames: 'images/[name]-[hash][extname]',
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: 'scripts/[name]-[hash].js',
      },
    },
  },
})
