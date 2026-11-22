/**
 * GEO log — "Do AI assistants know who I am?"
 *
 * HOW TO UPDATE (monthly):
 *  1. Open each assistant, ask exactly the `query` below (note whether web search is on).
 *  2. Fill in checkedOn, setting, status, summary, sources and the three yes/no signals.
 *  3. Write one honest takeaway. Save — the home page and /projects/this-website update.
 *
 * Leave `status: 'Not checked yet'` and the signals as `null` until you have really checked.
 * Results vary by session and by web-search setting: read them as a trend, not a score.
 */

/**
 * Pre-launch the site cannot be cited, so the tracker scores LinkedIn citations instead.
 * Flip to true once the site is live and indexed to score "Cites this site".
 */
export const trackSiteCitations = false;

export type GeoStatus = 'Shows up' | 'Partly' | 'Not found' | 'Not checked yet';

export interface GeoCheck {
  id: string;                    // used for the #geo-<id> anchor
  assistant: string;
  logo: string;                  // product logo (Lobe Icons, MIT) used only to identify the assistant
  status: GeoStatus;
  query: string;
  checkedOn?: string;            // e.g. "21 Nov 2026"
  setting?: string;              // e.g. "Web search on"
  summary?: string;              // paraphrase of what the assistant said
  sources: string[];             // sources it cited, e.g. ["LinkedIn", "sanjeevthakur.dev"]
  mentionsMe: boolean | null;    // did it talk about me at all?
  clearIdentity: boolean | null; // one person, not mixed up with another Sanjeev Thakur?
  citesLinkedIn: boolean | null; // did it cite / link my LinkedIn profile?
  citesSite: boolean | null;     // did it cite / link this website? (tracked once the site is live)
  takeaway?: string;
}

const QUESTION = 'Who is Sanjeev Thakur, the SEO Specialist from Bengaluru, India?';

export const geoChecks: GeoCheck[] = [
  { id: 'chatgpt', assistant: 'ChatGPT', logo: '/images/ai-logos/openai.svg', status: 'Not checked yet', query: QUESTION, sources: [], mentionsMe: null, clearIdentity: null, citesLinkedIn: null, citesSite: null },
  { id: 'claude', assistant: 'Claude', logo: '/images/ai-logos/claude.svg', status: 'Not checked yet', query: QUESTION, sources: [], mentionsMe: null, clearIdentity: null, citesLinkedIn: null, citesSite: null },
  { id: 'gemini', assistant: 'Gemini', logo: '/images/ai-logos/gemini.svg', status: 'Not checked yet', query: QUESTION, sources: [], mentionsMe: null, clearIdentity: null, citesLinkedIn: null, citesSite: null },
  { id: 'copilot', assistant: 'Copilot', logo: '/images/ai-logos/copilot.svg', status: 'Not checked yet', query: QUESTION, sources: [], mentionsMe: null, clearIdentity: null, citesLinkedIn: null, citesSite: null },
  { id: 'ai-overviews', assistant: 'Google AI Overviews', logo: '/images/ai-logos/google.svg', status: 'Not checked yet', query: 'Sanjeev Thakur SEO Specialist', sources: [], mentionsMe: null, clearIdentity: null, citesLinkedIn: null, citesSite: null },
  { id: 'perplexity', assistant: 'Perplexity', logo: '/images/ai-logos/perplexity.svg', status: 'Not checked yet', query: QUESTION, sources: [], mentionsMe: null, clearIdentity: null, citesLinkedIn: null, citesSite: null },
];

/** Optional one-line note about movement since the previous check (shown under the sources chart). */
export const geoTrendNote: string | null = null;
