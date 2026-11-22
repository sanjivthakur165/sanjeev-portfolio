import { caseStudies } from './case-studies';

export interface SitePage {
  url: string;
  title: string;
  description: string;
  section: 'Main' | 'Case Studies' | 'Projects' | 'Utility';
  changefreq: 'weekly' | 'monthly' | 'yearly';
  priority: number;
}

/** Single source of truth for the XML sitemap, the HTML sitemap and /llms.txt. */
export const sitePages: SitePage[] = [
  { url: '/', title: 'Home', description: 'Overview of my SEO expertise, featured case studies, experience and tools.', section: 'Main', changefreq: 'weekly', priority: 1.0 },
  { url: '/about/', title: 'About & Career', description: 'Professional background, SEO approach, experience timeline and education.', section: 'Main', changefreq: 'monthly', priority: 0.8 },
  { url: '/case-studies/', title: 'Case Studies', description: 'All anonymized client SEO case studies with documented results.', section: 'Main', changefreq: 'weekly', priority: 0.9 },
  ...caseStudies.map((cs) => ({
    url: `/case-studies/${cs.slug}/`,
    title: cs.title,
    description: cs.heroSummary,
    section: 'Case Studies' as const,
    changefreq: 'monthly' as const,
    priority: 0.9,
  })),
  { url: '/projects/', title: 'Projects', description: 'Personal SEO projects built and measured in public.', section: 'Projects', changefreq: 'monthly', priority: 0.6 },
  { url: '/projects/this-website/', title: 'This website (project case study)', description: 'How this portfolio was engineered for search engines and AI assistants: schema graph, sitemaps, llms.txt and AI-crawler access.', section: 'Projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact/', title: 'Contact', description: 'Get in touch for SEO roles, freelance projects or consulting enquiries.', section: 'Main', changefreq: 'monthly', priority: 0.7 },
  { url: '/sitemap/', title: 'HTML Sitemap', description: 'A human-readable index of every page on this website.', section: 'Utility', changefreq: 'monthly', priority: 0.3 },
];
