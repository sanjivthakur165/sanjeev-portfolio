export interface ToolItem {
  name: string;
  category: "Analytics & Tracking" | "Competitive Research" | "Technical Auditing" | "CMS & Data" | "AI & Efficiency";
  description: string;
  badge?: string;
}

export const toolsData: ToolItem[] = [
  {
    name: "Google Search Console",
    category: "Analytics & Tracking",
    description: "Performance tracking, indexing checks, crawl stats and click-through rate."
  },
  {
    name: "Google Analytics 4",
    category: "Analytics & Tracking",
    description: "Organic traffic, conversion paths and engagement."
  },
  {
    name: "Ahrefs",
    category: "Competitive Research",
    description: "Backlink audits, keyword difficulty and competitor gaps."
  },
  {
    name: "Semrush",
    category: "Competitive Research",
    description: "Rank tracking, domain analysis and on-page ideas."
  },
  {
    name: "Moz",
    category: "Competitive Research",
    description: "Domain authority, link research and brand mentions."
  },
  {
    name: "Screaming Frog",
    category: "Technical Auditing",
    description: "Site crawls, status codes, sitemap checks and duplicate content."
  },
  {
    name: "Google Keyword Planner",
    category: "Competitive Research",
    description: "Search volumes, commercial intent and local keyword ideas."
  },
  {
    name: "WordPress",
    category: "CMS & Data",
    description: "Publishing, categories, schema markup and on-page changes."
  },
  {
    name: "Microsoft Excel",
    category: "CMS & Data",
    description: "Keyword clustering, client reports and large crawl exports."
  },
  {
    name: "ChatGPT",
    category: "AI & Efficiency",
    description: "Brainstorming, first drafts of meta tags, schema markup and topic maps."
  },
  {
    name: "Claude",
    category: "AI & Efficiency",
    description: "Summarizing research, reviewing content and drafting outlines."
  }
];
