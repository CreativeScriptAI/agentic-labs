import React from "react";
import Link from "next/link";

// Blog posts sat outside the pSEO link graph entirely, so nothing the blog earned
// flowed into the service pages. This block matches a post's category and title
// against cluster keywords and links out to the matching hub pages, giving the
// blog a real role in the internal link topology instead of being a dead end.

type Target = { label: string; href: string };

const CLUSTERS: { keys: string[]; links: Target[] }[] = [
  {
    keys: ["gohighlevel", "ghl", "highlevel", "crm", "agency", "pipeline"],
    links: [
      { label: "AI Voice Agent for GoHighLevel", href: "/ai-voice-agent-for-gohighlevel" },
      { label: "GoHighLevel AI Voice Pipeline", href: "/gohighlevel-ai-voice-pipeline" },
      { label: "AI SDR for GHL Agencies", href: "/ai-sdr-for-ghl-agencies" },
    ],
  },
  {
    keys: ["vapi", "retell", "bland", "elevenlabs", "synthflow", "voice platform", "tts", "speech"],
    links: [
      { label: "Vapi vs Retell vs Bland", href: "/vapi-vs-retell-vs-bland" },
      { label: "Vapi Alternative", href: "/vapi-alternative" },
      { label: "Best AI Voice Agents", href: "/best-ai-voice-agents-for-business" },
    ],
  },
  {
    keys: ["n8n", "zapier", "make.com", "make", "automation", "workflow", "lindy", "integration"],
    links: [
      { label: "n8n Content Automation Pipeline", href: "/n8n-content-automation-pipeline" },
      { label: "n8n vs Zapier vs Make", href: "/n8n-vs-zapier-vs-make" },
      { label: "Done-For-You n8n Automation", href: "/done-for-you-n8n-automation" },
    ],
  },
  {
    keys: ["instagram", "facebook", "whatsapp", "dm", "social", "meta", "comment"],
    links: [
      { label: "Instagram DM Automation", href: "/gohighlevel-instagram-dm-automation" },
      { label: "Facebook DM Automation", href: "/facebook-dm-automation-meta-api" },
      { label: "WhatsApp Automation", href: "/whatsapp-gohighlevel-automation" },
    ],
  },
  {
    keys: ["dental", "clinic", "medical", "med spa", "patient", "healthcare", "lab", "diagnostic"],
    links: [
      { label: "AI Receptionist for Dental Clinics", href: "/ai-receptionist-for-dental-clinic" },
      { label: "AI Receptionist for Med Spa", href: "/ai-receptionist-for-med-spa" },
      { label: "AI for Diagnostic Labs", href: "/ai-for-diagnostic-lab" },
    ],
  },
  {
    keys: ["restaurant", "salon", "gym", "fitness", "pest", "home service", "plumbing", "local"],
    links: [
      { label: "AI Receptionist for Restaurants", href: "/ai-receptionist-for-restaurant" },
      { label: "AI Booking Agent for Salons", href: "/ai-booking-agent-for-salon" },
      { label: "AI for Missed Calls", href: "/ai-for-missed-calls" },
    ],
  },
  {
    keys: ["hiring", "recruit", "interview", "candidate", "staffing"],
    links: [
      { label: "AI Hiring Agent for Staffing Agencies", href: "/ai-interviewer-for-blue-collar-hiring" },
      { label: "AI Dispatch for Home Services", href: "/ai-dispatch-agent-for-home-services" },
      { label: "AI SDR for GHL Agencies", href: "/ai-sdr-for-ghl-agencies" },
    ],
  },
  {
    keys: ["memory", "mem0", "context", "agentic", "rag", "llm", "production"],
    links: [
      { label: "What Is Agentic AI?", href: "/glossary/what-is-agentic-ai" },
      { label: "What Is Production-Grade AI?", href: "/glossary/what-is-production-grade-ai" },
      { label: "AI Agent vs AI System", href: "/glossary/ai-agent-vs-ai-system" },
    ],
  },
];

const FALLBACK: Target[] = [
  { label: "AI Voice Agent (overview)", href: "/ai-voice-agent/" },
  { label: "What Is an AI Voice Agent?", href: "/glossary/what-is-an-ai-voice-agent" },
  { label: "Our Services", href: "/services/" },
];

export const pickRelated = (haystack: string): Target[] => {
  const text = haystack.toLowerCase();
  const scored = CLUSTERS.map((c) => ({
    links: c.links,
    score: c.keys.reduce((n, k) => (text.includes(k) ? n + 1 : n), 0),
  })).filter((c) => c.score > 0);

  if (!scored.length) return FALLBACK;
  scored.sort((a, b) => b.score - a.score);

  // Take the best cluster, then top up from the next best so a post always
  // links into at least two topics rather than looping inside one.
  const out: Target[] = [...scored[0].links];
  if (scored[1]) {
    for (const l of scored[1].links) {
      if (out.length >= 4) break;
      if (!out.some((o) => o.href === l.href)) out.push(l);
    }
  }
  return out.slice(0, 4);
};

const RelatedServices: React.FC<{ title?: string; category?: string }> = ({ title, category }) => {
  const links = pickRelated(`${title || ""} ${category || ""}`);

  return (
    <aside className="mt-12 pt-8 border-t border-[#e7e6e4]">
      <p className="font-geist text-[12px] font-normal tracking-[0.02em] uppercase text-red-500 mb-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07]" />
        What we build around this
      </p>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="font-alte font-normal text-[15px] text-slate-600 hover:text-[#0A1128] transition-colors tracking-[-0.04em] underline underline-offset-2 decoration-slate-300"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RelatedServices;
