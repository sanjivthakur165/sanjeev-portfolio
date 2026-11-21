export interface MetricHighlight {
  value: string;
  label: string;
  detail: string;
  context?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  industry: string;
  location: string;
  engagementType: string;
  timeline: string;
  isOngoing: boolean;
  statusBadge: string;
  headlineMetric: string;
  headlineMetricLabel: string;
  heroSummary: string;
  metrics: MetricHighlight[];
  objective: string;
  challenges: string[];
  strategyOverview: string;
  implementationPhases: {
    phaseTitle: string;
    items: string[];
  }[];
  activities: string[];
  resultsSummary: string;
  evidencePlaceholder: {
    title: string;
    description: string;
    type: "GSC" | "GA4" | "GSC_GA4";
  }[];
  confidentialityNote: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "construction",
    slug: "construction",
    title: "Residential & Commercial Construction — South Florida",
    clientType: "Residential & Commercial Construction Contractor",
    industry: "Construction & General Contracting",
    location: "Palm Beach County / Miami, Florida",
    engagementType: "SEO Strategy & Full-Scale Implementation",
    timeline: "3 Months",
    isOngoing: false,
    statusBadge: "3-Month Campaign Result",
    headlineMetric: "+200%",
    headlineMetricLabel: "Organic Sessions & Clicks Growth",
    heroSummary: "Achieved over 200% growth in both GA4 organic sessions and Google Search Console organic clicks within a 3-month strategic SEO campaign.",
    metrics: [
      {
        value: "200%+",
        label: "GA4 Organic Sessions",
        detail: "Exceeded 200% growth in qualified organic user sessions tracked in Google Analytics 4.",
        context: "3-Month Measurement Period"
      },
      {
        value: "200%+",
        label: "GSC Organic Clicks",
        detail: "Generated more than a 200% surge in organic search clicks recorded via Google Search Console.",
        context: "Search Engine Results Pages"
      },
      {
        value: "3 Months",
        label: "Measurement Window",
        detail: "Rapid organic turnaround achieved through synchronized technical, local, and on-page optimizations.",
        context: "Campaign Duration"
      }
    ],
    objective: "Establish prominent organic search visibility for high-intent residential and commercial construction services across competitive South Florida markets (Palm Beach County and Miami).",
    challenges: [
      "Intense regional competition from established general contractors across the Miami and Palm Beach County metro areas.",
      "Service and regional location offerings lacked dedicated, search-optimized landing architecture.",
      "Technical indexation hurdles and sub-optimal internal link hierarchy diluting search engine crawl priority.",
      "Google Business Profile assets were under-optimized for high-intent local map pack queries."
    ],
    strategyOverview: "Developed a comprehensive three-pillar SEO strategy combining localized service architecture, rigorous technical crawlability optimization, and multi-location Google Business Profile optimization to capture high-value commercial and residential contracting search intent.",
    implementationPhases: [
      {
        phaseTitle: "Research & Architectural Foundation",
        items: [
          "In-depth regional keyword research targeting commercial build-outs, luxury residential construction, and localized contracting terms.",
          "Keyword mapping aligning search intent to high-converting service and localized landing pages.",
          "Website architecture refactoring to establish clear hierarchical parent-child relationships."
        ]
      },
      {
        phaseTitle: "On-Page & Local Dominance",
        items: [
          "Comprehensive service page optimization: title tags, meta descriptions, semantic headings, and body copy.",
          "Dedicated location page creation targeting key South Florida service territories (Miami & Palm Beach County).",
          "Google Business Profile optimization including category refinement, localized attributes, and service cataloging.",
          "Image optimization, including compression, responsive resizing, and descriptive keyword-mapped alt text."
        ]
      },
      {
        phaseTitle: "Technical Refinement & Authority",
        items: [
          "Technical SEO enhancements addressing crawl errors, broken links, and XML sitemap indexation priority.",
          "Strategic internal linking architecture connecting high-authority pages directly to localized service targets.",
          "Digital PR submissions and tracking to establish credible regional industry footprint."
        ]
      }
    ],
    activities: [
      "SEO strategy development",
      "Keyword research and keyword mapping",
      "Service page optimization",
      "Location page creation and optimization",
      "Google Business Profile optimization",
      "Internal linking strategy",
      "Technical SEO improvements",
      "On-page SEO implementation",
      "Image optimization",
      "PR submissions and tracking"
    ],
    resultsSummary: "Over the 3-month evaluation period, the synchronized implementation drove a documented 200%+ increase in GA4 organic sessions and a parallel 200%+ increase in Google Search Console organic clicks. High-intent localized queries achieved dominant page-one placements across South Florida target regions.",
    evidencePlaceholder: [
      {
        title: "Google Search Console Organic Clicks Performance",
        description: "Anonymized Search Console performance report documenting 200%+ organic click trajectory over the 3-month period.",
        type: "GSC"
      },
      {
        title: "Google Analytics 4 Organic Sessions Report",
        description: "Anonymized GA4 traffic acquisition overview showing qualified organic session acceleration across the 3-month window.",
        type: "GA4"
      }
    ],
    confidentialityNote: "To preserve client business privacy, this project is anonymized as 'Residential & Commercial Construction — South Florida'. Specific domain names, proprietary URLs, and identifying trademarks have been withheld in adherence to non-disclosure commitments."
  },
  {
    id: "electrical",
    slug: "electrical",
    title: "Electrical Contracting Business — South Florida",
    clientType: "Commercial & Residential Electrical Contractor",
    industry: "Electrical Contracting",
    location: "South Florida",
    engagementType: "Ongoing Strategic SEO Campaign",
    timeline: "Under 2 Months (Active)",
    isOngoing: true,
    statusBadge: "Active Campaign — Under 2 Months",
    headlineMetric: "~3x",
    headlineMetricLabel: "GSC Impressions Growth",
    heroSummary: "Generated approximately 3x growth in Google Search Console organic impressions in under 2 months during the initial phase of an active ongoing campaign.",
    metrics: [
      {
        value: "~3x",
        label: "GSC Impressions",
        detail: "Search impressions nearly tripled across relevant commercial and residential electrical search queries.",
        context: "Google Search Console"
      },
      {
        value: "< 2 Mo",
        label: "Time to Milestone",
        detail: "Early-stage organic expansion achieved in less than two months from initial execution.",
        context: "Rapid Keyword Indexing"
      },
      {
        value: "Active",
        label: "Campaign Status",
        detail: "Ongoing campaign with continuous technical refinement and service page expansion in progress.",
        context: "Phase 1 Complete"
      }
    ],
    objective: "Expand search visibility for a regional electrical contractor in South Florida by capturing early keyword footprint and scaling search impressions across specialized residential and commercial electrical services.",
    challenges: [
      "Limited initial search presence with minimal keyword rankings in the South Florida service area.",
      "Under-optimized service catalog lacking semantic coverage for specialized emergency and commercial electrical terms.",
      "Inconsistent local citations and unoptimized Google Business Profile listing.",
      "Technical friction points affecting crawler discovery and internal link equity."
    ],
    strategyOverview: "Implemented an agile foundation focused on high-volume commercial and residential electrical keyword research, strategic service page restructuring, Google Business Profile enhancement, and technical crawlability fixes to rapidly seed Google's index with relevant entity signals.",
    implementationPhases: [
      {
        phaseTitle: "Initial Discovery & Keyword Seeding",
        items: [
          "Targeted keyword research across emergency electrical, panel upgrades, and commercial contracting queries.",
          "Restructuring service hierarchies to align with high-intent customer search patterns in South Florida.",
          "Auditing and streamlining internal link pathways to accelerate search engine discovery."
        ]
      },
      {
        phaseTitle: "On-Page Optimization & Local Signals",
        items: [
          "On-page optimization across core service pages, refining title tags, meta descriptions, and semantic headings.",
          "Location-based optimization strengthening localized topical relevance across target service corridors.",
          "Google Business Profile optimization to enhance local pack visibility and search discovery.",
          "Image optimization, reducing payload weights and embedding descriptive, keyword-targeted alt tags."
        ]
      },
      {
        phaseTitle: "Technical Cleanup & Ongoing Expansion",
        items: [
          "Technical SEO improvements resolving crawling bottlenecks, broken links, and header tag structures.",
          "Foundational off-page signals to support early topical authority.",
          "Ongoing campaign monitoring and strategic preparation for secondary expansion phases."
        ]
      }
    ],
    activities: [
      "Keyword research",
      "Service page optimization",
      "Local SEO",
      "Location-based optimization",
      "Google Business Profile optimization",
      "Internal linking",
      "Technical SEO improvements",
      "Image optimization",
      "On-page and off-page SEO activities"
    ],
    resultsSummary: "In under two months of active campaign execution, Google Search Console search impressions surged approximately three-fold (~3x). This early indicator of rapid organic indexation validates the foundational targeting, with click conversion and commercial service expansion scheduled for subsequent phases.",
    evidencePlaceholder: [
      {
        title: "Google Search Console Impression Growth Report",
        description: "Anonymized Search Console trajectory chart highlighting ~3x impression scaling under 2 months.",
        type: "GSC"
      }
    ],
    confidentialityNote: "To preserve client business privacy, this project is anonymized as 'Electrical Contracting Business — South Florida'. Results refer strictly to Google Search Console impressions during this active early-stage campaign."
  }
];
