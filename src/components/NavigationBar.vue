<template>
  <div class="h-10 flex flex-row items-center ml-4">
    <ant-design-left-outlined />
    <ant-design-right-outlined />
    <ant-design-up-outlined />
    <span v-if="!!activated?.[page]" class="text-xl ml-2 font-bold">{{
      activated[page].name
    }}</span>
  </div>
</template>

<script setup lang="ts">
import { pageByPath } from '@fmgy/constant'
import { Menu } from '@fmgy/constant/menu'
import { getState, useStore } from '@fmgy/stores'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const store = useStore()
const activated = getState<Menu>('activated', store)

const route = useRoute()
const page = computed(() => pageByPath(route.path))
</script>

<style lang="scss" scoped>
div {
  svg {
    @apply w-10 h-10 p-2;
  }
}
</style>
