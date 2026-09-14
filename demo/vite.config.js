import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Tarea_Mini_ERP/',
  server: { port: 5173, open: true
  },
  build: {outDir: 'dist',sourcemap: true}
})