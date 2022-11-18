import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, '/client/src/page/Landing/Landing.tsx'),
        home: resolve(__dirname, '/client/src/page/Home/Home.tsx'),
        about: resolve(__dirname, '/client/src/page/About/About.tsx'),
        dashboard: resolve(__dirname, '/client/src/page/Dashboard/Dashboard.tsx'),
        dashadmin: resolve(__dirname, '/client/src/page/Dashboard/DAdmin.tsx'),
      }
    }
  }
})
