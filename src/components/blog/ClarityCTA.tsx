const BOOKING_URL = "https://cal.com/ai-aditya/30min";

// Hockey-stick growth, drawn once (decorative). Real numbers live in HTML
// text below the chart so they stay crawlable for SEO.
const IMP =
  "0,138 20,137 40,136 60,135 80,133 100,131 120,128 140,124 160,118 180,110 200,99 220,86 240,70 260,52 280,34 300,20";
const CLK =
  "0,139 20,139 40,138 60,138 80,137 100,136 120,134 140,131 160,127 180,121 200,113 220,103 240,90 260,74 280,58 300,44";

const ProofChart = () => (
  <div className="rounded-none border border-[#e7e6e4] bg-[#F9F6F4] p-4">
    <p className="font-geist text-[10px] uppercase tracking-[0.06em] text-slate-500">
      Organic search &middot; last 12 months
    </p>
    <svg
      viewBox="0 0 300 150"
      className="mt-2 w-full"
      preserveAspectRatio="none"
      role="img"
      aria-label="Organic impressions and clicks growing over the past 12 months"
    >
      <line x1="0" y1="148" x2="300" y2="148" stroke="#e7e6e4" strokeWidth="1.5" />
      <polygon points={`0,138 ${IMP} 300,148 0,148`} fill="#0A1128" opacity="0.06" />
      <polyline
        points={CLK}
        fill="none"
        stroke="#2563eb"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <polyline
        points={IMP}
        fill="none"
        stroke="#0A1128"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
    <div className="mt-3 flex items-end gap-6">
      <div>
        <span className="flex items-center gap-1.5 font-geist text-[11px] text-slate-500">
          <span className="inline-block h-2 w-2 rounded-full bg-[#0A1128]" />
          Impressions
        </span>
        <span className="font-alte text-[22px] leading-none tracking-[-0.03em] text-[#0A1128]">
          1.49M
        </span>
      </div>
      <div>
        <span className="flex items-center gap-1.5 font-geist text-[11px] text-slate-500">
          <span className="inline-block h-2 w-2 rounded-full bg-[#2563eb]" />
          Clicks
        </span>
        <span className="font-alte text-[22px] leading-none tracking-[-0.03em] text-[#0A1128]">
          16.6k
        </span>
      </div>
    </div>
  </div>
);

// Founder proof + free-call CTA shown at the top of every blog post.
// Numbers are from Aditya's own Google Search Console (cumulative, 12 months).
const ClarityCTA = () => {
  return (
    <aside className="relative mt-6 overflow-hidden rounded-none border border-[#e7e6e4] bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(37,99,235,0.18), rgba(252,202,7,0.16), transparent 72%)",
        }}
      />
      <div className="absolute left-0 top-0 h-full w-1.5 bg-[#FCCA07]" />

      <div className="relative grid gap-6 p-5 sm:p-7 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="font-geist text-[11px] uppercase tracking-[0.04em] text-red-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07] flex-shrink-0" />
            Proven on my own sites
          </p>

          <h2 className="mt-3 font-alte text-[22px] leading-[1.15] tracking-[-0.03em] text-[#0A1128] sm:text-[27px]">
            1.4M+ organic impressions, and cited in ChatGPT &amp; Google AI,
            from an SEO agent I built.
          </h2>

          <p className="mt-4 font-alte text-[15px] leading-[1.6] tracking-[-0.02em] text-slate-600">
            No agency, no ad budget. I built an AI SEO agent that does the work,
            and it took my sites past 1.4 million impressions and into AI
            answers. Want the same system for yours? Book a free clarity call
            and I will show you how.
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

        <ProofChart />
      </div>
    </aside>
  );
};

export default ClarityCTA;
