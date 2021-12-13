<script lang="ts">
  import logo from '../../assets/svelte.png'
  import { emit } from '@tauri-apps/api/event'
  import FButton from '@gaconkzk/flyui-svelte/components/FButton.svelte'

  const continueClicked = (e) => {
    console.log('clicked', e)
    emit('splash-continue')
  }
</script>

<main class="inset h-full">
  <img src={logo} alt="Svelte Logo" class="mx-auto" />
  <h1>Splash screen</h1>
  <FButton on:click={continueClicked}>Continue</FButton>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    @apply bg-$f-primary rounded-3xl;
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
