# Pillar Page Workflow (Stage-Gate)

How a pillar/service page goes from idea to live. Governed by `00-ORCHESTRATOR.md`. Roles are split so the quality-critical thinking is done by Claude and the token-heavy build by an external LLM, without losing quality.

**The seam that makes it work:** the Stage 2 build-handoff doc. If it is complete, the external LLM needs zero project memory. That doc is where quality is locked before the cheap model touches anything.

---

## The 4 stages (each ends in a gate = Aditya approval)

### STAGE 0 — User Flow  *(Claude)*
- Deliver the **macro page flow**: section-by-section skeleton, the argument arc (problem to promise to proof to CTA), the CTA path. A storyboard, NOT copy.
- Save to `00-user-flow.md`.
- **GATE:** Aditya approves the flow before any copy is written.

### STAGE 1 — Copy + Research  *(Claude)*
- Trigger: flow approved.
- Run keyword research (Module 02, DataForSEO, cost-approved) + live SERP recon, then write the full copy in the buyer voice per Module 01.
- Output in `01-copy.md`: meta (title/description/keywords), every section's copy, the internal-link plan, and an **ASSET SPEC** (per section: what image/infographic it needs, alt text, style, and whether Claude can capture it or the external LLM must build it).
- **GATE:** Aditya approves the copy. On "approved", auto-advance to Stage 2.

### STAGE 2 — Build Handoff  *(Claude writes handoff → External LLM builds)*
- Trigger: copy approved.
- Claude produces `02-build-handoff.md` from `templates/build-handoff-template.md`: the approved copy verbatim, exact file paths to create/edit, components to reuse, design tokens, the asset spec, SOP paths, and acceptance criteria. Self-contained: an LLM with zero memory can build from it alone.
- Claude also captures the "findable" images (Chrome extension) and drops them in the page folder with alt text.
- **External LLM** reads the handoff and builds the page on localhost: sections, infographics, motion, animation via code. It must NOT change the copy or invent stats.

### STAGE 3 — Validate + Push  *(Claude validator, internal)*
- Trigger: Aditya says "validate".
- Claude runs `templates/validation-checklist.md` against the built localhost output, logs pass/fail to `03-validation.md`.
- On pass + Aditya's go: push. If fail: report the exact fixes for the external LLM to redo.

---

## Roles (token strategy, quality never compromised)

| Work | Owner | Why |
|---|---|---|
| Strategy, user flow, keyword research, copy, asset spec | **Claude** | quality-critical, low-token, high-leverage |
| Capturing findable images, validation, push | **Claude** | needs judgement + repo/browser context |
| Code build, infographics, motion, animation, localhost iteration | **External LLM** | token-heavy, mechanical, governed by the handoff |

Do not move quality-critical work (copy, validation) to the external LLM. Do not keep the build in Claude (token waste).

---

## Per-page folder (lives in `SG experiment/05-build/<page-slug>/`)

```
<page-slug>/
├── status.md              (which stage/gate we are at)
├── 00-user-flow.md        (Stage 0)
├── 01-copy.md             (Stage 1: copy + meta + internal links + asset spec)
├── 02-build-handoff.md    (Stage 2: self-contained, for the external LLM)
├── 03-validation.md       (Stage 3: Claude's QA report)
└── assets/                (captured images + alt text)
```

`status.md` one-liner: `Stage: 1 (Copy) · Gate: awaiting Aditya approval`.

---

## Hard rules across all stages
- No stage skips its gate. Aditya approves flow, then copy, before build.
- The external LLM builds from the handoff only; it does not write or change copy, and it invents nothing.
- Every stage obeys the Golden Rules in `00-ORCHESTRATOR.md` (no dashes, buyer voice, no fabrication).
