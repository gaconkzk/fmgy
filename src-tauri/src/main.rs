#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
use tauri::Manager;

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
fn splashscreen_continue(window: tauri::Window) {
  // Close splashscreen
  if let Some(splashscreen) = window.get_window("splashscreen") {
    splashscreen.close().unwrap();
  }
  // Show main window
  window.get_window("main").unwrap().show().unwrap();
}

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let splash = app.get_window("splashscreen").unwrap();

      // we perform the initialization code on a new task so the app doesn't freeze
      tauri::async_runtime::spawn(async move {
        // TODO
        // 1 Splash
        // initialize your app here
        println!("Initializing...");
        //  - loading FMGY environments [x]
        //  - loading settings in our folder /fmgy.conf.yml
        let settings: settings::AppConfig = confy::load_path("./fmgy.conf.yml").unwrap();
        println!("Settings loaded: {:#?}", settings);

        //  - define anything that need initialize here?
        //    - db init/load
        //    - ...

        // 2 Main - fmgy 1
        //  - received settings
        //  - received
        std::thread::sleep(std::time::Duration::from_secs(5));
        println!("Done initializing.");
        // After it's done, send signal to the splashscreen so that the continue button should be enabled
        splash
          .emit(
            "init.done",
            Payload {
              message: "ok, now can process to continue".into(),
              settings: settings,
            },
          )
          .unwrap();
      });
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![splashscreen_continue])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
