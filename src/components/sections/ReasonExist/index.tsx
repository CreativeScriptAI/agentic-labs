import React from "react";

const ReasonExist: React.FC = () => {
  return (
    <section
      className="py-20 sm:py-24"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
        backgroundImage: "url(/images/bg.svg)",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[11px] sm:text-xs tracking-widest text-red-500 uppercase mb-4">
          Reason Why We Exist
        </p>
        <p className="text-xl sm:text-2xl font-sfpro text-slate-400 font-light leading-tight mb-6">
          <span className="text-slate-900 text-xl sm:text-2xl leading-9 sm:leading-10">
            Every founder wants to be ahead with AI.
          </span>{" "}
          <span>
            Almost nobody has the time or the skill to get there, so they buy
            another tool, then another, and mistake the motion for progress. We
            exist to end that. You don&apos;t need more tools. You need the
            outcome. We build the AI that delivers it, and we own whether it
            actually works.
          </span>
        </p>
      </div>
    </section>
  );
};

export default ReasonExist;
