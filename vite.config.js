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
  resolve: {
    alias: {
      '@fmgy': resolve(__dirname, './src'),
    },
  },
  plugins: [windicss(), svelte(), mpa({ open: false })],
})
