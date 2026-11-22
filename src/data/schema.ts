/**
 * Site-wide Schema.org structured data, emitted as ONE connected JSON-LD @graph per page.
 *
 * Every entity has a stable @id so search engines and AI systems can merge facts about
 * the same person across pages (entity reconciliation). The Person node is the hub:
 * the website, every page, every case study and every organization links back to it.
 *
 * Rules followed:
 *  - Only facts that are visible on the site / in src/data are marked up (no invented data).
 *  - Concepts link to Wikipedia via `sameAs` so knowledge graphs can disambiguate them.
 *  - Case-study metrics are described exactly as measured (GA4 / GSC), never as revenue/leads.
 */
import { siteConfig } from './seo-config';
import { pageUrl } from './urls';
import { profileData } from './profile';
import { workExperience, educationHistory } from './experience';
import { skillCategories } from './skills';
import { toolsData } from './tools';
import { caseStudies, type CaseStudy } from './case-studies';

type Node = Record<string, unknown>;

export type PageType = 'home' | 'profile' | 'collection' | 'case-study' | 'project' | 'contact' | 'sitemap' | 'generic';

export interface ArticleInput { headline: string; description: string; keywords: string[]; images?: string[] }

export interface Crumb { name: string; url: string }

export interface SchemaInput {
  path: string;               // canonical path, e.g. "/about/"
  title: string;              // full <title>
  description: string;
  pageType: PageType;
  breadcrumbs: Crumb[];       // may or may not include Home; Home is added automatically
  caseStudySlug?: string;     // for pageType 'case-study'
  article?: ArticleInput;     // for pageType 'project'
  imageUrl: string;           // absolute URL of the page's share image
}

const SITE = siteConfig.siteUrl;
const abs = (path: string) => pageUrl(path || '/');

/** Stable entity identifiers */
export const ids = {
  person: `${SITE}/#person`,
  website: `${SITE}/#website`,
  logo: `${SITE}/#logo`,
  currentEmployer: `${SITE}/#org-vsplash-techlabs`,
  pastEmployer: `${SITE}/#org-baweja-media`,
  college: `${SITE}/#org-college`,
  degree: `${SITE}/#credential-btech`,
  occupation: `${SITE}/#occupation`,
  contactPoint: `${SITE}/#contact-point`,
  page: (path: string) => `${abs(path)}#webpage`,
  breadcrumb: (path: string) => `${abs(path)}#breadcrumb`,
  caseStudy: (slug: string) => `${abs(`/case-studies/${slug}/`)}#article`,
  caseStudyList: `${abs('/case-studies/')}#itemlist`,
};

/** Wikipedia references for well-known concepts (entity disambiguation). */
const WIKI: Record<string, string> = {
  'Search Engine Optimization': 'https://en.wikipedia.org/wiki/Search_engine_optimization',
  'Keyword Research': 'https://en.wikipedia.org/wiki/Keyword_research',
  'Link Building': 'https://en.wikipedia.org/wiki/Link_building',
  'Local SEO': 'https://en.wikipedia.org/wiki/Local_search_engine_optimisation',
  'XML Sitemaps': 'https://en.wikipedia.org/wiki/Sitemaps',
  'Robots.txt': 'https://en.wikipedia.org/wiki/Robots.txt',
  'Google Analytics 4': 'https://en.wikipedia.org/wiki/Google_Analytics',
  'Google Search Console': 'https://en.wikipedia.org/wiki/Google_Search_Console',
  'Generative Engine Optimization (GEO)': 'https://en.wikipedia.org/wiki/Generative_engine_optimization',
  'Web Analytics': 'https://en.wikipedia.org/wiki/Web_analytics',
};

