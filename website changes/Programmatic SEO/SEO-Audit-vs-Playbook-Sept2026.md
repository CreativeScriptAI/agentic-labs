# Agentic AI Labs SEO Audit: The Islands Problem

## 1. Verdict

**Overall: 4/10.**

Here is the blunt truth. You built a large, well-structured content operation and then wired the most valuable half of it to nothing. The strategy right now is producing pages faster than it is connecting them, so you have breadth without ranking power. Your slugs are best-in-class, your above-fold copy is genuinely sharp, and your LLM/AEO plumbing (llms.txt, markdown endpoints, a real free tool, Perplexity referrals already landing) is ahead of most competitors. None of that matters while the pages you actually want to rank cannot receive authority. The single biggest thing killing you is **contextual orphaning**: 88 pages are stuck in discovered/crawled-not-indexed, 19 of your highest-intent pages carry zero in-body inbound links, and every page that earns organic traffic (the voice/GHL cluster at in=54, the glossary at in=14 to 23) is walled off from the entire Singapore lead-gen pivot and the forward-deployed-engineers pillar you are now selling. You are pushing authority into a cluster that is sealed shut. Fix the internal linking and the brand-bloated titles and this becomes a 7. Leave them and you will keep publishing pages that Google never indexes.

## 2. Where We Stand vs The Playbook

| Principle area | Our state | Score | The fix |
|---|---|---|---|
| Indexing / cornerstoning (6, 7) | 88 pages not indexed; 19 money pages at in-body inbound=0; traffic pages link to none of them | 3/10 | In-prose links FROM ranking pages (voice in=54, glossary in=19-23) INTO the orphans |
| Topical authority clusters (2, 3) | Clusters designed but wired through footer/mega-menu; hub-spoke wheel broken both directions; two disconnected topic empires | 4/10 | Move hub-to-spoke links into body prose; close the spoke-to-hub loop; decide one brand or two |
| Titles / slugs / H1 (8, 17) | Slugs excellent. 95/113 titles carry brand; 81/113 over 62 chars; H1s inconsistent, /services has 2 | 5/10 | Strip brand suffix template-wide; cut titles to <=60; one keyword-led H1 per template |
| FAQ / glossary / thin content (9, 10) | Real 5-term glossary done right, but 12-question FAQPage schema bundled on single URLs | 4/10 | Split bundled schema; extract ~20-30 glossary terms already written in accordions |
| Clarity / CTR / page-2 (11, 12, 18) | Above-fold clarity strong; zero TLDRs anywhere; click-winning titles truncated | 6/10 | Add TLDR boxes (the named 33% lift); un-truncate titles; harvest GSC page-2 phrases as H2s |
| Authority / backlinks / LLM (4, 14, 15, 16) | Strong LLM groundwork; near-zero backlinks; no partnership motion; creativescript.org leak in tool footer | 4/10 | Remove the entity leak; turn the AI Visibility Checker into the outreach centerpiece; add outbound links |

## 3. The #1 Problem, Explained

Your site is two islands with no bridge, and the treasure is buried on the island nobody visits.

Island A earns traffic: the India voice-agent/GHL cluster (/ai-voice-agent at in=54) and the 5-term glossary (in=14 to 23). These pages are indexed and ranking. Island B is the business you are actually selling now: the Singapore lead-gen hub, its 9 industry verticals, the forward-deployed-engineers pillar, and the marketing-services set. Almost every page on Island B sits at in-body inbound = 0.

Principle 6 is unambiguous about what happens next. Only pages that get clicks get indexed. A page with no clicks gets triaged out and never re-crawled. Sitemaps do not force indexing. The one reliable lever to rescue a discovered-not-indexed page is a backlink, or an internal link from a page that already gets organic traffic. You have 88 pages in that bucket precisely because nothing that ranks links to them in prose.

The links that exist do not count. Your hub /lead-generation-agency-singapore (in=17) does list all 9 verticals, and /forward-deployed-engineers surfaces 15+ SG pages, but they render as templated card grids and footer entries. Google classifies those as boilerplate, not context. So they pass no cornerstoning authority (principle 7), which is why every vertical still scores in=0 despite "being linked." Worse, the chain runs one direction only: dental links sideways to /ai-receptionist-singapore but never back up to the hub, so the broad to specific to broad context loop never closes.

The homepage, your single highest-authority page, links in-body only to /agents-repo, /services, /ai-clarity-workshop, /agent/patientlyai and cal.com. It hands nothing to the money cluster. /ai-voice-agent at in=54, your most-linked page, has zero links to any Singapore page, the FDE pillar, /mcp, or /ai-memory-system. The authority is sitting there, trapped, one descriptive sentence away from flowing where you need it.

