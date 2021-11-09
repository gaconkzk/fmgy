<script lang="ts">
  export let primary: boolean = false
  export let outline: boolean = false
  export let secondary: boolean = false
  export let warning: boolean = false
  export let danger: boolean = false
</script>
<style lang="scss">
  button {
    @apply rounded p-2 min-w-100px outline-none;
    
    &.primary {
      @apply bg-dark-500 text-light-500;
    }
    &.secondary {
      @apply bg-gray-500 text-light-200;
    }
    &.warning {
      @apply bg-orange-500 text-light-200;
      &:hover {
        @apply bg-orange-400 text-light-100;
      }

      &:active {
        @apply bg-orange-800 text-light-500;
      }
    }
    &.danger {
      @apply bg-red-500 text-light-200;
      &:hover {
        @apply bg-red-400 text-light-100;
      }

      &:active {
        @apply bg-red-800 text-light-500;
      }
    }
    &.outline {
      @apply bg-light-800 text-dark-800 border-dark-500 border-1;
    }

    &:hover {
      @apply bg-dark-100 text-light-100;
    }

    &:active {
      @apply bg-gray-500 text-light-500;
    }
  }
</style>

<button 
  class:outline={outline}
  class:primary={primary}
  class:secondary={secondary}
  class:danger={danger}
  class:warning={warning}
  {...$$restProps}>
  <slot/>
</button>
