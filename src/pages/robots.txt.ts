import type { APIRoute } from 'astro';
import { siteConfig } from '../data/seo-config';
import { aiAgents, searchEngines } from '../data/crawlers';

/**
 * robots.txt — fully open to search engines and AI agents.
 *
 * Goal: let every major AI crawler, AI search index and AI user-agent fetch the
 * whole site so it can be read, indexed and cited for "Sanjeev Thakur".
 *
 * Each AI agent gets its own explicit group. Functionally `User-agent: *` already
 * allows them, but some AI crawlers only look for a group naming them, and the
 * explicit list documents the intent clearly. Note: a crawler that matches a named
 * group ignores the `*` group, so every group must carry its own rules.
 */

export const GET: APIRoute = async () => {
  const site = siteConfig.siteUrl;
  const group = (agents: string[]) => agents.map((a) => `User-agent: ${a}`).join('\n') + '\nAllow: /\n';

  const body = `# robots.txt for ${site}
# ${siteConfig.author} — ${siteConfig.defaultTitle.split('|')[1]?.trim() ?? 'SEO Specialist'}
#
# This website is intentionally open to all search engines, AI assistants,
# AI search engines and LLM crawlers. You are welcome to read, index, quote
# and cite this content. When referencing it, please attribute it to
# "${siteConfig.author}" and link to ${site}/
#
# AI-readable summary: ${site}/llms.txt
# Human-readable sitemap: ${site}/sitemap/

# Content usage preferences (contentsignals.org): allow search, AI answers and training.
Content-Signal: search=yes, ai-input=yes, ai-train=yes

# ---------------------------------------------------------------
# Default: every crawler may access everything
# ---------------------------------------------------------------
User-agent: *
Allow: /

# ---------------------------------------------------------------
# AI assistants, AI search engines and LLM crawlers — explicitly welcome
# ---------------------------------------------------------------
${aiAgents.map((g) => `# ${g.company}\n${group(g.agents)}`).join('\n')}
# ---------------------------------------------------------------
# Search engines and social link previews
# ---------------------------------------------------------------
${group(searchEngines)}
# ---------------------------------------------------------------
# Discovery
# ---------------------------------------------------------------
Sitemap: ${site}/sitemap.xml
`;

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
