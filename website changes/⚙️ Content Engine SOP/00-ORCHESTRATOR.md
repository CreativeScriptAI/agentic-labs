# Content Engine — Orchestrator (READ FIRST)

**What this is:** the top routing + enforcement layer for all website content. It does not contain the rules; it tells you which **module file** to open for the task at hand, then enforces the gates before anything ships. Built to be **LLM-agnostic**: any model, with no memory of this project, follows this file and produces the same on-brand, SEO-ready result.

**How it stays current:** each module file is the single source of truth for its domain. Update the module, never duplicate its rules here. This orchestrator only routes and enforces, so it automatically reflects whatever the modules say. Always open the actual module file at runtime; do not work from memory of it.

---

## GOLDEN RULES (always, non-negotiable)

1. **No em dashes or en dashes. Ever.**
2. **Write in the reader's words, not ours** (Module 01). Website/pillar pages use the buyer lexicon, not the personal/social founder voice.
3. **No fabricated stats, clients, or testimonials.** Verified or honest first-party framing only.
4. **Open the module file before writing that type of content.** Do not wing it from memory.
5. **Run the QA gates below before anything ships.** All must pass.

---

## ROUTER (task → module to open)

| Your task | Open |
|---|---|
| Any writing (pages, copy, outreach) | `modules/01-writing.md` |
| Keyword research, on-page SEO, SERP recon | `modules/02-seo.md` |
| Images, alt text, infographics | `modules/03-graphics-and-images.md` |
| Scroll animation, on-page motion, video / B-roll | `modules/04-motion-and-animation.md` |
| Colors, fonts, spacing, components, any new section | `modules/05-design-system.md` |
| Timely content, latest tech, trends | `modules/06-news-and-trends.md` |
| Building a full pillar/service page start to finish | `modules/07-production-pipeline.md` (runs all of the above in order) |
| The stage-gate process for a pillar page (flow → copy → build → validate) | `PILLAR-PAGE-WORKFLOW.md` + `templates/` |

Most pillar-page jobs: follow **PILLAR-PAGE-WORKFLOW.md** (the stage-gate: user flow → copy → build handoff → validate). It uses 07-production-pipeline for the copy stage and hands the build to an external LLM via `templates/build-handoff-template.md`.

---

## THE QA GATES (strict final check, log each pass/fail before shipping)

Nothing ships until all pass:

- **3-Factor Validator** — entertaining + valuable + emotional (all three).
- **AI-writing scan** — zero tells (see Module 01 kill-list).
- **Dash scan** — zero em/en dashes.
- **Fabrication scan** — no invented stats, clients, or testimonials.
- **Voice check** — reads like the buyer, not like us (Module 01).
- **SEO check** — target keyword in title/H1/slug, internal links present, no orphan page (Module 02).
- **Design check** — uses the design tokens + conventions (Module 05).

---

## SOURCE FILES (external depth, referenced by the modules)

| Domain | File |
|---|---|
| Tone of voice (personal) + AI-writing kill-list | `/Users/aditya/Desktop/agentic workflow practice/Aditya_content strategy/actions/content playbook/content_structure_rules.md` (+ `Signs-of-AI-Writing-Reference.md` beside it) |
| Website / buyer voice + lexicon | `SG experiment/04-copy/home-page-copy.md` + that project's `_COPY_LEXICON_ALL_SUBS.md` |
| Copywriting craft | `/Users/aditya/Desktop/agentic workflow practice/.cursor/rules/content writing/*.mdc` |
| Outreach | `/Users/aditya/Desktop/outreach:prospecting/Campaigns or clients/AI voice - Market_Expansion_Template/Playbooks/Outbound_OS_nicksarev/Outbound_OS.md` |
| Keyword research examples | `SG experiment/02-keyword-research/` |
| Website architecture (where pages go) | `SG experiment/03-architecture/website-architecture.md` |
| Video / B-roll SOPs | `/Users/aditya/Desktop/random ai experiments/heygen hyperframes (old video editing)/*.md` |
| Design tokens | `agentic-labs/tailwind.config.*`, `src/styles/`, `src/components/programmatic/` |

---

## UPDATE PROTOCOL (keep the engine in sync)

- Add or change a rule → edit the relevant **module file**, not this orchestrator.
- New content type → add a module file + one router row here.
- New external resource → add one row to the Source Files table.
- Keep this file lean: it routes and enforces, nothing else.
