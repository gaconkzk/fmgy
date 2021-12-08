<script lang="ts">
  import logo from '../../assets/svelte.png'
  import { emit, listen } from '@tauri-apps/api/event'
  import { getCurrent, WebviewWindow } from '@tauri-apps/api/window'
</script>

<main>
  <img src={logo} alt="Svelte Logo" class="mx-auto" />
  <h1>Splash screen</h1>
  <button on:click={() => emit('splash-continue')}>Continue</button>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
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
