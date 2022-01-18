<script setup lang="ts">
import {
  mangaMenus,
  mangaIconByName,
  videoIconByName,
  videoMenus,
  pageByPath,
} from '@fmgy/constant'
import { ref, watch } from 'vue'
import { useStore, getState } from '@fmgy/stores'
import { Menu } from '@fmgy/constant/menu'
import { useRoute } from 'vue-router'

const store = useStore()
const activated = getState<Menu>('activated', store)

const route = useRoute()

const menus = ref(mangaMenus)
const iconsFunc = ref<(n: string) => void>(mangaIconByName)

watch(
  () => route.path,
  (path) => {
    // get second part from path
    const currentPage = pageByPath(path)
    switch (currentPage) {
      case '/main/video':
        {
          menus.value = videoMenus
          iconsFunc.value = videoIconByName
        }
        break
      case '/main/manga':
        {
          menus.value = mangaMenus
          iconsFunc.value = mangaIconByName
        }
        break
      default:
        menus.value = []
        iconsFunc.value = () => {}
    }
  }
)

const select = (item: Menu) => {
  store.commit('setActived', item)
}
</script>

<template>
  <ul class="flex flex-col items-start min-w-40 max-w-40">
    <li
      v-for="item in menus"
      :class="`item ${
        activated?.[pageByPath(item.path)]?.path === item.path ? 'actived' : ''
      }`"
      hover="underline underline-blue-500"
      @click="() => select(item)"
    >
      <component :is="iconsFunc(item.name)" class="mx-2" />
      <span>{{ item.name }}</span>
    </li>
  </ul>
</template>

<style lang="scss">
.item {
  @apply flex flex-row items-center cursor-pointer;
  &.actived {
    @apply text-$f-selected underline underline-$f-selected;
  }
}
</style>
