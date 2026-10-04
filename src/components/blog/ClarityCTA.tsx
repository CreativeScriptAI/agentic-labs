const BOOKING_URL = "https://cal.com/ai-aditya/30min";

// Founder proof + free-call CTA shown at the top of every blog post.
// Numbers are from Aditya's own Google Search Console (6 months).
const ClarityCTA = () => {
  return (
    <aside className="relative mt-6 overflow-hidden rounded-none border border-[#e7e6e4] bg-white">
      {/* soft brand accent, decorative only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(37,99,235,0.18), rgba(252,202,7,0.16), transparent 72%)",
        }}
      />
      <div className="absolute left-0 top-0 h-full w-1.5 bg-[#FCCA07]" />

      <div className="relative p-5 sm:p-7">
        <p className="font-geist text-[11px] uppercase tracking-[0.04em] text-red-500 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07] flex-shrink-0" />
          Proven on my own sites
        </p>

        <h2 className="mt-3 font-alte text-[22px] leading-[1.15] tracking-[-0.03em] text-[#0A1128] sm:text-[28px]">
          1M+ organic impressions, and cited in ChatGPT &amp; Google AI, from an
          SEO agent I built.
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "1M+ organic impressions",
            "12.1k clicks",
            "cited in ChatGPT + Google AI",
          ].map((s) => (
            <span
              key={s}
              className="rounded-none border border-[#e7e6e4] bg-[#F9F6F4] px-3 py-1 font-geist text-[12px] tracking-[-0.01em] text-[#0A1128]"
            >
              {s}
            </span>
          ))}
        </div>

        <p className="mt-4 font-alte text-[15px] leading-[1.6] tracking-[-0.02em] text-slate-600">
          No agency, no ad budget. I built an AI SEO agent that does the work,
          and it took my sites past a million impressions and into AI answers.
          Want the same system for yours? Book a free clarity call and I will
          show you how.
        </p>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-none bg-[#0A1128] px-6 py-3.5 font-geist text-[14px] uppercase tracking-[0.02em] text-white transition-colors hover:bg-[#2563eb] sm:w-auto"
        >
          Book a free clarity call
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </aside>
  );
};

export default ClarityCTA;
