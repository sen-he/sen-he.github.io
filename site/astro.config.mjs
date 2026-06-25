import { defineConfig } from "astro/config";

// Bespoke rebuild of senhe.ai. Static output for GitHub Pages.
export default defineConfig({
  site: "https://senhe.ai",
  prefetch: { prefetchAll: true },
  build: { inlineStylesheets: "auto" },
});
