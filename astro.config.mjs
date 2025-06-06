// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";
import path from 'path';

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@styles': path.resolve('./src/styles'),
      },
    },
  },
});

// https://astro.build/config
export default defineConfig({
  site: "https://rattlesnakesystems.com/",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
