import { defineConfig } from 'astro/config';

// https://astro.build/config
// Tailwind CSS is applied through PostCSS (see postcss.config.mjs) and src/styles/global.css.
export default defineConfig({
  site: 'https://sanjeev.site',
  // Every page URL ends with "/" (pages build to /path/index.html). Canonicals, sitemap,
  // schema and llms.txt use the same form via src/data/urls.ts.
  trailingSlash: 'always',
  server: {
    port: 4322,
  },
  preview: {
    port: 4322,
  },
});
