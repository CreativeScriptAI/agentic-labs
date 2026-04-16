import Link from "next/link";
import OptimizedImage from "src/components/OptimizedImage";

const CAL_LINK = "https://cal.com/ai-aditya/30min";

type Props = {
  productName?: string;
  variant?: "dark" | "light";
};

// ── Shared check icon, styled per variant ──────────────────────────────────────
const CheckIcon = ({ light }: { light?: boolean }) => (
  <div
    className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
      light ? "bg-blue-600" : "bg-[#FCCA07]"
    }`}
  >
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
      <polyline
        points="2 6 5 9 10 3"
        stroke={light ? "#fff" : "#0A1128"}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const FounderTeamSection = ({ productName = "Loop", variant = "dark" }: Props) => {
  const isLight = variant === "light";

  const proofTags = [
    { label: "10+ AI agents shipped to production" },
    { label: "$250K+ ROI delivered for clients" },
    { label: "50+ founders across 12 countries" },
  ];

  const capabilities = [
    `Built production AI voice & text systems — not just demos`,
    "Handle real-world accents, interruptions, and edge cases",
    "Deliver measurable ROI — fully done-for-you, zero dev required",
  ];

  // ── LIGHT VARIANT (About page) ───────────────────────────────────────────────
  if (isLight) {
    return (
      <div
        className="py-16 sm:py-20"
        style={{
          backgroundColor: "#F9F6F4",
          width: "calc(100% + 2rem)",
          marginLeft: "-1rem",
          marginRight: "-1rem",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-[11px] sm:text-xs tracking-widest text-red-500 uppercase mb-2 font-sfpro">
              The Team Behind It All
            </p>
            <h2 className="font-mondwest text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-3">
              Who&apos;s building this?
            </h2>
            <p className="font-sfpro text-slate-500 font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Agentic AI Labs was started by engineers who got tired of seeing promising AI projects die in pilot purgatory. We ship production systems — not proof-of-concepts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ── Founder card ─────────────────────────────────────────────── */}
            <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-6 sm:p-8 flex flex-col gap-6">
              {/* Photo + identity */}
              <div className="flex items-start gap-5">
                <Link
                  href="https://www.linkedin.com/in/aditya-pandey-7588021b1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                >
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-2 ring-blue-100 transition-transform group-hover:scale-105">
                      <OptimizedImage
                        src="/AiClarity/aditya-photo.png"
                        alt="Aditya Pandey — Founder, Agentic AI Labs"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                        priority={false}
                        sizes="96px"
                        quality={90}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#0077B5] border-2 border-white flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                  </div>
                </Link>

                <div>
                  <p className="font-sfpro font-semibold text-slate-900 text-lg leading-tight">Aditya Pandey</p>
                  <p className="font-sfpro text-slate-500 text-sm mt-0.5">Founder, Agentic AI Labs</p>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-sfpro font-medium tracking-wide">
                    Designer · Builder · Founder
                  </span>
                </div>
              </div>

              {/* Bio */}
              <p className="font-sfpro text-slate-500 text-sm leading-relaxed font-light">
                Hi, I&apos;m Aditya — I started Agentic AI Labs because I kept seeing great businesses lose leads to missed calls and slow follow-ups. Every system we ship is something we&apos;d bet our own business on.
              </p>

              {/* Proof tags */}
              <div className="space-y-2">
                {proofTags.map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-100 px-4 py-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="font-sfpro text-slate-700 text-sm">{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Team card ──────────────────────────────────────────────────── */}
            <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-6 sm:p-8 flex flex-col gap-6">
              <div>
                <p className="text-[10px] font-sfpro font-black tracking-[0.2em] uppercase text-red-500 mb-3">
                  Agentic AI Labs Team
                </p>
                <h3 className="font-mondwest text-slate-900 text-2xl sm:text-3xl leading-snug mb-3">
                  Real engineers.<br />Real experience.<br />Real results.
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-sfpro font-medium">
                    10+ production AI agents
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-sfpro font-medium">
                    Core team: 10+ experts
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {capabilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon light />
                    <p className="font-sfpro text-slate-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-slate-100">
                <p className="font-sfpro text-slate-400 text-xs mb-4 leading-relaxed">
                  We build, deploy, and maintain your AI system — you just run your business.
                </p>
                <a
                  href={CAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white font-sfpro font-semibold text-sm transition-all hover:bg-slate-700 active:scale-[0.98] whitespace-nowrap"
                >
                  Book a Free Discovery Call
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── DARK VARIANT (Voice agent pages) ─────────────────────────────────────────
  return (
    <section className="py-24 sm:py-32 bg-[#0A1128] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#FCCA07]/[0.03] blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section label */}
        <p className="text-xs font-bold tracking-[0.15em] uppercase mb-4 flex items-center gap-2 text-blue-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
          The Team Behind {productName}
        </p>

        <h2 className="font-eb-garamond italic text-white text-4xl sm:text-5xl leading-[1.05] mb-4 max-w-2xl">
          Built by engineers who&apos;ve{" "}
          <span className="text-[#FCCA07]">already shipped it.</span>
        </h2>
        <p className="text-white/50 text-lg mb-16 max-w-xl leading-relaxed">
          {productName} isn&apos;t a new experiment. We&apos;ve built 10+ production AI agents for real businesses before we launched this product.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ── Founder card ────────────────────────────────────────────────── */}
          <div className="rounded-[32px] bg-white/[0.05] border border-white/10 p-8 sm:p-10 flex flex-col gap-8">
            {/* Photo + identity */}
            <div className="flex items-start gap-6">
              <Link
                href="https://www.linkedin.com/in/aditya-pandey-7588021b1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 group"
              >
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full ring-2 ring-[#FCCA07]/40 ring-offset-2 ring-offset-transparent overflow-hidden transition-transform group-hover:scale-105">
                    <OptimizedImage
                      src="/AiClarity/aditya-photo.png"
                      alt="Aditya Pandey — Founder, Agentic AI Labs"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                      priority={false}
                      sizes="96px"
                      quality={90}
                    />
                  </div>
                  {/* LinkedIn indicator */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#0077B5] border-2 border-[#0A1128] flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </div>
              </Link>

              <div>
                <p className="text-white font-bold text-lg leading-tight">Aditya Pandey</p>
                <p className="text-white/50 text-sm mt-0.5">Founder, Agentic AI Labs</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-[#FCCA07]/10 border border-[#FCCA07]/20 text-[#FCCA07] text-[11px] font-bold tracking-wide">
                  Designer · Builder · Founder
                </span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-white/60 text-sm leading-relaxed">
              Hi, I&apos;m Aditya — I started Agentic AI Labs because I kept seeing great businesses lose leads to missed calls and slow follow-ups. {productName} is the system I wish existed years ago.
            </p>

            {/* Proof tags */}
            <div className="space-y-2.5">
              {proofTags.map((tag, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07] flex-shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{tag.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Team card ─────────────────────────────────────────────────────── */}
          <div className="rounded-[32px] bg-white/[0.05] border border-white/10 p-8 sm:p-10 flex flex-col gap-8">
            {/* Header */}
            <div>
              <p className="text-[10px] font-black tracking-[0.2em] uppercase text-[#FCCA07]/70 mb-3">
                Agentic AI Labs Team
              </p>
              <h3 className="text-white font-bold text-2xl sm:text-3xl leading-snug mb-3">
                Real engineers.<br />Real experience.<br />Real results.
              </h3>
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/10 text-white/70 text-xs font-medium">
                  10+ production AI agents
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/10 text-white/70 text-xs font-medium">
                  Core team: 10+ experts
                </span>
              </div>
            </div>

            {/* Capabilities */}
            <div className="space-y-4">
              {capabilities.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-white/70 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/[0.08]" />

            {/* CTA */}
            <div>
              <p className="text-white/40 text-xs mb-4 leading-relaxed">
                We build, deploy, and maintain your {productName} agent — you just run your business.
              </p>
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FCCA07] text-[#0A1128] font-bold text-sm transition-all hover:bg-[#f0bd00] active:scale-[0.98] whitespace-nowrap"
              >
                Book a Free Discovery Call
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <p className="text-white/25 text-xs mt-2.5">No commitment. 30 minutes. Walk away with clarity.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderTeamSection;
