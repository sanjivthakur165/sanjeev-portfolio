import type { APIRoute } from 'astro';
import { siteConfig } from '../data/seo-config';
import { sitePages } from '../data/site-pages';

export const GET: APIRoute = async () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const loc = (url: string) => `${siteConfig.siteUrl}${url === '/' ? '/' : url}`;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitePages
  .map(
    (page) => `  <url>
    <loc>${loc(page.url)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