const TOOL_WIKI: Record<string, string> = {
  'Google Search Console': 'https://en.wikipedia.org/wiki/Google_Search_Console',
  'Google Analytics 4': 'https://en.wikipedia.org/wiki/Google_Analytics',
  'Ahrefs': 'https://en.wikipedia.org/wiki/Ahrefs',
  'Semrush': 'https://en.wikipedia.org/wiki/Semrush',
  'Moz': 'https://en.wikipedia.org/wiki/Moz_(marketing_software)',
  'WordPress': 'https://en.wikipedia.org/wiki/WordPress',
  'Microsoft Excel': 'https://en.wikipedia.org/wiki/Microsoft_Excel',
  'ChatGPT': 'https://en.wikipedia.org/wiki/ChatGPT',
  'Claude': 'https://en.wikipedia.org/wiki/Claude_(language_model)',
};

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
/** "September 2023" -> "2023-09"; "Present" -> undefined */
function isoMonth(text?: string): string | undefined {
  const t = text?.trim().toLowerCase() ?? '';
  if (/^\d{4}$/.test(t)) return t;
  const m = t.match(/([a-z]+)\s+(\d{4})/);
  if (!m) return undefined;
  const idx = MONTHS.indexOf(m[1].slice(0, 3));
  return idx === -1 ? undefined : `${m[2]}-${String(idx + 1).padStart(2, '0')}`;
}
function periodDates(period: string) {
  const [start, end] = period.split(/\s*[–-]\s*/);
  return { startDate: isoMonth(start) ?? start.trim(), endDate: /present/i.test(end ?? '') ? undefined : isoMonth(end) };
}

const [givenName, ...rest] = profileData.name.split(' ');
const familyName = rest.join(' ');
const [city, country] = profileData.location.split(',').map((s) => s.trim());

const postalAddress = {
  '@type': 'PostalAddress',
  addressLocality: city,
  addressRegion: 'Karnataka',
  addressCountry: 'IN',
};

const allSkills = skillCategories.flatMap((c) => c.skills);

/** Cross-page references carry type + url + name so each page is self-describing. */
const aboutPageRef = () => ({ '@type': 'ProfilePage', '@id': ids.page('/about/'), url: abs('/about/'), name: `About ${profileData.name}` });
const caseStudyRef = (cs: CaseStudy) => ({ '@type': 'Article', '@id': ids.caseStudy(cs.slug), url: abs(`/case-studies/${cs.slug}/`), headline: cs.title });
const caseStudyPageRef = (cs: CaseStudy) => ({ '@type': 'WebPage', '@id': ids.page(`/case-studies/${cs.slug}/`), url: abs(`/case-studies/${cs.slug}/`), name: cs.title });

function topic(name: string): Node {
  return WIKI[name] ? { '@type': 'Thing', name, sameAs: WIKI[name] } : { '@type': 'Thing', name };
}

function toolNode(name: string): Node {
  return { '@type': 'SoftwareApplication', name, applicationCategory: 'BusinessApplication', ...(TOOL_WIKI[name] ? { sameAs: TOOL_WIKI[name] } : {}) };
}

/* ------------------------------------------------------------------ */
/* Core entities (present on every page)                              */
/* ------------------------------------------------------------------ */

