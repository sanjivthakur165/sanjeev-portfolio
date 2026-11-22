/** Crawlers explicitly welcomed in robots.txt (also counted on /projects/this-website). */
export const aiAgents: { company: string; agents: string[] }[] = [
  { company: 'OpenAI (ChatGPT, ChatGPT Search, training)', agents: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User'] },
  { company: 'Anthropic (Claude, Claude search, training)', agents: ['ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai', 'claude-web'] },
  { company: 'Perplexity', agents: ['PerplexityBot', 'Perplexity-User'] },
  { company: 'Google (Gemini, AI Overviews / Vertex grounding)', agents: ['Google-Extended', 'GoogleOther', 'Google-CloudVertexBot'] },
  { company: 'Microsoft (Copilot, Bing)', agents: ['bingbot', 'BingPreview', 'msnbot'] },
  { company: 'Apple (Siri, Spotlight, Apple Intelligence)', agents: ['Applebot', 'Applebot-Extended'] },
  { company: 'Meta (Meta AI)', agents: ['Meta-ExternalAgent', 'Meta-ExternalFetcher', 'FacebookBot'] },
  { company: 'Amazon (Alexa, Rufus)', agents: ['Amazonbot'] },
  { company: 'DuckDuckGo (Duck.ai)', agents: ['DuckAssistBot'] },
  { company: 'Mistral (Le Chat)', agents: ['MistralAI-User'] },
  { company: 'Cohere', agents: ['cohere-ai', 'cohere-training-data-crawler'] },
  { company: 'You.com', agents: ['YouBot'] },
  { company: 'Common Crawl (dataset used by many LLMs)', agents: ['CCBot'] },
  { company: 'ByteDance (Doubao)', agents: ['Bytespider'] },
  { company: 'Diffbot (knowledge graph)', agents: ['Diffbot'] },
  { company: 'AI2 (open research models)', agents: ['AI2Bot'] },
  { company: 'Timpi / Kagi / independent AI search', agents: ['Timpibot', 'Kagibot'] },
];

export const searchEngines = ['Googlebot', 'Googlebot-Image', 'Slurp', 'DuckDuckBot', 'YandexBot', 'Baiduspider', 'LinkedInBot', 'Twitterbot', 'facebookexternalhit'];

export const aiAgentCount = aiAgents.reduce((n, g) => n + g.agents.length, 0);
