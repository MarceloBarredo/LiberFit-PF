import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pages({
      dirs: [
        {dir: 'src/page', baseRoute: ''},
        {dir: 'src/page/Landing', baseRoute: ''},
        {dir: 'src/page/Home', baseRoute: ''},
        {dir: 'src/page/Dashboard', baseRoute: ''},
        {dir: 'src/page/About', baseRoute: ''},
      ],
      extensions: ['tsx,ts'],
      exclude: ['**/components/**/*'],
    })
  ]
})
