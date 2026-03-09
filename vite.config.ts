import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    preact()
  ],
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
      '@': path.resolve(__dirname, './src'),
    },
  },
})
