// Tailwind CSS v3 via PostCSS (official Tailwind v3 setup).
// Vite (used by Astro) loads this file automatically, so no Astro integration is needed.
// Replaces the deprecated @astrojs/tailwind integration, which ran these same two plugins.
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
