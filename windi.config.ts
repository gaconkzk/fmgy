import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import { theme } from '@gaconkzk/flyui-svelte'

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  transformCSS: 'pre',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: theme,
  },
  plugins: [formsPlugin],
})
