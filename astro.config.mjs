import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://the-quetta-tea-20.vercel.app',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  build: {
    // Inline the (tiny) stylesheets into the HTML to remove render-blocking
    // CSS requests. Single-page site, so there's no cross-page cache tradeoff.
    inlineStylesheets: 'always',
  },
  server: {
    port: 3000,
    host: true
  }
});
