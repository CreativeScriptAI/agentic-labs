import Head from "next/head";
import Script from "next/script";
import { NextPageWithLayout } from "src/types";

const GHL_FORM_ID = "xtqc6VoShkcX3KNObgyO";

const benefits = [
  {
    icon: "⚡",
    title: "Instant Follow-Up",
    desc: "AI contacts every lead within 60 seconds — day or night.",
  },
  {
    icon: "🧠",
    title: "Smart Qualification",
    desc: "Filters serious buyers from window shoppers before your team touches the lead.",
  },
  {
    icon: "📅",
    title: "Auto-Scheduling",
    desc: "Books property tours directly into your calendar without back-and-forth.",
  },
  {
    icon: "🔁",
    title: "Long-Term Nurturing",
    desc: "Stays in touch for months via SMS & email until the lead is ready to buy.",
  },
];

const RealEstateLeadsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>AI Lead Nurturing for Real Estate — Agentic AI Labs</title>
        <meta
          name="description"
          content="Stop losing real estate leads to slow follow-up. Our AI system contacts, qualifies, and nurtures every lead automatically."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* GHL's companion script — handles iframe auto-resize */}
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />

      <main
        style={{ backgroundColor: "#F9F6F4", minHeight: "100vh" }}
        className="flex flex-col"
      >
        {/* Top bar */}
        <div className="flex justify-center pt-6 pb-2 px-4">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#0062FF" }}
          >
            Agentic AI Labs
          </span>
        </div>

        {/* Hero */}
        <section className="flex flex-col items-center text-center px-4 pt-8 pb-10">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide"
            style={{ backgroundColor: "#FCCA07", borderColor: "#e6b800", color: "#0A1128" }}
          >
            🏡 Real Estate Lead Nurturing
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl"
            style={{ color: "#0A1128" }}
          >
            Never Lose a Real Estate Lead Again
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
            Our AI follows up in <strong className="text-gray-800">60 seconds</strong>,
            qualifies buyers automatically, and nurtures cold leads for months — so you
            close more deals without hiring more staff.
          </p>
        </section>

        {/* Two-column: benefits + form */}
        <section className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto w-full px-4 pb-16 items-start">
          {/* Benefits */}
          <div className="flex flex-col gap-5 lg:w-1/2">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex gap-4 p-5 rounded-2xl border"
                style={{ backgroundColor: "#ffffff", borderColor: "rgba(0,0,0,0.06)" }}
              >
                <span className="text-2xl leading-none mt-0.5">{b.icon}</span>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "#0A1128" }}>
                    {b.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5 leading-snug">{b.desc}</p>
                </div>
              </div>
            ))}

            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Tested with real estate teams in the US & India. Average response
              time drop: from 4 hours → 45 seconds.
            </p>
          </div>

          {/* GHL Form card */}
          <div
            className="lg:w-1/2 w-full rounded-2xl border overflow-hidden"
            style={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(0,0,0,0.06)",
              boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
            }}
          >
            <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
              <p className="font-semibold text-sm" style={{ color: "#0A1128" }}>
                Get Your Free AI Lead System Demo
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Takes 30 seconds. We&apos;ll reach out within 2 hours.
              </p>
            </div>

            <iframe
              src={`https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`}
              style={{ width: "100%", height: "621px", border: "none", borderRadius: "0 0 16px 16px" }}
              id={`inline-${GHL_FORM_ID}`}
              data-layout={`{'id':'INLINE'}`}
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Ghl-Test"
              data-height="621"
              data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
              data-form-id={GHL_FORM_ID}
              title="Ghl-Test"
            />
          </div>
        </section>

        {/* Footer strip */}
        <div className="text-center pb-8 px-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Agentic AI Labs · Your data is never sold or shared.
          </p>
        </div>
      </main>
    </>
  );
};

// Standalone funnel page — no global nav/header
RealEstateLeadsPage.getLayout = (page) => page;

export default RealEstateLeadsPage;