## 4. Prioritized Roadmap

### P0 — This week

**1. Strip the brand suffix from every non-brand title (template change).**
Remove ` | Agentic AI Labs`, ` | Agentic AI`, ` | tryagentic.ai`, and ` Glossary` tails from all titles EXCEPT /contact, /about, /privacy-policy, and pricing/support. One template change reclaims ~18 chars on ~90 pages, ends brand dilution, and un-truncates your click-winners in one move. The differentiators that survive matter: "Booked Calls, Not Lists," "Rankings That Book Calls, Not Reports." Start with /lead-generation-agency-singapore, /seo-agency-singapore, /answer-engine-optimization, /appointment-booking-ai, and all 12 SG lead-gen verticals. Expected effect: recovered keyword budget plus most truncation fixed sitewide.

**2. Bridge the two islands from your actual traffic pages.**
This is the whole game. Concrete anchors:
- On /ai-voice-agent (in=54): in-prose link to /indian-ai-voices (anchor: "browse our Indian AI voices library," currently in=0, a free win) and to /ai-receptionist-singapore (anchor: "AI receptionist in Singapore").
- On /glossary/what-is-an-ai-receptionist (in=19) and /what-is-an-ai-voice-agent (in=23): a body sentence linking to /lead-generation-agency-singapore (anchor: "lead generation agency in Singapore") and /ai-receptionist-singapore.
- On /ai-voice-agent-for-gohighlevel (in=16): in-body links to /ai-implementation-partner-singapore (anchor: "AI implementation partner in Singapore"), /forward-deployed-engineers, /ai-memory-system (use the existing MCP/memory sentence), and /mcp. This page already says "MCP" in prose without linking it.

Expected effect: the SG cluster and FDE pillar start receiving real contextual authority from indexed, ranking pages. This is the direct fix for the 88 not-indexed bucket.

**3. Get /forward-deployed-engineers out of orphan status.**
In-prose body links from the homepage (anchor: "forward-deployed engineering team," near the existing "Our agency partnership" line), /services (in=58), and /about (in=36). One descriptive anchor each, not a grid entry.

**4. Add TLDR answer boxes to the four money pages.**
/lead-generation-agency-singapore, /seo-agency-singapore, /ai-visibility-checker, /forward-deployed-engineers. Two to three lines directly under the H1: one bolded sentence answering "what is this and what do I get," then the CTA. Principle 18 names this as a 33% conversion lift and it exists on zero pages today. For /ai-visibility-checker specifically: "See in 30 seconds whether ChatGPT, Perplexity and Gemini name your business, and why they don't."

**5. Remove the creativescript.org credit from the AI Visibility Checker footer.**
It is an authority leak and an entity-confusion signal on a new domain. Replace with an Agentic AI Labs / Aditya Pandey byline. Same-day fix. (Memory already flags this domain as a wrong-entity leak.)

**6. Split the bundled FAQPage schema.**
Remove the single combined FAQPage JSON-LD (1 FAQPage / 12 Question / 12 Answer) from /answer-engine-optimization and /lead-qualification. Keep the visible accordions for users; strip the combined schema so you stop telling Google one URL owns 12 different definitional queries (principle 9).

### P1 — This month

**7. Close the cornerstone loop on all 9 verticals.**
Add an in-prose upward link from each vertical (dental, law-firms, aesthetic-clinics, fitness-studios, property-agents, tuition-centres, logistics, renovation-contractors, b2b-saas) back to /lead-generation-agency-singapore with anchor "lead generation agency, Singapore," plus 2 to 3 sibling links. Convert the hub's vertical card grid into an in-prose paragraph that names and links each vertical with a descriptive sentence, so the links count as contextual.

**8. Build the 4-service marketing cluster.**
Get /content-marketing-singapore (in=0) and /social-media-marketing-singapore (in=0) off zero. In-body links to both from /seo-agency-singapore (in=7), /google-ads-agency-singapore (in=2), and /answer-engine-optimization. Cross-link SEO to content to social to Google Ads to AEO. Also link INTO /answer-engine-optimization (only in=2) from the SG hub and one or two trafficked voice pages, and have AEO link DOWN to /content-marketing-singapore and /ai-visibility-checker.

