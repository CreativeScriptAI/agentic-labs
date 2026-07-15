import React from "react";
import Link from "next/link";
import { CONFIG } from "site.config";

// ─── Complete footer sitemap — lean nav up top, deep crawlable map down here ──────────────
// Mirrors every programmatic + static page so all routes have a crawlable home and link
// equity (monday/Notion/Decagon model). See Information Architecture Research.

type FootLink = { name: string; to: string };
type FootColumn = { heading: string; links: FootLink[] };

const FOOTER_COLUMNS: FootColumn[] = [
  {
    heading: "AI Sales Agent",
    links: [
      { name: "Overview", to: "/ai-voice-agent/" },
      { name: "Global", to: "/ai-voice-agent-global/" },
      { name: "Never miss a call", to: "/ai-for-missed-calls/" },
      { name: "Recover no-shows", to: "/ai-show-up-agent-for-online-coaching/" },
      { name: "Confirm COD orders", to: "/ai-cod-confirmation-agent/" },
      { name: "Done-for-you setup", to: "/done-for-you-ai-voice-agent/" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { name: "Dental Clinics", to: "/ai-receptionist-for-dental-clinic/" },
      { name: "Dental Practices", to: "/ai-receptionist-for-dental-practices/" },
      { name: "Medical Clinics", to: "/ai-receptionist-for-medical-clinics/" },
      { name: "Med Spas", to: "/ai-receptionist-for-med-spa/" },
      { name: "Diagnostic Labs", to: "/ai-for-diagnostic-lab/" },
      { name: "Restaurants", to: "/ai-receptionist-for-restaurant/" },
      { name: "Salons", to: "/ai-booking-agent-for-salon/" },
      { name: "Travel Agencies", to: "/ai-booking-agent-for-travel-agencies/" },
      { name: "Gym & Fitness", to: "/ai-for-gym-fitness/" },
    ],
  },
  {
    heading: "Industries (cont.)",
    links: [
      { name: "Home Services", to: "/ai-dispatch-agent-for-home-services/" },
      { name: "Pest Control", to: "/ai-for-pest-control/" },
      { name: "Real Estate", to: "/ai-showing-coordinator-for-real-estate/" },
      { name: "GHL Agencies (SDR)", to: "/ai-sdr-for-ghl-agencies/" },
      { name: "eCommerce Support", to: "/ai-support-rep-for-ecommerce/" },
      { name: "Coaching Institutes", to: "/ai-for-coaching-institute/" },
      { name: "Immigration Consultants", to: "/ai-for-immigration-consultant/" },
      { name: "Recruiting Agencies", to: "/ai-interviewer-for-recruiting-agencies/" },
      { name: "Blue-Collar Hiring", to: "/ai-interviewer-for-blue-collar-hiring/" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { name: "vs Vapi", to: "/vapi-alternative/" },
      { name: "vs Retell AI", to: "/retell-ai-alternative/" },
      { name: "vs Bland AI", to: "/bland-ai-alternative/" },
      { name: "vs GoHighLevel calling", to: "/gohighlevel-ai-calling-alternative/" },
      { name: "vs GHL AI chatbot", to: "/ghl-ai-chatbot-alternative/" },
      { name: "AI vs human receptionist", to: "/ai-vs-human-receptionist/" },
      { name: "Best AI: dental", to: "/best-ai-tools-for-dental-practices/" },
      { name: "Best AI voice agents", to: "/best-ai-voice-agents-for-business/" },
      { name: "Best AI: GoHighLevel", to: "/best-ai-for-gohighlevel-agencies/" },
      { name: "Best AI: recruiting", to: "/best-ai-tools-for-recruiting-agencies/" },
    ],
  },
  {
    heading: "Integrations & Regional",
    links: [
      { name: "GoHighLevel", to: "/ai-voice-agent-for-gohighlevel/" },
      { name: "HubSpot", to: "/ai-agent-hubspot-integration/" },
      { name: "Salesforce", to: "/ai-agent-salesforce-integration/" },
      { name: "AI Voice Agent (Hindi)", to: "/ai-voice-agent-hindi/" },
      { name: "Indian AI Voices", to: "/indian-ai-voices/" },
    ],
  },
  {
    heading: "GoHighLevel Builds",
    links: [
      { name: "GHL AI Voice Pipeline", to: "/gohighlevel-ai-voice-pipeline/" },
      { name: "Speed to Lead", to: "/gohighlevel-speed-to-lead-automation/" },
      { name: "Cold Email Automation", to: "/gohighlevel-cold-email-automation/" },
      { name: "AI Appointment Booking", to: "/ai-appointment-booking-voice-agent/" },
      { name: "Done-for-You GHL", to: "/done-for-you-gohighlevel-automation/" },
      { name: "Vapi + GoHighLevel", to: "/vapi-gohighlevel-integration/" },
      { name: "Retell + GoHighLevel", to: "/retell-gohighlevel-integration/" },
      { name: "Bland Outbound Pipeline", to: "/bland-ai-outbound-pipeline/" },
      { name: "ElevenLabs Production", to: "/elevenlabs-voice-agent-production/" },
    ],
  },
  {
    heading: "Tools & Social Automations",
    links: [
      { name: "n8n Content Pipeline", to: "/n8n-content-automation-pipeline/" },
      { name: "n8n + GHL Email", to: "/n8n-gohighlevel-email-pipeline/" },
      { name: "AI Social Media Pipeline", to: "/ai-social-media-content-pipeline/" },
      { name: "Fix Broken n8n Automation", to: "/n8n-automation-keeps-breaking/" },
      { name: "Zoom to Proposal", to: "/zoom-meeting-proposal-automation/" },
      { name: "Make Zoom Automation", to: "/make-zoom-proposal-automation/" },
      { name: "Facebook DM (GHL)", to: "/gohighlevel-facebook-dm-automation/" },
      { name: "Instagram DM (GHL)", to: "/gohighlevel-instagram-dm-automation/" },
      { name: "Facebook DM (Meta API)", to: "/facebook-dm-automation-meta-api/" },
      { name: "Instagram Comments AI", to: "/instagram-comment-automation-ai/" },
      { name: "WhatsApp Automation", to: "/whatsapp-gohighlevel-automation/" },
      { name: "OS.1 Meta Automation", to: "/os1-meta-automation/" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { name: "Blog", to: "/blog/" },
      { name: "AI Agents Repo", to: "/agents-repo/" },
      { name: "AI Memory System", to: "/ai-memory-system/" },
      { name: "AI Clarity Workshop", to: "/ai-clarity-workshop/" },
      { name: "What is an AI Receptionist?", to: "/glossary/what-is-an-ai-receptionist/" },
      { name: "What is an AI Voice Agent?", to: "/glossary/what-is-an-ai-voice-agent/" },
      { name: "What is Agentic AI?", to: "/glossary/what-is-agentic-ai/" },
      { name: "AI Agent vs AI System", to: "/glossary/ai-agent-vs-ai-system/" },
      { name: "What is Production-Grade AI?", to: "/glossary/what-is-production-grade-ai/" },
    ],
  },
];

const COMPANY_LINKS: FootLink[] = [
  { name: "Services", to: "/services/" },
  { name: "About", to: "/about/" },
  { name: "Contact", to: "/contact/" },
  { name: "Privacy Policy", to: "/privacy-policy/" },
];

const FooterSection = () => {
  return (
    <div
      className="py-20"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Complete sitemap grid ──────────────────────────────────────────── */}
        <nav
          aria-label="Footer sitemap"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8 mb-12 text-left"
        >
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-geist font-normal text-[12px] uppercase tracking-[0.02em] text-gray-400 mb-3">
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      href={l.to}
                      className="font-alte font-normal text-[15px] tracking-[-0.04em] text-gray-600 hover:text-gray-900 transition-colors leading-snug"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="border-t border-[#e7e6e4] pt-10 text-center">
          {/* Company Branding */}
          <div className="mb-8">
            <h2 className="font-alte font-normal text-3xl sm:text-4xl text-gray-900 mb-4 tracking-[-0.04em]">
              Agentic AI Labs
            </h2>
            <p className="font-alte font-normal text-gray-600 text-[15px] tracking-[-0.04em]">
              We build AI systems that work.
            </p>
          </div>

          {/* Company / utility links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {COMPANY_LINKS.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className="font-alte font-normal text-gray-500 hover:text-gray-900 text-[15px] tracking-[-0.04em] transition-colors"
              >
                {l.name}
              </Link>
            ))}
            <Link
              href="https://cal.com/ai-aditya/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="font-alte font-normal text-gray-500 hover:text-gray-900 text-[15px] tracking-[-0.04em] transition-colors"
            >
              Book a Call
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            {/* GitHub */}
            <Link
              href={`https://github.com/${CONFIG.profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200 p-2 rounded-none hover:bg-[#efece9]"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>

            {/* Twitter/X */}
            <Link
              href="https://x.com/tryagentikai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200 p-2 rounded-none hover:bg-[#efece9]"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>

            {/* YouTube */}
            <Link
              href="https://www.youtube.com/@agentailabs/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200 p-2 rounded-none hover:bg-[#efece9]"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/company/creativescript/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200 p-2 rounded-none hover:bg-[#efece9]"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>

          {/* Attribution */}
          <div className="text-center">
            <p className="font-alte font-normal text-gray-500 text-[12px] tracking-[-0.04em]">
              Crafted by{" "}
              <Link
                href="https://creativescript.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 transition-colors duration-200"
              >
                creativescript.org
              </Link>
            </p>
            <p className="font-alte font-normal text-gray-500 text-[12px] tracking-[-0.04em] mt-1">
              © 2026 Agentic AI Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