function personNode(): Node {
  const current = workExperience.find((j) => j.isCurrent) ?? workExperience[0];
  const past = workExperience.filter((j) => j !== current);
  const edu = educationHistory[0];
  const eduDates = periodDates(edu.period);

  return {
    '@type': 'Person',
    '@id': ids.person,
    name: profileData.name,
    givenName,
    familyName,
    jobTitle: profileData.role,
    description: siteConfig.defaultDescription,
    disambiguatingDescription: `${profileData.name} is an ${profileData.role} based in ${profileData.location}, specializing in technical SEO, on-page optimization and local SEO. Currently working at ${current.company}.`,
    url: abs('/'),
    mainEntityOfPage: aboutPageRef(),
    email: `mailto:${profileData.email}`,
    telephone: profileData.phone.replace(/\s+/g, '-').replace(/^(\+\d+)-?/, '$1-'),
    address: postalAddress,
    homeLocation: { '@type': 'Place', name: profileData.location, address: postalAddress },
    workLocation: { '@type': 'Place', name: profileData.location, address: postalAddress },
    sameAs: [profileData.linkedIn],
    contactPoint: { '@id': ids.contactPoint },
    worksFor: {
      '@type': 'EmployeeRole',
      roleName: current.role,
      startDate: periodDates(current.period).startDate,
      worksFor: { '@id': ids.currentEmployer },
    },
    alumniOf: [
      {
        '@type': 'OrganizationRole',
        roleName: 'Student',
        startDate: eduDates.startDate,
        endDate: eduDates.endDate ?? periodDates(edu.period).endDate,
        alumniOf: { '@id': ids.college },
      },
      ...past.map((job, i) => ({
        '@type': 'EmployeeRole',
        roleName: job.role,
        ...periodDates(job.period),
        alumniOf: { '@id': i === 0 ? ids.pastEmployer : `${SITE}/#org-past-${i}` },
      })),
    ],
    hasCredential: { '@id': ids.degree },
    hasOccupation: { '@id': ids.occupation },
    knowsAbout: [
      topic('Search Engine Optimization'),
      { '@type': 'Thing', name: 'Technical SEO' },
      { '@type': 'Thing', name: 'On-Page SEO' },
      topic('Local SEO'),
      topic('Keyword Research'),
      topic('Link Building'),
      topic('XML Sitemaps'),
      topic('Robots.txt'),
      topic('Web Analytics'),
      topic('Google Analytics 4'),
      topic('Google Search Console'),
      { '@type': 'Thing', name: 'Answer Engine Optimization (AEO)' },
      topic('Generative Engine Optimization (GEO)'),
      { '@type': 'Thing', name: 'Google Business Profile Optimization' },
    ],
    skills: allSkills,
    knowsLanguage: { '@type': 'Language', name: 'English', alternateName: 'en' },
    workExample: caseStudies.map(caseStudyRef),
    makesOffer: ['Technical SEO Audits', 'On-Page SEO Optimization', 'Local SEO & Google Business Profile Optimization'].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name, serviceType: 'Search Engine Optimization', provider: { '@id': ids.person } },
    })),
  };
}

function organizationNodes(): Node[] {
  const current = workExperience.find((j) => j.isCurrent) ?? workExperience[0];
  const past = workExperience.filter((j) => j !== current);
  const edu = educationHistory[0];
  return [
    { '@type': 'Organization', '@id': ids.currentEmployer, name: current.company, ...(current.location ? { location: current.location } : {}) },
    ...past.map((job, i) => ({
      '@type': 'Organization',
      '@id': i === 0 ? ids.pastEmployer : `${SITE}/#org-past-${i}`,
      name: job.company,
      ...(job.location ? { location: job.location } : {}),
    })),
    { '@type': 'CollegeOrUniversity', '@id': ids.college, name: edu.institution },
  ];
}

function credentialNode(): Node {
  const edu = educationHistory[0];
  return {
    '@type': 'EducationalOccupationalCredential',
    '@id': ids.degree,
    name: edu.degree,
    credentialCategory: 'degree',
    educationalLevel: "Bachelor's degree",
    about: { '@type': 'Thing', name: 'Computer Science', sameAs: 'https://en.wikipedia.org/wiki/Computer_science' },
    recognizedBy: { '@id': ids.college },
    dateCreated: periodDates(edu.period).endDate ?? edu.period.split(/[–-]/).pop()?.trim(),
  };
}

function occupationNode(): Node {
  return {
    '@type': 'Occupation',
    '@id': ids.occupation,
    name: profileData.role,
    description: 'Plans and executes technical, on-page and local search engine optimization to grow organic search visibility.',
    occupationalCategory: {
      '@type': 'CategoryCode',
      codeValue: '13-1161.01',
      name: 'Search Marketing Strategists',
      inCodeSet: { '@type': 'CategoryCodeSet', name: 'O*NET-SOC', url: 'https://www.onetonline.org/' },
    },
    occupationLocation: { '@type': 'City', name: city, containedInPlace: { '@type': 'Country', name: country } },
    skills: allSkills.join(', '),
    experienceRequirements: { '@type': 'OccupationalExperienceRequirements', monthsOfExperience: 48 },
  };
}

