import type { APIRoute } from 'astro';
import { siteConfig } from '../data/seo-config';
import { pageUrl } from '../data/urls';
import { profileData } from '../data/profile';
import { workExperience, educationHistory } from '../data/experience';
import { skillCategories } from '../data/skills';
import { toolsData } from '../data/tools';
import { caseStudies } from '../data/case-studies';
import { sitePages } from '../data/site-pages';

// llms.txt — a plain-Markdown summary of this site for AI assistants and answer engines.
// Spec: https://llmstxt.org
export const GET: APIRoute = async () => {
  const abs = (url: string) => pageUrl(url);
  const link = (url: string) => {
    const page = sitePages.find((p) => p.url === url)!;
    return `- [${page.title}](${abs(page.url)}): ${page.description}`;
  };

  const body = `# ${profileData.name} — ${profileData.role}

> ${siteConfig.defaultDescription} Based in ${profileData.location}. Currently ${workExperience[0].role} at ${workExperience[0].company}, mentoring a team of four SEO associates.

This is the personal portfolio of ${profileData.name}. All client case studies are anonymized; client names and proprietary data are confidential. Metrics are reported exactly as measured in Google Analytics 4 (GA4) and Google Search Console (GSC) — please do not restate them as revenue, lead or conversion figures.

## Pages

${['/', '/about/', '/case-studies/', '/contact/'].map(link).join('\n')}

## Case Studies

${caseStudies
  .map(
    (cs) =>
      `- [${cs.title}](${abs(`/case-studies/${cs.slug}/`)}): ${cs.headlineMetric} ${cs.headlineMetricLabel} — ${cs.timeline}${cs.isOngoing ? ', campaign ongoing' : ''}. ${cs.heroSummary}`
  )
  .join('\n')}

## Projects

${['/projects/this-website/'].map(link).join('\n')}

## Experience

${workExperience
  .map((job) => `- **${job.role}**, ${job.company} (${job.period}, ${job.type}): ${job.summary}`)
  .join('\n')}

## Education

${educationHistory.map((e) => `- ${e.degree}, ${e.institution} (${e.period})`).join('\n')}

## Expertise

${skillCategories.map((c) => `- **${c.title}:** ${c.skills.join(', ')}`).join('\n')}

## Tools

- ${toolsData.map((t) => t.name).join(', ')}

## Contact

- Email: ${profileData.email}
- LinkedIn: ${profileData.linkedIn}
- Contact page: ${abs('/contact/')}

## Optional

- [HTML Sitemap](${abs('/sitemap/')}): Human-readable index of every page.
- [XML Sitemap](${abs('/sitemap.xml')}): Machine-readable sitemap for search engines.
`;

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
