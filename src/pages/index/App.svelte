<script lang="ts">
  import { FButton, FIcon, scrollable } from '@gaconkzk/flyui-svelte'
</script>

<div data-tauri-drag-region class="titlebar">
  <div class="titlebar-button" id="titlebar-minimize">
    <img
      src="https://api.iconify.design/mdi:window-minimize.svg"
      alt="minimize"
    />
  </div>
  <div class="titlebar-button" id="titlebar-maximize">
    <img
      src="https://api.iconify.design/mdi:window-maximize.svg"
      alt="maximize"
    />
  </div>
  <div class="titlebar-button" id="titlebar-close">
    <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
  </div>
</div>

<div
  v-scrollable="scrollable"
  class="h-full my-30px bg-$f-primary rounded-b-2xl"
>
  <div>
    <section>
      <h5>Theme</h5>
      <f-theme-color />
    </section>
    <section>
      <h5>Buttons</h5>
      <FButton>Primary</FButton>
    </section>
    <section>
      <h5>Icons</h5>
      <div class="flex flex-row justify-center gap-4">
        <FIcon name="fly_logo" width="40px" height="40px" original />
        <FIcon name="s_fly" width="40px" height="40px" original />
        <FIcon
          name="fly_filled"
          width="40px"
          height="40px"
          class="!fill-blue-500"
        />
      </div>
    </section>
    <section>
      <h5>Scrollable</h5>
      <div class="flex flex-row justify-center">
        <div class="flat w-80 h-40" use:scrollable>
          <div class="h-600px p-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur? But I must explain to you how all this mistaken idea of
            denouncing pleasure and praising pain was born and I will give you a
            complete account of the system, and expound the actual teachings of
            the great explorer of the truth, the master-builder of human
            happiness. No one rejects, dislikes, or avoids pleasure itself,
            because it is pleasure, but because those who do not know how to
            pursue pleasure rationally encounter consequences that are extremely
            painful. Nor again is there anyone who loves or pursues or desires
            to obtain pain of itself, because it is pain, but because
            occasionally circumstances occur in which toil and pain can procure
            him some great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure?
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<style lang="scss">
  .titlebar {
    height: 30px;
    background: var(--f-primary);
    user-select: none;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 0;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }

  .titlebar-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
  }

  .titlebar-button:hover {
    background: #5bbec3;
  }
</style>
