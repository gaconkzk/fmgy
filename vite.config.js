import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import windicss from 'vite-plugin-windicss'

import mpaModule from 'vite-plugin-mpa'
const mpa = mpaModule.default

import { resolve } from 'path'

const __dirname = resolve()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3330,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/index', 'index.html'),
        splash: resolve(__dirname, 'src/pages/splash', 'index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@fmgy': resolve(__dirname, './src'),
    },
  },
  plugins: [windicss(), svelte(), mpa({ open: false })],
})
