import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pages({
      dirs: [
        {dir: 'src/page/Landing', baseRoute: ''},
        {dir: 'src/page/Home', baseRoute: 'Home'},
        {dir: 'src/page/Dashboard', baseRoute: 'Dashboard'},
        {dir: 'src/page/Dashboard', baseRoute: 'DAdmin'},
        {dir: 'src/page/About', baseRoute: 'About'},
      ],
      extensions: ['tsx,ts'],
      exclude: ['**/components/**/*'],
    })
  ]
})
