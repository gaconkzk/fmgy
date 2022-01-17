<script setup lang="ts">
import { mangaMenus, mangaIconByName } from '@fmgy/constant'
import { ref, watch } from 'vue'
import { useStore, getState } from '@fmgy/stores'

const store = useStore()
const activated = getState<string>('activated', store)

const menus = ref(mangaMenus)
const iconsFunc = ref<(n: string) => void>(mangaIconByName)

watch(
  () => activated,
  (value) => {
    console.log('v', value)
    switch (value) {
      default:
        {
          menus.value = mangaMenus
          iconsFunc.value = mangaIconByName
        }
        break
    }
  }
)
</script>

<template>
  <ul class="flex flex-col items-start min-w-40 max-w-40">
    <li v-for="item in menus" class="flex flex-row items-center">
      <component :is="iconsFunc(item.name)" class="mx-2" />
      <span>{{ item.name }}</span>
    </li>
  </ul>
</template>
