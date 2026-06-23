import React from "react";
import {
  BuildSvg,
  IntegrateSvg,
  ValidateSvg,
  StackSvg,
  MaintainSvg,
  TrackSvg,
} from "src/assets/svgs/WhatwedoSvgs";

type WhatWeDoItem = {
  title: string;
  description: React.ReactNode;
  Icon: React.FC<{ white?: boolean }>;
  variant?: "default" | "primary";
};

const items: WhatWeDoItem[] = [
  {
    title: "Build",
    description: (
      <>
        Build one production agent in{" "}
        <span className="text-[#0A1128]">7 days.</span>
      </>
    ),
    Icon: BuildSvg,
  },
  {
    title: "Integrate",
    description: "Wire it to your CRM, calendars, data, and payment links",
    Icon: IntegrateSvg,
  },
  {
    title: "Validate",
    description:
      "Set a clear hypothesis, baseline, and target then promote or kill with data",
    Icon: ValidateSvg,
  },

  {
    title: "Track",
    description:
      "Track everything on a live dashboard with alerts and a kill switch",
    Icon: TrackSvg,
  },
  {
    title: "Maintain",
    description:
      "Keep it healthy with monitoring, tuning, and monthly release notes",
    Icon: MaintainSvg,
  },
  {
    title: "Stack",
    description:
      "Stack that moves fast: Python, LangChain, RAG, vector stores, Retell, n8n, CrewAI, Gupshup, your cloud",
    Icon: StackSvg,
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F9F6F4] w-[calc(100%+2rem)] -ml-4 -mr-4 bg-[url('/images/bg.svg')] bg-repeat bg-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <p className="font-geist text-[12px] tracking-[0.02em] text-red-500 uppercase font-normal mb-3">
            WHAT WE DO
          </p>
          <h2
            className="font-alte font-normal text-2xl italic leading-[1.2] tracking-[-0.04em] mb-4 mx-auto text-[#0062FF]"
            style={{
              maxWidth: "32rem",
            }}
          >
            “Experiment fast, validate faster, ship only what holds up in
            production.”
          </h2>
          <p className="font-alte font-normal text-[#0A1128]/60 text-base sm:text-lg leading-[1.5] tracking-[-0.04em] max-w-3xl mx-auto">
            We run your AI ideas like a lab. Rapid experiments on the bench.
            Field trials on real traffic. When the mix of models, data, and code
            proves out, we lock the formula and ship it to production.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ title, description, Icon, variant = "default" }) => (
            <div
              key={title}
              className={`group relative rounded-none p-5 border transition-colors ${
                variant === "primary"
                  ? "bg-[#0062FF] border-transparent"
                  : "bg-white border-[#e7e6e4] hover:bg-[#0062FF] hover:border-transparent"
              }`}
            >
              <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center">
                {/* Blue icon (default state) */}
                <span
                  className={`${
                    variant === "primary" ? "opacity-0" : "opacity-100"
                  } group-hover:opacity-0 transition-opacity duration-200`}
                >
                  <Icon />
                </span>
                {/* White icon (hover or primary) */}
                <span
                  className={`${
                    variant === "primary" ? "opacity-100" : "opacity-0"
                  } group-hover:opacity-100 absolute transition-opacity duration-200`}
                >
                  <Icon white />
                </span>
              </div>
              <h3
                className={`font-alte font-normal text-xl tracking-[-0.04em] mb-2 pr-12 ${
                  variant === "primary"
                    ? "text-white"
                    : "text-[#0A1128] group-hover:text-white"
                }`}
              >
                {title}
              </h3>
              <p
                className={`text-[15px] font-alte font-normal leading-[1.5] tracking-[-0.04em] ${
                  variant === "primary"
                    ? "text-white/90"
                    : "text-[#0A1128]/40 group-hover:text-white/90"
                }`}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
