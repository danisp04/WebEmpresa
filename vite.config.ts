import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Rutas relativas: funciona igual en local y en GitHub Pages (/WebEmpresa/)
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
