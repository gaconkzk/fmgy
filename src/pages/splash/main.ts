// import 'virtual:windi.css'
import 'uno.css'

import { createApp } from 'vue'

import App from './App.vue'

import Flyui from '@gaconkzk/flyui-vue3'
import '@gaconkzk/flyui-vue3/css'

import '@fmgy/styles/index.scss'

const app = createApp(App)
app.use(Flyui)
app.mount('#app')

export default app
