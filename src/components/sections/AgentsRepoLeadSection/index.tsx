import React from "react";

const CAL_LINK =
  "https://cal.com/free-ai-clarity-call-avoid-costly-automation-mistakes/30min";

const AgentsRepoLeadSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-[url('/images/bg.svg')] bg-repeat bg-auto"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-end justify-center"
      >
        <div
          className="h-[676px] w-[1120px] rounded-[999px] opacity-25"
          style={{
            filter: "blur(80px)",
            background: "linear-gradient(180deg, #0062FF 0%, #0062FF 100%)",
            transform: "translateY(58%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <p className="text-[#E53935] text-[14px] tracking-[0.04em] font-normal uppercase mb-4">
          We&apos;ll plug it into your workflow in under 48hrs.
        </p>

        <h2 className="text-[32px] leading-[1.2] font-sfpro tracking-[-0.02em] text-[#0A1128] mb-0">
          Free your team.
        </h2>
        <h3 className="text-[32px] sm:text-[40px] leading-[1.15] font-mondwest tracking-[-0.02em] text-[#0A1128] mb-8">
          Build your first <span className="text-blue-600">AI agent</span> today!
        </h3>

        <form
          className="space-y-4 flex w-full max-w-[552px] mx-auto flex-col items-center"
          onSubmit={(event) => {
            event.preventDefault();
            window.open(CAL_LINK, "_blank", "noopener,noreferrer");
          }}
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="w-full h-[54px] rounded-lg border border-slate-200 bg-white px-4 text-left text-[16px] text-slate-700 placeholder:text-slate-400 outline-none"
          />
          <textarea
            required
            placeholder="Write a message here"
            rows={3}
            className="w-full h-[88px] rounded-lg border border-slate-200 bg-white px-4 py-3 text-left text-[16px] text-slate-700 placeholder:text-slate-400 outline-none resize-none"
          />
          <button
            type="submit"
            className="w-full h-[44px] rounded-lg bg-blue-600 text-[14px] font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Book a Free Consultation
          </button>
        </form>
      </div>
    </section>
  );
};

export default AgentsRepoLeadSection;
