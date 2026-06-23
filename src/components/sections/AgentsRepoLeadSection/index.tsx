import React from "react";

const CAL_LINK =
  "https://cal.com/ai-aditya/30min";

const AgentsRepoLeadSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <div className="relative z-10 max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <p className="text-red-500 text-[12px] tracking-[0.02em] font-normal font-geist uppercase mb-4">
          We&apos;ll plug it into your workflow in under 48hrs.
        </p>

        <h2 className="text-[32px] leading-[1.2] font-alte font-normal tracking-[-0.04em] text-[#0A1128] mb-0">
          Free your team.
        </h2>
        <h3 className="text-[32px] sm:text-[40px] leading-[1.2] font-alte font-normal tracking-[-0.04em] text-[#0A1128] mb-8">
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
            className="w-full h-[54px] rounded-none border border-[#e7e6e4] bg-white px-4 text-left text-[15px] leading-[1.5] tracking-[-0.04em] font-alte font-normal text-[#0A1128] placeholder:text-slate-400 outline-none focus:border-[#0062FF] transition-colors"
          />
          <textarea
            required
            placeholder="Write a message here"
            rows={3}
            className="w-full h-[88px] rounded-none border border-[#e7e6e4] bg-white px-4 py-3 text-left text-[15px] leading-[1.5] tracking-[-0.04em] font-alte font-normal text-[#0A1128] placeholder:text-slate-400 outline-none resize-none focus:border-[#0062FF] transition-colors"
          />
          <button
            type="submit"
            className="group relative inline-flex w-full items-center justify-center rounded-none bg-[#FCCA07] h-[50px] px-[20px] font-alte text-[15px] uppercase tracking-[0.02em] font-normal text-[#0A1128] select-none transition-colors duration-200 hover:bg-[#f0bd00]"
          >
            <span className="inline-block transition-transform duration-200 ease-out translate-x-[5px] group-hover:translate-x-0 group-active:translate-x-[9px]">
              [
            </span>
            <span className="px-[10px] whitespace-nowrap">Book a Free Consultation</span>
            <span className="inline-block transition-transform duration-200 ease-out -translate-x-[5px] group-hover:translate-x-0 group-active:-translate-x-[9px]">
              ]
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default AgentsRepoLeadSection;
