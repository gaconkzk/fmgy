import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import windicss from 'vite-plugin-windicss'

import mpaModule from 'vite-plugin-mpa'
const mpa = mpaModule.default

import path from 'path'
const dirname = path.resolve()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3330,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(dirname, 'src/pages/index', 'index.html'),
        splash: path.resolve(dirname, 'src/pages/splash', 'index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@fmgy': path.resolve(dirname, './src'),
    },
  },
  plugins: [windicss(), svelte(), mpa({ open: false })],
})
