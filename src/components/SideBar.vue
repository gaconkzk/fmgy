<script setup lang="ts">
import {
  mangaMenus,
  mangaIconByName,
  videoIconByName,
  videoMenus,
  pageByPath,
} from '@fmgy/constant'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore, getState } from '@fmgy/stores'
import { Menu } from '@fmgy/constant/menu'
import Tree from './Tree/index.vue'

const store = useStore()
const activated = getState<Menu>('activated', store)

const route = useRoute()

const menus = ref(mangaMenus)
const iconsFunc = ref<(n: string) => void>(mangaIconByName)

watch(
  () => activated.value[pageByPath(route.path)],
  (value) => {
    console.log('active', value)
  }
)

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
  <tree :items="menus" :icons-func="iconsFunc" />
</template>

<style lang="scss">
.item {
  @apply flex flex-row items-center cursor-pointer;
  &.actived {
    @apply text-$f-selected underline underline-$f-selected;
  }
}
</style>
