/// <reference types="vite/client" />
/// <reference types="vite/client" />
/// <reference types="vue" />

declare module '@gaconkzk/flyui-vue3'

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
