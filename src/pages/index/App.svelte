<script lang="ts">
  import Button from '@fmgy/components/atoms/Button.svelte'
  import FlexContainer from '@fmgy/components/FlexContainer.svelte'
</script>

<style lang="scss">
  :global(#app) {
    @apply bg-gray-700 text-light-200;
  }
</style>

<navbar>
</navbar>
<FlexContainer col class="p-2">
  <h1>Components</h1>
  <FlexContainer col>
    <h3>Buttons</h3>
    <FlexContainer class="pt-2 gap-4">
      <Button outline>Outlined</Button>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button warning>Warning</Button>
      <Button danger>Danger</Button>
    </FlexContainer>
    <h3>Input</h3>
    <FlexContainer class="pt-2 gap-4">
      <input type="text" class="bg-dark-500 text-light-500 rounded focus:(outline-none ring-transparent border-current)"/>
    </FlexContainer>
  </FlexContainer>
</FlexContainer>
