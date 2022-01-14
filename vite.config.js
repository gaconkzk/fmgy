import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import windicss from 'vite-plugin-windicss'

import mpaModule from 'vite-plugin-mpa'
const mpa = mpaModule.default

import path from 'path'
const dirname = path.resolve()

import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

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
  plugins: [
    windicss(),
    vue(),
    Components({
      dts: true,
      resolvers: [
        IconsResolver({
          prefix: '',
        }),
      ],
    }),
    mpa({ open: false }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
  ],
  optimizeDeps: {
    include: ['color'],
  },
})
