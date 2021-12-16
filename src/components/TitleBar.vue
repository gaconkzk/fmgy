<template>
  <div
    data-tauri-drag-region
    :class="`titlebar ${maximized ? 'maximized' : ''}`"
  >
    <div
      class="titlebar-button"
      id="titlebar-minimize"
      @click="() => appWindow.minimize()"
    >
      <img
        src="https://api.iconify.design/mdi:window-minimize.svg"
        alt="minimize"
      />
    </div>
    <div class="titlebar-button" id="titlebar-maximize" @click="toggleMaximize">
      <img
        src="https://api.iconify.design/mdi:window-maximize.svg"
        alt="maximize"
      />
    </div>
    <div
      class="titlebar-button"
      id="titlebar-close"
      @click="() => appWindow.close()"
    >
      <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window'
import { ref } from 'vue'
let maximized = ref(false)
const toggleMaximize = async () => {
  await appWindow.toggleMaximize()
  maximized.value = await appWindow.isMaximized()
}
</script>

<style lang="scss">
.titlebar {
  @apply rounded-t-2xl;
  height: 30px;
  background: var(--f-primary);
  user-select: none;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  &.maximized {
    @apply rounded-t-none;
    #titlebar-close:hover {
      @apply rounded-tr-none;
    }
  }
  #titlebar-close:hover {
    @apply rounded-tr-2xl;
  }
}
.titlebar-button {
  @apply w-12;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.titlebar-button:hover {
  @apply bg-$f-selected;
}
</style>
