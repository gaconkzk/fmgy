<script setup lang="ts">
import { emit } from '@tauri-apps/api/event'

const continueClicked = async (e) => {
  try {
    await emit('splash-continue')
  } catch (e) {
    console.warn('Seem you not run this on application - ')
  }
}
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
    <f-button @click="continueClicked">Continue</f-button>
  </main>
</template>
