import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://sanjeevthakur.dev',
  server: {
    port: 4322,
  },
  preview: {
    port: 4322,
  },
  integrations: [tailwind()],
});
