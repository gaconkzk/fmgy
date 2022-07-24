// reset.css by Eric Meyer https://meyerweb.com/eric/tools/css/reset/index.html
import '@unocss/reset/eric-meyer.css'

import 'uno.css'
import { createApp } from 'vue'

import App from './App.vue'
import '@fmgy/styles/index.scss'

import { store, key } from '@fmgy/stores/application'
import { router } from '@fmgy/pages/main/routes'

const app = createApp(App)

app.use(store, key)
app.use(router)

app.mount('#app')

export default app