**9. Extract 20 to 30 glossary terms you have already written.**
The copy is sitting inside the AEO and lead-qualification accordions. One term per page, slug=title=H1: what-is-aeo, aeo-vs-geo-vs-seo, what-is-speed-to-lead, what-is-lead-qualification, mql-vs-sql, what-is-a-product-qualified-lead, what-is-bant, lead-qualification-vs-lead-scoring, what-is-pdpa, what-is-the-psg-grant. This is extraction, not writing. Then link each new glossary page from the body of the ranking page it belongs to (what-is-aeo from inside /answer-engine-optimization, PDPA/PSG from the SG lead-gen pages) so each earns 1+ in-body inlink from a trafficked page. Fix the /glossary 307 and render a server-side A-to-Z term list so the hub is a real crawlable directory.

**10. Standardize one keyword-led H1 per template.**
On the SG money pages and /answer-engine-optimization, promote the exact-match keyword to the H1 and demote the clever line ("You don't need more leads..." / "Your buyers ask AI who to hire") to an H2 or dek. Fix /services: remove the second H1, make the remaining one keyword-led ("AI Marketing and Sales Services").

**11. Rewrite the ~81 over-length titles to <=60 chars, keyword front-loaded.**
Two parts max, kill the three-part "Keyword | benefit | brand" structures. Example: "Lead Generation Agency Singapore: Booked Calls, Not Lists" (56 chars).

**12. Start the partnership/reciprocal link motion.**
Fix the outbound-link vacuum first: hyperlink the sources /answer-engine-optimization already cites (Pew, Gartner, Princeton/IIT Delhi, SparkToro). You cannot ask for a link back from someone you have never linked to (principle 15). Then pitch the AI Visibility Checker, your one genuinely link-worthy asset, to SG SME newsletters and GHL agency communities. Earn links with varied anchors, in-body, never sitewide footers (principle 14). Handle sister properties (unsafe.design, agentikai.info) as a handful of contextual varied-anchor links, not a footer stamp.

**13. Set up the monthly GSC page-2 harvest.**
Pull positions 11 to 20 impression phrases per money page, add them as H2s on that same URL (principle 11). Surface the buried "COMMON QUESTIONS" items as scannable H2s near the top of the body.

### P2 — Later

- Wire the remaining SG service orphans (/ai-automation-singapore, /seo-packages-singapore, /affordable-web-design-singapore, /ecommerce-marketing-singapore) with one in-prose link each from a related better-linked SG page.
- Resolve the two-topic-empire question deliberately: build a bridge hub or formally separate India voice from SG marketing. Do not leave them half-connected leaking authority.
- Prune or merge the long tail of near-duplicate platform-alternative and GHL-automation pages sitting at in=4 with thin cross-linking.
- Give high-value FAQs their own URLs where they are real queries ("How do I rank in ChatGPT," "How do I get cited by Perplexity," "Does llms.txt help") with one FAQPage schema per single-question page.
- Drop the all-caps H1 styling to title case for readability and CTR.
- Publish a small original-data study ("we ran 100 SG businesses through the AI Visibility Checker, X% are invisible to ChatGPT") for citations and AEO compounding.
- Audit slug/title mismatches (/best-ai-voice-agents-for-business) and reconsider cryptic keyword-free slugs (/mcp, /os1-meta-automation).

## 5. What We Are Doing RIGHT

Honest keep-doing list. Do not break these while fixing the above.

- **Slugs are best-in-class.** Clean, keyword-led, hyphenated, one primary keyword each, no dates, no brand, no cruft, across the entire SG cluster and glossary. This is the one dimension the site nails outright. Do not touch them.
- **Above-fold clarity is the strongest thing on the site.** Every money page front-loads a sharp plain-English answer and a benefit-led CTA. "A ranking report is not a result. We build the SEO system that books the call." That is exactly principle 18. CTAs are clear and benefit-framed; the click-in from the SERP is the weak point, not the funnel.
- **The glossary is a real, correctly-built cluster.** Five terms, well interlinked in-body (in=14 to 23), footer-linked sitewide with descriptive anchors. It proves the team can build clusters when links sit in prose. The fix is to do more of this, not change it.
- **The LLM/AEO groundwork is genuinely ahead.** llms.txt, markdown endpoints, Accept:text/markdown, /mcp, a real no-login AI Visibility Checker, and an AEO page citing hard sources. Perplexity referrals are already landing, which proves query fan-out is live. This is the correct principle-16 play and it is working.
- **The definitional copy already exists.** The AEO and lead-qualification pages front-load clean one-sentence definitions. Your glossary buildout is extraction, not a writing project.
- **Horizontal use-case scaling is broad and on-strategy.** 10+ industry lead-gen pages, 30+ voice/automation use cases. The pages exist. They just need internal PageRank to convert breadth into rankings, which is the P0 work above.