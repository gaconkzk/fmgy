<script lang="ts">
  import { appWindow } from '@tauri-apps/api/window'

  let maximized = false
</script>

<div data-tauri-drag-region class="titlebar" class:maximized>
  <div
    class="titlebar-button"
    id="titlebar-minimize"
    on:click={() => appWindow.minimize()}
  >
    <img
      src="https://api.iconify.design/mdi:window-minimize.svg"
      alt="minimize"
    />
  </div>
  <div
    class="titlebar-button"
    id="titlebar-maximize"
    on:click={async () => {
      await appWindow.toggleMaximize()
      maximized = await appWindow.isMaximized()
    }}
  >
    <img
      src="https://api.iconify.design/mdi:window-maximize.svg"
      alt="maximize"
    />
  </div>
  <div
    class="titlebar-button"
    id="titlebar-close"
    on:click={() => appWindow.close()}
  >
    <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
  </div>
</div>

<style lang="scss">
  .titlebar {
    @apply rounded-t-2xl;
    height: 30px;
    background: var(--f-primary);
    user-select: none;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    &.maximized {
      @apply rounded-t-none;
      #titlebar-close:hover {
        @apply rounded-tr-none;
      }
    }
    #titlebar-close:hover {
      @apply rounded-tr-2xl;
    }
  }

  .titlebar-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
  }

  .titlebar-button:hover {
    @apply bg-$f-selected;
  }
</style>
