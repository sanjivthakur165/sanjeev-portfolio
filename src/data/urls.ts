import { siteConfig } from './seo-config';

/**
 * URL helpers. The site uses `trailingSlash: 'always'` (see astro.config.mjs), so every
 * page path ends with "/". File paths (anything with an extension, e.g. /sitemap.xml,
 * /llms.txt, /images/og-image.png) are left untouched.
 */

/** Normalize a site-relative page path: "/about" -> "/about/", "/" -> "/", keeps #hash and ?query. */
export function pagePath(path: string): string {
  const match = path.match(/^([^?#]*)(.*)$/);
  let base = match?.[1] || '/';
  const rest = match?.[2] ?? '';
  if (!base.startsWith('/')) base = `/${base}`;
  const lastSegment = base.split('/').pop() ?? '';
  const isFile = lastSegment.includes('.');
  if (!isFile && !base.endsWith('/')) base = `${base}/`;
  return base + rest;
}

/** Absolute production URL for a page or file path. */
export function pageUrl(path: string): string {
  return `${siteConfig.siteUrl}${pagePath(path)}`;
}
