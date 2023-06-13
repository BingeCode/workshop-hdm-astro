import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import image from "@astrojs/image";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://your.domain.here",
  integrations: [mdx(), sitemap(), tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp",
    cacheDir: "./.cache/image",
    logLevel: "debug"
  }), react()]
});