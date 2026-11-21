export interface SEOConfig {
  siteName: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  siteUrl: string; // Configurable placeholder until final custom domain is mapped
  author: string;
  locale: string;
  twitterHandle?: string;
  themeColor: string;
}

export const siteConfig: SEOConfig = {
  siteName: "Sanjeev Thakur",
  defaultTitle: "Sanjeev Thakur | SEO Specialist",
  titleTemplate: "%s | Sanjeev Thakur",
  defaultDescription: "SEO Specialist with 4+ years of experience driving sustainable organic search growth through Technical SEO, On-Page Optimization, and Local SEO.",
  siteUrl: "https://sanjeevthakur.dev",
  author: "Sanjeev Thakur",
  locale: "en_US",
  twitterHandle: "@sanjeevthakur",
  themeColor: "#FFF1F2"
};
