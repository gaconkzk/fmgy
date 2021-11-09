<div class="{col? 'col' : ''} {inClass}">
  <slot/>
</div>

<script lang="ts">
  export let col:boolean = false
  export let flex: string | number = '1'
  let inClass = ''
  export { inClass as class }

  $: classes = calculateClass(col, flex)
</script>

<style lang="scss">
  div {
    @apply flex;
  }
  div.col {
    @apply flex-col;
  }
</style>