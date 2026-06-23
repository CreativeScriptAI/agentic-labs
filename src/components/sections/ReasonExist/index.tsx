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
        <p className="font-geist text-[12px] tracking-[0.02em] text-red-500 uppercase font-normal mb-4">
          Reason Why We Exist
        </p>
        <p className="text-xl sm:text-2xl font-alte font-normal text-[#0A1128]/40 leading-[1.5] tracking-[-0.04em] mb-6">
          <span className="text-[#0A1128] text-xl sm:text-2xl leading-9 sm:leading-10">
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
