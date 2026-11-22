export interface SEOConfig {
  siteName: string;
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  siteUrl: string; // Production domain (no trailing slash). Canonicals, sitemap, robots.txt, schema and llms.txt derive from this.
  author: string;
  locale: string;
  twitterHandle?: string; // Only set this to a real X/Twitter profile handle, e.g. "@yourhandle"
  themeColor: string;
}

export const siteConfig: SEOConfig = {
  siteName: "Sanjeev Thakur",
  defaultTitle: "Sanjeev Thakur | SEO Specialist in Bengaluru",
  titleTemplate: "%s | Sanjeev Thakur",
  defaultDescription: "SEO Specialist in Bengaluru with 4+ years of experience in technical SEO, on-page optimization and local SEO.",
  siteUrl: "https://sanjeev.site",
  author: "Sanjeev Thakur",
  locale: "en_US",
  themeColor: "#FFF1F2"
};
