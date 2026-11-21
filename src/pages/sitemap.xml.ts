import type { APIRoute } from 'astro';
import { siteConfig } from '../data/seo-config';

export const GET: APIRoute = async () => {
  const pages = [
    { url: '', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/case-studies', changefreq: 'weekly', priority: 0.9 },
    { url: '/case-studies/construction', changefreq: 'monthly', priority: 0.9 },
    { url: '/case-studies/electrical', changefreq: 'monthly', priority: 0.9 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 }
  ];

  const currentDate = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${siteConfig.siteUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
