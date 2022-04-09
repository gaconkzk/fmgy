export const isApp = () =>
  window.__TAURI_IPC__ &&
  {}.toString.call(window.__TAURI_IPC__) === '[object Function]'
