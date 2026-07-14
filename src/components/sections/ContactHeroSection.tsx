import React from "react";
import Image from "next/image";
import Link from "next/link";
import BracketButton from "src/components/BracketButton";

const CAL_LINK = "https://cal.com/ai-aditya/30min";

interface ContactHeroSectionProps {
  noPadding?: boolean;
}

const CheckSvg = () => (
  <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
);

const ContactHeroSection = ({ noPadding = false }: ContactHeroSectionProps) => {
  const expectations = [
    { title: "A clear roadmap", description: "Tailored to your business, not a generic template." },
    { title: "Technical feasibility check", description: "Find out if your idea can actually work, before you spend." },
    { title: "Time and cost estimate", description: "No hidden surprises. You will know the number upfront." },
    { title: "Integration plan", description: "How your AI fits the tools you already use: CRM, WhatsApp, GHL, Slack, your site." },
  ];

  const credibility = [
    "10+ production AI systems shipped",
    "$250K+ ROI unlocked for clients",
    "50+ founders across the globe",
  ];

  return (
    <section className={`bg-[#F9F6F4] relative overflow-hidden ${noPadding ? "" : "pt-28 pb-16 sm:pt-32 sm:pb-20"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: who we are + CTA */}
          <div>
            <div className="flex items-center gap-2 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07]" />
              <span className="font-geist text-[12px] font-normal tracking-[0.02em] uppercase text-red-500">
                Free 30-minute roadmap call
              </span>
            </div>

            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.4rem] font-alte font-normal text-[#0A1128] leading-[1.2] tracking-[-0.04em] mb-6">
              Get a clear plan for AI in your business. In 30 minutes.
            </h1>

            <p className="font-alte font-normal text-[15px] sm:text-base text-slate-600 max-w-xl mb-8 leading-[1.5] tracking-[-0.04em]">
              No pitch, no jargon. We look at where you actually lose time and money, then hand you a roadmap you can act on, whether you build it with us or not.
            </p>

            {/* Credibility card */}
            <div className="flex items-start gap-4 border-t border-[#e7e6e4] pt-6 mb-8">
              <Link
                href="https://www.linkedin.com/in/aditya-pandey-7588021b1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <div className="w-16 h-16 rounded-full p-1 border border-[#e7e6e4] bg-white transition-transform hover:scale-105">
                  <Image
                    src="/AiClarity/aditya-photo.png"
                    alt="Aditya Pandey, founder of Agentic AI Labs"
                    width={120}
                    height={120}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </Link>
              <div>
                <p className="font-alte font-normal text-[15px] text-[#0A1128] tracking-[-0.04em]">
                  Run by <span className="font-medium">Aditya Pandey</span>. Designer, builder, founder.
                </p>
                <ul className="mt-2 flex flex-col sm:flex-row sm:flex-wrap gap-x-4 gap-y-1">
                  {credibility.map((c) => (
                    <li key={c} className="font-alte font-normal text-[13px] text-slate-500 tracking-[-0.04em]">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <BracketButton label="Book my free roadmap call" href={CAL_LINK} variant="primary" external />

            <p className="font-alte font-normal text-[13px] text-slate-400 mt-4 tracking-[-0.04em]">
              Takes 60 seconds to book. You keep the roadmap either way.
            </p>
          </div>

          {/* Right: what you walk away with */}
          <div className="bg-white rounded-none border border-[#e7e6e4] p-8">
            <p className="font-geist text-[11px] font-normal tracking-[0.02em] uppercase text-slate-400 mb-6">
              What you walk away with
            </p>
            <ul className="space-y-5">
              {expectations.map((item, i) => (
                <li key={item.title} className={`flex gap-4 ${i > 0 ? "border-t border-[#e7e6e4] pt-5" : ""}`}>
                  <CheckSvg />
                  <div>
                    <p className="font-alte font-normal text-[15px] text-[#0A1128] leading-[1.3] tracking-[-0.04em]">{item.title}</p>
                    <p className="font-alte font-normal text-[13px] text-slate-500 leading-[1.5] tracking-[-0.04em] mt-1">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
