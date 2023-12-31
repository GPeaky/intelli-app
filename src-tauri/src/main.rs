#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// use tauri::window::Color;
use tauri::Manager;
#[cfg(target_os = "windows")]
use window_shadows::set_shadow;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_updater::Builder::new().build())
        .plugin(tauri_plugin_shell::init())
        .setup(|app| {
            #[cfg(target_os = "windows")]
            {
                let main_window = app.get_window("main").unwrap();
                set_shadow(&main_window, true).expect("Failed to set shadow");
            }
            println!("Hello from setup!");
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
