<template>
  <ul class="flex flex-col items-start min-w-40 max-w-40">
    <li
      v-for="item in items"
      :key="item.name"
      :class="`item ${
        activated?.[pageByPath(item.path)]?.path === item.path ? 'actived' : ''
      }`"
    >
      <div class="flex flex-row items-center">
        <div class="mx-2 w-4 h-4"><component :is="iconsFunc(item.name)" /></div>
        <span>{{ item.name }}</span>
      </div>
      <div v-if="item.children">
        <tree :items="item.children" :iconsFunc="iconsFunc" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Menu } from '@fmgy/constant/menu'
import { defineComponent, PropType } from 'vue'
import { useStore, getState } from '@fmgy/stores'
import { pageByPath } from '@fmgy/constant'

export default defineComponent({
  name: 'tree',
  props: {
    items: {
      type: Array as PropType<Menu[]>,
      required: true,
    },
    iconsFunc: {
      type: Function as PropType<(n: string) => void>,
      required: true,
    },
  },
  setup() {
    const store = useStore()
    const activated = getState<Menu>('activated', store)

    return {
      activated,
      pageByPath,
    }
  },
})
</script>

<style lang="scss" scoped>
.item {
  @apply h-10 flex flex-col;
  .actived {
    @apply text-$f-selected underline underline-$f-selected;
  }
}
</style>
