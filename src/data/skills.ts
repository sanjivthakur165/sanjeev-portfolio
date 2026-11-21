export interface SkillCategory {
  title: string;
  id: string;
  description: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Core SEO",
    id: "core-seo",
    description: "Foundational search strategies designed to understand audience intent, outperform competitors, and build authoritative organic visibility.",
    icon: "search",
    skills: [
      "Search Engine Optimization",
      "Keyword Research",
      "Competitor Analysis",
      "On-Page SEO",
      "Off-Page SEO",
      "Content Optimization",
      "Link Building"
    ]
  },
  {
    title: "Technical SEO",
    id: "technical-seo",
    description: "Eliminating technical debt to ensure search engines crawl, render, and index critical website assets seamlessly.",
    icon: "code",
    skills: [
      "Technical SEO Audits",
      "Crawlability and Indexability",
      "XML Sitemaps",
      "Robots.txt",
      "Broken Link Identification",
      "Internal Linking",
      "Image Optimization",
      "Website Structure"
    ]
  },
  {
    title: "Local SEO",
    id: "local-seo",
    description: "Driving qualified regional search traffic and boosting local map-pack dominance for service-area and physical businesses.",
    icon: "map-pin",
    skills: [
      "Local Keyword Research",
      "Google Business Profile Optimization",
      "Local Landing Pages",
      "Location-Based SEO",
      "Local Search Visibility"
    ]
  },
  {
    title: "Analytics & Reporting",
    id: "analytics",
    description: "Translating search data into actionable insights through rigorous tracking and attribution across industry-standard platforms.",
    icon: "bar-chart-2",
    skills: [
      "Google Analytics 4",
      "Google Search Console",
      "SEO Performance Monitoring",
      "Organic Traffic Analysis",
      "Keyword Performance Tracking"
    ]
  },
  {
    title: "Emerging Search",
    id: "emerging-search",
    description: "Staying ahead of search transformations with proactive research into conversational AI discovery and generative search engines.",
    icon: "sparkles",
    skills: [
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "AI Search Visibility"
    ]
  }
];
