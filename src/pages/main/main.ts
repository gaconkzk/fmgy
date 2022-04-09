// import 'virtual:windi.css'
import 'uno.css'

import { createApp } from 'vue'

import App from './App.vue'

import Flyui from '@gaconkzk/flyui-vue3'
import '@gaconkzk/flyui-vue3/css'

import '@fmgy/styles/index.scss'
import { store, key } from '@fmgy/stores/application'
import { router } from '@fmgy/pages/main/routes'

const app = createApp(App)
app.use(Flyui)
app.use(store, key)
app.use(router)
app.mount('#app')

export default app
