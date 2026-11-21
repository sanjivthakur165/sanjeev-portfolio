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
    description: "Search performance monitoring, indexation diagnosis, crawl stat analysis, and CTR optimization."
  },
  {
    name: "Google Analytics 4",
    category: "Analytics & Tracking",
    description: "Organic session attribution, conversion pathway tracking, and user engagement measurement."
  },
  {
    name: "Ahrefs",
    category: "Competitive Research",
    description: "Backlink profile auditing, keyword difficulty evaluation, and competitive gap discovery."
  },
  {
    name: "Semrush",
    category: "Competitive Research",
    description: "Keyword position tracking, market domain analysis, and on-page optimization ideas."
  },
  {
    name: "Moz",
    category: "Competitive Research",
    description: "Domain authority benchmarking, link exploration, and brand mention tracking."
  },
  {
    name: "Screaming Frog",
    category: "Technical Auditing",
    description: "Deep crawl auditing, status code mapping, sitemap validation, and duplicate content identification."
  },
  {
    name: "Google Keyword Planner",
    category: "Competitive Research",
    description: "Search volume modeling, commercial intent analysis, and localized keyword ideation."
  },
  {
    name: "WordPress",
    category: "CMS & Data",
    description: "Content management, taxonomy structuring, schema implementation, and on-page publishing."
  },
  {
    name: "Microsoft Excel",
    category: "CMS & Data",
    description: "Data modeling, keyword clustering, client reporting dashboards, and large crawl analysis."
  },
  {
    name: "ChatGPT",
    category: "AI & Efficiency",
    description: "Ideation workflows, meta tag drafting, schema generation, and semantic topical mapping."
  },
  {
    name: "Claude",
    category: "AI & Efficiency",
    description: "Analytical content synthesis, prompt-assisted research, and structured outline development."
  }
];
