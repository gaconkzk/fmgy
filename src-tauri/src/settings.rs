use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct AppConfig {
  manga: MangaConfig,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct MangaConfig {
  path: String,
}

/// `AppConfig` implements `Default`
impl ::std::default::Default for AppConfig {
  fn default() -> Self {
    Self {
      manga: MangaConfig {
        path: "./data/manga".into(),
      },
    }
  }
}
