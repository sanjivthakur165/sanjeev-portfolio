export interface ProfileData {
  name: string;
  role: string;
  headline: string;
  subheadline: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  yearsOfExperience: string;
  summary: string[];
  cta: {
    primaryText: string;
    primaryHref: string;
    secondaryText: string;
    secondaryHref: string;
  };
}

export const profileData: ProfileData = {
  name: "Sanjeev Thakur",
  role: "SEO Specialist",
  headline: "Turning Search Visibility Into Sustainable Growth.",
  subheadline: "I'm Sanjeev Thakur, an SEO Specialist focused on Technical SEO, On-Page Optimization, Local SEO, and improving organic search visibility.",
  email: "sanjivthakur165@gmail.com",
  phone: "+91 9110142413",
  location: "Bengaluru, India",
  linkedIn: "https://www.linkedin.com/in/sanjeev165/",
  yearsOfExperience: "4+ Years",
  summary: [
    "SEO Specialist with over four years of hands-on experience optimizing websites for search engines and real users. My work spans deep technical SEO audits, strategic on-page optimization, keyword architecture, and local search visibility.",
    "Currently leading SEO workflows at vSplash Techlabs, where I guide and mentor a team of four SEO associates, perform comprehensive website audits, resolve indexation bottlenecks, and collaborate across departments to implement measurable organic growth strategies.",
    "Driven by data and search intent, I continuously explore evolving search dynamics—including Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO)—to build search presences that remain resilient as search engines evolve."
  ],
  cta: {
    primaryText: "Explore My Work",
    primaryHref: "/case-studies",
    secondaryText: "Let's Connect",
    secondaryHref: "/contact"
  }
};
