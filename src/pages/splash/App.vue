<script setup lang="ts">
import { emit, listen } from '@tauri-apps/api/event'
import { invoke } from '@tauri-apps/api/tauri'
import { ref, onBeforeMount, onUnmounted } from 'vue'

const continueClicked = async () => {
  try {
    console.log('click continue')
    await invoke('splashscreen_continue')
  } catch (e) {
    console.warn('Seem you not run this on application - ')
  }
}

const loading = ref(true)
const unlisten = ref(null)

onBeforeMount(async () => {
  unlisten.value = await listen('init.done', (e) => {
    loading.value = false
  })
})

onUnmounted(() => {
  unlisten.value()
})
</script>

<template>
  <main
    class="
      flat
      h-full
      bg-$f-primary
      rounded-3xl
      m-4
      pb-4
      flex-col
      justify-center
      items-center
    "
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
