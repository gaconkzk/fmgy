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
  // // here `"quit".to_string()` defines the menu item id, and the second parameter is the menu item label.
  // let quit = CustomMenuItem::new("quit".to_string(), "Quit");
  // let close = CustomMenuItem::new("close".to_string(), "Close");
  // let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
  // let menu = Menu::new()
  //   .add_native_item(MenuItem::Copy)
  //   .add_item(CustomMenuItem::new("hide", "Hide"))
  //   .add_submenu(submenu);
  tauri::Builder::default()
    // .menu(menu)
    .setup(|app| {
      let splash = app.get_window("splashscreen").unwrap();
      let main_window = app.get_window("main").unwrap();

      let continueClicked = app.listen_global("splash-continue", move |event| {
        splash.close().unwrap();
        main_window.show();
      });

      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
