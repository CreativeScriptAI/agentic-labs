import Image from "next/image";
import BracketButton from "src/components/BracketButton";

const WhatHappensNext = () => {
  const steps = [
    "Pick a slot on our calendar.",
    "Will discuss your idea or existing problem on call.",
    "Then, we'll map roadmap with feasibility, timeline, and next steps.",
  ];

  return (
    <section className="section">
      <h2 className="section_title text-slate-900 font-alte font-normal">What Happens Next</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 w-full">
        <Image
          src="/images/contactus/howitworks.png"
          alt="How It Works Image"
          width={500}
          height={360}
          className="w-full h-auto max-w-[500px] order-1 md:order-2"
        />
        <div className="flex flex-col items-start order-2 md:order-1">
          <ul className="flex flex-col items-start gap-3 md:gap-8 mb-8">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="w-8 h-8 bg-[#0062FF] text-white rounded-none flex items-center justify-center font-geist text-[12px] tracking-[0.02em] font-normal">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-8 bg-[#0062FF] opacity-30"></div>
                  )}
                </div>
                <p className="text-slate-800 font-alte text-[15px] font-normal leading-[1.5] tracking-[-0.04em] m-0 flex-1">
                  {step}
                </p>
              </li>
            ))}
          </ul>

          <BracketButton
            label="Book My Free Roadmap Call"
            href="https://cal.com/ai-aditya/30min"
            variant="secondary"
            external
          />
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNext;