function contactPointNode(): Node {
  return {
    '@type': 'ContactPoint',
    '@id': ids.contactPoint,
    contactType: 'professional enquiries',
    email: profileData.email,
    telephone: profileData.phone.replace(/\s+/g, '-'),
    url: abs('/contact/'),
    areaServed: 'Worldwide',
    availableLanguage: ['English'],
  };
}

function websiteNode(): Node {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: abs('/'),
    name: siteConfig.siteName,
    alternateName: [`${profileData.name} — ${profileData.role}`, `${profileData.name} SEO Portfolio`],
    description: siteConfig.defaultDescription,
    inLanguage: 'en',
    publisher: { '@id': ids.person },
    author: { '@id': ids.person },
    about: { '@id': ids.person },
    copyrightHolder: { '@id': ids.person },
    copyrightYear: new Date().getFullYear(),
    image: { '@id': ids.logo },
  };
}

function logoNode(): Node {
  return {
    '@type': 'ImageObject',
    '@id': ids.logo,
    url: abs('/icon-512.png'),
    contentUrl: abs('/icon-512.png'),
    width: 512,
    height: 512,
    caption: `${profileData.name} — ${profileData.role}`,
  };
}

/* ------------------------------------------------------------------ */
/* Page-level entities                                                */
/* ------------------------------------------------------------------ */

const PAGE_TYPES: Record<PageType, string | string[]> = {
  home: ['WebPage', 'ProfilePage'],
  profile: ['WebPage', 'ProfilePage', 'AboutPage'],
  collection: ['WebPage', 'CollectionPage'],
  'case-study': 'WebPage',
  project: 'WebPage',
  contact: ['WebPage', 'ContactPage'],
  sitemap: ['WebPage', 'CollectionPage'],
  generic: 'WebPage',
};

function breadcrumbNode(path: string, crumbs: Crumb[]): Node | null {
  if (path === '/') return null;
  const trail = [{ name: 'Home', url: '/' }, ...crumbs.filter((c) => c.url !== '/')];
  return {
    '@type': 'BreadcrumbList',
    '@id': ids.breadcrumb(path),
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.url),
    })),
  };
}

function caseStudyNode(cs: CaseStudy, imageUrl: string): Node {
  const url = abs(`/case-studies/${cs.slug}/`);
  return {
    '@type': 'Article',
    '@id': ids.caseStudy(cs.slug),
    headline: cs.title,
    alternativeHeadline: `${cs.headlineMetric} ${cs.headlineMetricLabel} — SEO Case Study`,
    description: cs.heroSummary,
    abstract: cs.resultsSummary,
    articleSection: 'SEO Case Study',
    genre: 'Case study',
    url,
    mainEntityOfPage: caseStudyPageRef(cs),
    isPartOf: caseStudyPageRef(cs),
    author: { '@id': ids.person },
    publisher: { '@id': ids.person },
    creator: { '@id': ids.person },
    image: { '@type': 'ImageObject', url: imageUrl, width: 1200, height: 630 },
    inLanguage: 'en',
    keywords: [...cs.activities, cs.industry, cs.location, 'SEO case study'].join(', '),
    about: [
      { '@type': 'Thing', name: 'Search Engine Optimization', sameAs: WIKI['Search Engine Optimization'] },
      { '@type': 'Thing', name: cs.industry },
    ],
    mentions: [toolNode('Google Analytics 4'), toolNode('Google Search Console')],
    spatialCoverage: { '@type': 'Place', name: cs.location, address: { '@type': 'PostalAddress', addressRegion: 'FL', addressCountry: 'US' } },
    temporalCoverage: cs.timeline,
    creativeWorkStatus: cs.isOngoing ? 'Ongoing' : 'Completed',
    copyrightHolder: { '@id': ids.person },
  };
}

