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
  <main class="inset h-full bg-$f-primary rounded-3xl">
    <f-icon name="fly_logo" width="120px" height="120px" original />
    <h1>Splash screen</h1>
    <f-button @click="continueClicked">Continue</f-button>
  </main>
</template>

<style>
:root {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

main {
  text-align: center;
  padding: 1em;
  margin: 0 auto;
}

img {
  height: 16rem;
  width: 16rem;
}

h1 {
  color: #ff3e00;
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 100;
  line-height: 1.1;
  margin: 2rem auto;
  max-width: 14rem;
}

@media (min-width: 480px) {
  h1 {
    max-width: none;
  }
}
</style>
