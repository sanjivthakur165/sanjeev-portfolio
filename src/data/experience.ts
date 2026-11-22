export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  period: string;
  isCurrent: boolean;
  type: "Full-Time" | "Internship";
  summary: string;
  responsibilities: string[];
  keyHighlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
}

export const workExperience: ExperienceItem[] = [
  {
    role: "SEO Specialist",
    company: "vSplash Techlabs",
    location: "Hyderabad / Bengaluru",
    period: "September 2023 – Present",
    isCurrent: true,
    type: "Full-Time",
    summary: "I lead technical, on-page and local SEO for several client websites and mentor a team of four SEO associates.",
    responsibilities: [
      "Run on-page SEO across multiple sites: keyword research and mapping, title tags, meta descriptions, headings and image alt text.",
      "Audit sites for technical problems such as crawl and indexing issues, XML sitemap errors, broken links and heavy images, then get them fixed.",
      "Plan internal linking and site structure so the most important pages get the link value they need.",
      "Track organic performance in Google Search Console and Google Analytics 4.",
      "Work with developers, writers and designers to get SEO recommendations live.",
      "Manage and mentor four SEO associates: assign work, review deliverables and set quality checks."
    ],
    keyHighlights: [
      "Mentoring 4 SEO associates on audits and on-page work",
      "Fixing crawl and indexing issues across client sites",
      "Reporting with GA4 and Google Search Console"
    ]
  },
  {
    role: "SEO Intern",
    company: "Baweja Media",
    location: "India",
    period: "December 2022 – May 2023",
    isCurrent: false,
    type: "Internship",
    summary: "My first SEO role, where I learned the basics hands-on: on-page work, competitor research and link building.",
    responsibilities: [
      "Did on-page and off-page SEO for client websites.",
      "Researched keywords and analyzed competitors to find search terms worth targeting.",
      "Built backlinks and helped with link outreach.",
      "Helped update website content, metadata and page structure."
    ],
    keyHighlights: [
      "Worked on more than 10 off-page SEO campaigns",
      "Keyword research and competitor gap analysis",
      "Helped with technical and on-page audits"
    ]
  }
];

export const educationHistory: EducationItem[] = [
  {
    degree: "Bachelor of Technology, Computer Science",
    institution: "B.A. College of Engineering & Technology",
    period: "2015 – 2019",
    grade: "7.0 CGPA"
  }
];
