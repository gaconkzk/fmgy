<script setup lang="ts">
import TitleBar from '@fmgy/components/TitleBar.vue'
import MainMenu from '@fmgy/components/MainMenu.vue'
import NavigationBar from '@fmgy/components/NavigationBar.vue'
</script>
<template>
  <title-bar selected="Manaa" />
  <div class="h-full mt-44px pb-4 bg-$f-primary rounded-b-2xl">
    <main-menu />
    <navigation-bar />
    <div class="flex p-0 m-0 ml-4 flex-row items-start gap-col-2">
      <side-bar />
      <router-view />
    </div>
  </div>
</template>
