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
    engagementType: "SEO strategy and implementation",
    timeline: "3 Months",
    isOngoing: false,
    statusBadge: "3-month campaign",
    headlineMetric: "+200%",
    headlineMetricLabel: "growth in organic sessions & clicks",
    heroSummary: "Organic sessions in GA4 and organic clicks in Google Search Console both grew by more than 200% over a 3-month SEO campaign.",
    metrics: [
      {
        value: "200%+",
        label: "GA4 Organic Sessions",
        detail: "Organic sessions in Google Analytics 4 grew by more than 200%.",
        context: "3-month measurement period"
      },
      {
        value: "200%+",
        label: "GSC Organic Clicks",
        detail: "Organic clicks in Google Search Console grew by more than 200%.",
        context: "Google Search Console"
      },
      {
        value: "3 Months",
        label: "Measurement Window",
        detail: "Technical, local and on-page work ran side by side, so results came quickly.",
        context: "Campaign length"
      }
    ],
    objective: "Get a residential and commercial construction contractor found for high-intent searches in Palm Beach County and Miami.",
    challenges: [
      "Plenty of established general contractors already competing for the same searches in Miami and Palm Beach County.",
      "No dedicated pages for individual services or locations.",
      "Indexing problems and weak internal linking were holding important pages back.",
      "The Google Business Profile wasn't set up to show for local map searches."
    ],
    strategyOverview: "The plan had three parts: build out service and location pages, fix the technical problems stopping Google from crawling the site properly, and optimize the Google Business Profile for local searches.",
    implementationPhases: [
      {
        phaseTitle: "Research and site structure",
        items: [
          "Regional keyword research covering commercial build-outs, luxury homes and local contracting terms.",
          "Mapping each group of keywords to the right service or location page.",
          "Reorganizing the site into a clear parent-and-child page structure."
        ]
      },
      {
        phaseTitle: "On-page and local SEO",
        items: [
          "Rewrote the service pages: title tags, meta descriptions, headings and body copy.",
          "Created location pages for Miami and Palm Beach County.",
          "Optimized the Google Business Profile: categories, attributes and services.",
          "Compressed and resized images and wrote descriptive alt text."
        ]
      },
      {
        phaseTitle: "Technical fixes and authority",
        items: [
          "Fixed crawl errors and broken links and cleaned up the XML sitemap.",
          "Added internal links from the strongest pages to the local service pages.",
          "Submitted and tracked digital PR placements to build regional credibility."
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
    resultsSummary: "Over the 3 months, organic sessions in GA4 and organic clicks in Google Search Console both grew by more than 200%. Several high-intent local searches reached page one in the target areas.",
    evidencePlaceholder: [
      {
        title: "Google Search Console Organic Clicks Performance",
        description: "Anonymized Search Console report showing organic clicks over the 3 months.",
        type: "GSC"
      },
      {
        title: "Google Analytics 4 Organic Sessions Report",
        description: "Anonymized GA4 traffic report showing organic sessions over the 3 months.",
        type: "GA4"
      }
    ],
    confidentialityNote: "The client's name, website and branding are private under a non-disclosure agreement, so this project is shown as 'Residential & Commercial Construction — South Florida'."
  },
  {
    id: "electrical",
    slug: "electrical",
    title: "Electrical Contracting Business — South Florida",
    clientType: "Commercial & Residential Electrical Contractor",
    industry: "Electrical Contracting",
    location: "South Florida",
    engagementType: "Ongoing SEO campaign",
    timeline: "Under 2 Months (Active)",
    isOngoing: true,
    statusBadge: "Active campaign, under 2 months",
    headlineMetric: "~3x",
    headlineMetricLabel: "growth in GSC impressions",
    heroSummary: "Organic impressions in Google Search Console grew about 3x in under two months, in the first phase of a campaign that is still running.",
    metrics: [
      {
        value: "~3x",
        label: "GSC Impressions",
        detail: "Impressions for residential and commercial electrical searches nearly tripled.",
        context: "Google Search Console"
      },
      {
        value: "< 2 Mo",
        label: "Time to Milestone",
        detail: "Reached in less than two months from the start of work.",
        context: "Early results"
      },
      {
        value: "Active",
        label: "Campaign Status",
        detail: "Still running, with technical fixes and new service pages in progress.",
        context: "Phase 1 Complete"
      }
    ],
    objective: "Help a South Florida electrical contractor start showing up for residential and commercial electrical searches.",
    challenges: [
      "Hardly any rankings or search visibility in South Florida at the start.",
      "Service pages didn't cover specialist searches such as emergency and commercial electrical work.",
      "Inconsistent local citations and a Google Business Profile that hadn't been optimized.",
      "Technical issues making it harder for Google to find pages and pass internal link value."
    ],
    strategyOverview: "We started with the basics: keyword research for residential and commercial electrical services, a cleaner service page structure, an optimized Google Business Profile and crawl fixes, so Google could understand what the business does and where.",
    implementationPhases: [
      {
        phaseTitle: "Research and keyword targeting",
        items: [
          "Keyword research covering emergency electrical work, panel upgrades and commercial contracting.",
          "Reorganizing the service pages around how local customers actually search.",
          "Auditing and simplifying internal links so Google finds pages faster."
        ]
      },
      {
        phaseTitle: "On-page and local signals",
        items: [
          "Improved title tags, meta descriptions and headings on the main service pages.",
          "Location-based optimization for the target service areas.",
          "Optimized the Google Business Profile to show up more in the local pack.",
          "Compressed images and added descriptive alt text."
        ]
      },
      {
        phaseTitle: "Technical cleanup and next steps",
        items: [
          "Fixed crawl issues, broken links and heading structure.",
          "Started basic off-page work to build early authority.",
          "Monitoring results and planning the next phase."
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
    resultsSummary: "In under two months, impressions in Google Search Console grew about 3x. It's an early sign that Google is indexing and showing the new pages. The next phases focus on turning impressions into clicks and adding more service pages.",
    evidencePlaceholder: [
      {
        title: "Google Search Console Impression Growth Report",
        description: "Anonymized Search Console chart showing about 3x impression growth in under two months.",
        type: "GSC"
      }
    ],
    confidentialityNote: "The client's name and website are private, so this project is shown as 'Electrical Contracting Business — South Florida'. The results refer only to Google Search Console impressions in the early stage of an active campaign."
  }
];
