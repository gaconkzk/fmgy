#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
use tauri::Manager;
fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let splash = app.get_window("splashscreen").unwrap();
      let main_window = app.get_window("main").unwrap();

      tauri::async_runtime::spawn(async move {
        // initialize here instead of sleep
        println!("Initializing...");
        std::thread::sleep(std::time::Duration::from_secs(2));
        println!("Done initializing.");

        // After loading close splash and display main window
        splash.close().unwrap();
        main_window.show()
      });

      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
