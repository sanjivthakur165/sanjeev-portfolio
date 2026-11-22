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
  defaultTitle: "Sanjeev Thakur | SEO Specialist in Bengaluru",
  titleTemplate: "%s | Sanjeev Thakur",
  defaultDescription: "SEO Specialist in Bengaluru with 4+ years of experience in technical SEO, on-page optimization and local SEO.",
  siteUrl: "https://sanjeevthakur.dev",
  author: "Sanjeev Thakur",
  locale: "en_US",
  twitterHandle: "@sanjeevthakur",
  themeColor: "#FFF1F2"
};
