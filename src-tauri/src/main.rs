#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
use tauri::{Manager, Window};

use confy;

mod settings;

// the payload type must implement `Serialize`.
// for global events, it also must implement `Clone`.
#[derive(Clone, serde::Serialize)]
struct Payload {
  message: String,
  settings: settings::AppConfig,
}

#[tauri::command]
fn splashscreen_continue(window: Window) {
  // Close splashscreen
  if let Some(splashscreen) = window.get_window("splashscreen") {
    splashscreen.close().unwrap();
  }
  // Show main window
  window.get_window("main").unwrap().show().unwrap();
}

#[tauri::command]
fn splashscreen_ready(window: Window) {
  // TODO
  // 1 Splash
  // initialize your app here
  println!("Initializing...");
  //  - loading FMGY environments [x]
  //  - loading settings in our folder /fmgy.conf.yml
  let settings: settings::AppConfig = confy::load_path("./fmgy.conf.yml").unwrap();
  println!("Settings loaded: {:#?}", settings);

  // After it's done, send signal to the splashscreen so that the continue button should be enabled
  let splash = window.get_window("splashscreen").unwrap();
  splash
    .emit(
      "init.done",
      Payload {
        message: "ok, now can process to continue".into(),
        settings: settings,
      },
    )
    .unwrap();
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      splashscreen_continue,
      splashscreen_ready
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
