#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
use tauri::{CustomMenuItem, Manager, Menu, MenuItem, Submenu};

// the payload type must implement `Serialize`.
// for global events, it also must implement `Clone`.
#[derive(Clone, serde::Serialize)]
struct Payload {
  message: String,
}

fn main() {
  tauri::Builder::default()
    // .menu(menu)
    .setup(|app| {
      let splash = app.get_window("splashscreen").unwrap();
      let main_window = app.get_window("main").unwrap();

      app.listen_global("splash-continue", move |_event| {
        splash.close().unwrap();
        main_window.show().unwrap();
      });

      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
