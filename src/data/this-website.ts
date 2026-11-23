/**
 * Data for /projects/this-website — the case study about building this site.
 *
 * HONESTY RULE: anything that can only be measured on the live site (Lighthouse,
 * AI assistant checks, rankings) stays `null` / empty until you have real numbers.
 * The page shows "Pending" for those instead of made-up figures.
 */

export interface RankingEntry {
  date: string;         // YYYY-MM-DD
  query: string;
  country: string;
  position: number | null;
  source: string;       // e.g. "Google Search Console"
}

export const thisWebsite = {
  title: 'This website: built to be found for my own name',
  summary:
    'I rebuilt my portfolio as an SEO project in its own right: a fast static site with a connected knowledge graph, dual sitemaps, an llms.txt file and open doors for AI crawlers, so search engines and AI assistants can recognize and cite me.',
  builtOn: 'November 2026',
  status: 'Live' as string,
  liveUrl: 'https://sanjeev.site' as string | null,
  stack: ['Astro', 'Tailwind CSS', 'TypeScript', 'Lucide icons', 'Schema.org JSON-LD'],

  /** Mobile Lighthouse scores (0–100). Fill in from a run against the LIVE site. */
  lighthouse: {
    measuredOn: null as string | null,
    scores: {
      Performance: null as number | null,
      Accessibility: null as number | null,
      'Best practices': null as number | null,
      SEO: null as number | null,
    },
  },

  // AI assistant checks live in src/data/geo-log.ts (shared with the home page).

  /** Ranking log for branded queries (from Google Search Console once live). */
  rankings: [] as RankingEntry[],

  timeline: [
    { date: 'Nov 2026', title: 'Portfolio foundation', detail: 'Astro + Tailwind build with About, case studies, contact and day/night themes.', done: true },
    { date: 'Nov 2026', title: 'Homepage redesign', detail: 'Animated hero, rotating headline, skills ribbon, scroll reveals and a redesigned experience timeline.', done: true },
    { date: 'Nov 2026', title: 'Discovery layer', detail: 'XML sitemap, HTML sitemap and a generated llms.txt from one shared page list.', done: true },
    { date: 'Nov 2026', title: 'Open to AI crawlers', detail: 'robots.txt explicitly welcoming 40+ AI and search crawlers, plus content signals.', done: true },
    { date: 'Nov 2026', title: 'Connected knowledge graph', detail: 'One linked JSON-LD @graph per page: Person, roles, credential, occupation, pages, articles.', done: true },
    { date: 'Nov 2026', title: 'Brand assets', detail: 'Favicon set, Apple touch icon, web manifest and a 1200×630 share image.', done: true },
    { date: 'Nov 2026', title: 'Launch on custom domain', detail: 'Live on sanjeev.site via Cloudflare Pages, with sitemaps submitted to Google Search Console and Bing Webmaster Tools.', done: true },
    { date: 'Nov 2026', title: 'First AI baseline', detail: 'Asked five AI assistants who I am and logged what they said and which sources they cited.', done: true },
    { date: 'Next', title: 'First Lighthouse scores and rankings', detail: 'Record real Lighthouse scores and the first branded-search positions from Search Console.', done: false },
    { date: 'Next', title: 'First AI citation', detail: 'Track when assistants start naming and citing this site for my name.', done: false },
  ],

  takeaways: [
    {
      title: 'Your name is a keyword',
      text: 'Branded search is the one query every recruiter and client runs. Treating my own name as a target keyword shaped every technical decision on this site.',
    },
    {
      title: 'Structure beats volume',
      text: 'A small site with a clean, connected entity graph tells search engines and AI more about who I am than dozens of loosely related pages.',
    },
    {
      title: 'Measure in public',
      text: 'Publishing a baseline, even an empty one, keeps me honest. Scores and AI checks get added here as real data, never as promises.',
    },
  ],
};
