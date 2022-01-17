<script setup lang="ts">
import { useStore, getState } from '@fmgy/stores'
import { menus } from '@fmgy/constant'

const store = useStore()
const activated = getState<string>('activated', store)

const select = (name: string) => {
  store.commit('setActived', name)
}
</script>

<template>
  <div class="main-menu pl-8 pr-4 py-4">
    <nav class="menu">
      <ul class="flex flex-row justify-start uppercase">
        <li
          v-for="item in menus"
          v-bind:class="activated === item.name ? 'actived' : ''"
          @click="select(item.name)"
        >
          {{ item.name }}
        </li>
      </ul>
    </nav>
    <input placeholder="what do you need?" class="inset search" />
  </div>
</template>

<style lang="scss" scoped>
.main-menu {
  @apply flex flex-row justify-between;
  .menu {
    ul {
      li {
        @apply py-2 pr-4 font-sans text-lg font-bold;
        &.actived {
          @apply text-$f-selected underline underline-$f-selected;
        }
        &:hover:not(.actived) {
          @apply underline underline-blue-500 cursor-pointer;
        }
      }
    }
  }
}
.search {
  @apply rounded p-2;
}
</style>
