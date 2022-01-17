<script setup lang="ts">
import { listen } from '@tauri-apps/api/event'
import { invoke } from '@tauri-apps/api/tauri'
import { ref, onMounted, onUnmounted } from 'vue'

const continueClicked = async () => {
  try {
    console.log('click continue')
    await invoke('splashscreen_continue')
  } catch (e) {
    console.warn('Seem you not run this on application - ')
  }
}

const splashReady = async () => {
  try {
    console.log('splash mounted - ready initializing')
    await invoke('splashscreen_ready')
  } catch (e) {
    console.warn('Seem you not run this on application - ', e)
  }
}

const loading = ref(true)
const settings = ref({})
const unlisten = ref(null)

interface FmgyInitEvent {
  payload: FmgyInitMessage
}

type FmgyInitMessage = {
  message: string
  settings: FmgySettings
}

type FmgySettings = {
  manga: MangaSettings
}

type MangaSettings = {
  path: string
}

onMounted(() => {
  loading.value = true
  const fmgySettingsStr = window.localStorage.getItem('fmgy_settings')
  const fmgySettings = JSON.parse(fmgySettingsStr) as FmgySettings

  listen('init.done', (e: FmgyInitEvent) => {
    settings.value = Object.assign({}, e.payload.settings, fmgySettings)
    loading.value = false
  }).then((ulf) => (unlisten.value = ulf))

  splashReady()
})

onUnmounted(() => {
  unlisten.value?.()
})
</script>

<template>
  <main
    class="flat h-full bg-$f-primary rounded-3xl m-4 pb-4 flex-col justify-center items-center"
  >
    <f-icon
      name="fly_logo"
      class="-ml-8"
      width="120px"
      height="120px"
      original
    />
    <h1>FMGY</h1>
    <f-button @click="() => !loading && continueClicked()">{{
      loading ? 'loading...' : 'Continue'
    }}</f-button>
  </main>
</template>
