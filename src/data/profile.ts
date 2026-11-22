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
  subheadline: "I'm Sanjeev Thakur, an SEO Specialist. I work on technical SEO, on-page optimization and local SEO to help websites get found in search.",
  email: "sanjivthakur165@gmail.com",
  phone: "+91 9110142413",
  location: "Bengaluru, India",
  linkedIn: "https://www.linkedin.com/in/sanjeev165/",
  yearsOfExperience: "4+ Years",
  summary: [
    "I've spent more than four years doing SEO for real websites and real users. Most of my work is technical audits, on-page fixes, keyword research and local search.",
    "At vSplash Techlabs I lead SEO work for client websites and mentor a team of four SEO associates. Day to day, that means running audits, fixing indexing problems and working with developers and writers to get changes live.",
    "Search is changing quickly, so I'm also learning how AI assistants choose their sources. Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) are where I spend my research time."
  ],
  cta: {
    primaryText: "Explore My Work",
    primaryHref: "/case-studies/",
    secondaryText: "Let's Connect",
    secondaryHref: "/contact/"
  }
};
