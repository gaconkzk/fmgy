import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import windiModule from 'vite-plugin-windicss'
const windicss = windiModule.default

import mpaModule from 'vite-plugin-mpa'
const mpa = mpaModule.default

import { resolve } from 'path'

const __dirname = resolve()
console.log(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3330,
  },
  plugins: [
    windicss(),
    svelte(),
    mpa({ open: false }),
  ]
})
