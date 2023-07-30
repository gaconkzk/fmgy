import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { transformerDirectives } from 'unocss'

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
        main: path.resolve(dirname, 'src/pages/main', 'index.html'),
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
    unocss({
      transformers: [transformerDirectives()],
      theme: {
        colors: {
          '$t-primary': '#00a0e9',
          '$f-primary': '#223344',
        },
      },
    }),
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
