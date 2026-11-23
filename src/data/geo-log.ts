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
  sources: string[];             // sources it cited, e.g. ["LinkedIn", "sanjeev.site"]
  mentionsMe: boolean | null;    // did it talk about me at all?
  clearIdentity: boolean | null; // one person, not mixed up with another Sanjeev Thakur?
  citesLinkedIn: boolean | null; // did it cite / link my LinkedIn profile?
  citesSite: boolean | null;     // did it cite / link this website? (tracked once the site is live)
  takeaway?: string;
}

const QUESTION = 'Who is Sanjeev Thakur, the SEO Specialist from Bengaluru, India?';

export const geoChecks: GeoCheck[] = [
  {
    id: 'chatgpt',
    assistant: 'ChatGPT',
    logo: '/images/ai-logos/openai.svg',
    status: 'Shows up',
    query: QUESTION,
    checkedOn: '23 Nov 2026',
    setting: 'Web search on',
    summary:
      'Described me as an SEO specialist at vSplash Techlabs in the Greater Bengaluru Area, and listed my on-page, technical, off-page and local SEO work, my interest in AEO and GEO, and my engineering degree from B.A. College of Engineering, Jamshedpur. It also said that other people named Sanjeev Thakur in Bengaluru (at TCS and Wells Fargo) are different people.',
    sources: ['LinkedIn'],
    mentionsMe: true,
    clearIdentity: true,
    citesLinkedIn: true,
    citesSite: false,
    takeaway:
      'My LinkedIn profile was its main source, and it named my company correctly. It did not find this website yet.',
  },
  {
    id: 'claude',
    assistant: 'Claude',
    logo: '/images/ai-logos/claude.svg',
    status: 'Not found',
    query: QUESTION,
    checkedOn: '23 Nov 2026',
    setting: 'Web search on · signed in, memory on',
    summary:
      'Said it searched twice and found no LinkedIn page, portfolio or article for an SEO specialist named Sanjeev Thakur in Bengaluru. It listed other people instead (SEO freelancers on Fiverr and Twine, and an SEO trainer) and said none matched the name, role and city.',
    sources: [],
    mentionsMe: false,
    clearIdentity: false,
    citesLinkedIn: false,
    citesSite: false,
    takeaway:
      'Its web search did not reach my LinkedIn profile. It was signed in to my own account, so the answer is not fully neutral.',
  },
  {
    id: 'gemini',
    assistant: 'Gemini',
    logo: '/images/ai-logos/gemini.svg',
    status: 'Not found',
    query: QUESTION,
    checkedOn: '23 Nov 2026',
    setting: 'Signed in',
    summary:
      'Said there is no widely documented public profile for an SEO specialist named Sanjeev Thakur in Bengaluru. It mentioned other people named Sanjeev Thakur in other fields, and two similarly named Bengaluru SEO providers, as different people.',
    sources: [],
    mentionsMe: false,
    clearIdentity: false,
    citesLinkedIn: false,
    citesSite: false,
    takeaway: 'Gemini does not know me yet and cited no sources.',
  },
  { id: 'copilot', assistant: 'Copilot', logo: '/images/ai-logos/copilot.svg', status: 'Not checked yet', query: QUESTION, sources: [], mentionsMe: null, clearIdentity: null, citesLinkedIn: null, citesSite: null },
  {
    id: 'ai-overviews',
    assistant: 'Google AI Overviews',
    logo: '/images/ai-logos/google.svg',
    status: 'Partly',
    query: QUESTION,
    checkedOn: '23 Nov 2026',
    setting: 'Google Search · signed in',
    summary:
      'Said no single person clearly matches, then listed my LinkedIn profile first: Greater Bengaluru Area, SEO since August 2020, vSplash Techlabs, and a B.Tech in Computer Science from B.A. College of Engineering, Jamshedpur. It also listed a Bangalore SEO agency and other SEO professionals named Sanjeev Thakur in Noida and Delhi.',
    sources: ['LinkedIn'],
    mentionsMe: true,
    clearIdentity: false,
    citesLinkedIn: true,
    citesSite: false,
    takeaway:
      'It found and cited my LinkedIn, but put me next to other people with similar names. In the normal results my LinkedIn ranked second, behind a different Sanjeev Thakur.',
  },
  {
    id: 'perplexity',
    assistant: 'Perplexity',
    logo: '/images/ai-logos/perplexity.svg',
    status: 'Shows up',
    query: QUESTION,
    checkedOn: '23 Nov 2026',
    setting: 'Web search on · signed out',
    summary:
      'Named linkedin.com/in/sanjeev165 as the best match and described my roles at vSplash Techlabs (since September 2023) and Baweja Media, my B.Tech in Computer Science, my Semrush certification, my on-page, technical and off-page work, and the team of four I mentor. It kept me apart from SEO namesakes in Mumbai, Thane and Chandigarh.',
    sources: ['LinkedIn'],
    mentionsMe: true,
    clearIdentity: true,
    citesLinkedIn: true,
    citesSite: false,
    takeaway:
      'The most complete answer so far, built almost entirely from LinkedIn. It said it found no personal website, so this site is not indexed there yet.',
  },
];

/** Optional one-line note about movement since the previous check (shown under the sources chart). */
export const geoTrendNote: string | null = null;
