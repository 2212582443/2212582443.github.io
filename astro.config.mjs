import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://2212582443.github.io",
  vite: {
    cacheDir: ".vite-cache",
  },
});
