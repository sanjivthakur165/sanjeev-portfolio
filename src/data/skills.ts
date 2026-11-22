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
    description: "Understanding what people search for and what competitors are doing, then building pages that earn their rankings.",
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
    description: "Making sure search engines can crawl, render and index the pages that matter.",
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
    description: "Helping local and service-area businesses get found in their region and in the map pack.",
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
    description: "Turning Search Console and GA4 data into clear next steps.",
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
    description: "Keeping up with how AI assistants and generative search find and cite sources.",
    icon: "sparkles",
    skills: [
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "AI Search Visibility"
    ]
  }
];
