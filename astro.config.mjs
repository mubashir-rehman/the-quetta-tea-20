import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://the-quetta-tea-20.vercel.app',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  server: {
    port: 3000,
    host: true
  }
});
