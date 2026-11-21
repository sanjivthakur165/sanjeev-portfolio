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
    summary: "Leading technical, on-page, and local SEO initiatives across multiple client websites while managing and mentoring a team of four SEO associates.",
    responsibilities: [
      "Execute comprehensive on-page SEO strategies across multiple websites, including keyword research, keyword mapping, title tags, meta descriptions, headings, and image alt text.",
      "Conduct in-depth technical SEO audits to identify and resolve crawlability, indexing, XML sitemap, broken link, and image optimization issues.",
      "Architect strategic internal linking frameworks and optimize site structure to improve page authority distribution.",
      "Monitor organic search health and performance trends utilizing Google Search Console and Google Analytics 4.",
      "Coordinate directly with cross-functional development, content, and design teams to implement prioritized SEO recommendations.",
      "Manage, mentor, and review deliverables for a dedicated team of four SEO associates, establishing QA standards and task allocation workflows."
    ],
    keyHighlights: [
      "Mentoring 4 SEO associates on technical auditing and on-page workflows",
      "Systematic crawlability and indexation resolution across client portfolios",
      "End-to-end data reporting with GA4 and Google Search Console"
    ]
  },
  {
    role: "SEO Intern",
    company: "Baweja Media",
    location: "India",
    period: "December 2022 – May 2023",
    isCurrent: false,
    type: "Internship",
    summary: "Developed hands-on foundational skills in organic search, contributing to on-page optimization, competitive research, and off-page authority building.",
    responsibilities: [
      "Executed on-page and off-page SEO activities across client websites to build organic authority.",
      "Conducted thorough keyword research and competitor analysis to uncover targeted search queries.",
      "Built high-quality backlinks and supported link acquisition initiatives.",
      "Assisted with website content optimization, metadata updates, and structural improvements."
    ],
    keyHighlights: [
      "Hands-on execution of over 10 off-page authority acquisition campaigns",
      "Targeted keyword research and competitive gap analysis",
      "Assisted in technical and on-page site audits"
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