function caseStudyListNode(): Node {
  return {
    '@type': 'ItemList',
    '@id': ids.caseStudyList,
    name: `SEO Case Studies by ${profileData.name}`,
    numberOfItems: caseStudies.length,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    itemListElement: caseStudies.map((cs, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: abs(`/case-studies/${cs.slug}/`),
      item: { '@id': ids.caseStudy(cs.slug) },
    })),
  };
}

function webPageNode(input: SchemaInput, hasBreadcrumb: boolean): Node {
  const { path, title, description, pageType } = input;
  const node: Node = {
    '@type': PAGE_TYPES[pageType],
    '@id': ids.page(path),
    url: abs(path),
    name: title,
    description,
    inLanguage: 'en',
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.person },
    author: { '@id': ids.person },
    primaryImageOfPage: { '@type': 'ImageObject', url: input.imageUrl, width: 1200, height: 630 },
    dateModified: new Date().toISOString().split('T')[0],
    ...(hasBreadcrumb ? { breadcrumb: { '@id': ids.breadcrumb(path) } } : {}),
    potentialAction: { '@type': 'ReadAction', target: [abs(path)] },
  };

  if (pageType === 'home' || pageType === 'profile') {
    node.mainEntity = { '@id': ids.person };
    node.significantLink = [abs('/about/'), abs('/case-studies/'), abs('/contact/')];
  }
  if (pageType === 'contact') node.mainEntity = { '@id': ids.contactPoint };
  if (pageType === 'collection') node.mainEntity = { '@id': ids.caseStudyList };
  if (pageType === 'case-study' && input.caseStudySlug) {
    node.mainEntity = { '@id': ids.caseStudy(input.caseStudySlug) };
    node.about = [{ '@id': ids.person }, { '@id': ids.caseStudy(input.caseStudySlug) }];
  }
  if (pageType === 'project' && input.article) node.mainEntity = { '@id': `${abs(path)}#article` };
  if (pageType === 'home') {
    node.hasPart = caseStudies.map(caseStudyRef);
    node.mentions = toolsData.map((t) => toolNode(t.name));
  }
  return node;
}

/* ------------------------------------------------------------------ */
/* Public API                                                         */
/* ------------------------------------------------------------------ */

export function buildSchemaGraph(input: SchemaInput) {
  const breadcrumb = breadcrumbNode(input.path, input.breadcrumbs);
  const graph: Node[] = [
    personNode(),
    websiteNode(),
    logoNode(),
    webPageNode(input, Boolean(breadcrumb)),
    ...(breadcrumb ? [breadcrumb] : []),
    ...organizationNodes(),
    credentialNode(),
    occupationNode(),
    contactPointNode(),
  ];

  // Case study articles are referenced by the Person (workExample) on every page,
  // so include their full nodes wherever they are listed or detailed.
  if (input.pageType === 'case-study' && input.caseStudySlug) {
    const cs = caseStudies.find((c) => c.slug === input.caseStudySlug);
    if (cs) graph.push(caseStudyNode(cs, input.imageUrl));
  }
  if (input.pageType === 'project' && input.article) {
    const a = input.article;
    graph.push({
      '@type': ['Article', 'TechArticle'],
      '@id': `${abs(input.path)}#article`,
      headline: a.headline,
      description: a.description,
      url: abs(input.path),
      mainEntityOfPage: { '@id': ids.page(input.path) },
      author: { '@id': ids.person },
      publisher: { '@id': ids.person },
      about: [{ '@id': ids.website }, { '@id': ids.person }],
      keywords: a.keywords.join(', '),
      articleSection: 'Project case study',
      inLanguage: 'en',
      image: (a.images ?? [input.imageUrl]).map((url) => ({ '@type': 'ImageObject', url })),
      dateModified: new Date().toISOString().split('T')[0],
    });
  }
  if (input.pageType === 'collection' || input.pageType === 'home') {
    graph.push(...caseStudies.map((cs) => caseStudyNode(cs, input.imageUrl)));
    if (input.pageType === 'collection') graph.push(caseStudyListNode());
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
