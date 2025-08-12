import React from "react";

type CardProps = {
  title?: string;
  description?: string;
  imageSrc?: string;
  rowSpan?: 1 | 2 | 3;
  descriptionClassName?: string;
  imagePlacement?: "bottom" | "right";
  containerClassName?: string;
};

const WhyDifferent: React.FC = () => {
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
        <div className="text-center mb-8">
          <p className="text-[11px] sm:text-xs tracking-widest text-red-500 uppercase mb-2">
            Standing out for the right reasons
          </p>
          <h2 className="text-2xl sm:text-3xl font-mondwest text-slate-900">
            Why Are We Different?
          </h2>
        </div>

        {/* Two-column smart grid with row spans */}
        <div className="grid grid-cols-1 md:grid-cols-[repeat(2,_268px)] auto-rows-[minmax(150px,_auto)] md:auto-rows-[minmax(165px,_auto)] gap-4 justify-center">
          {/* Top-left */}
          <FeatureCard
            title="We ship, not just demo."
            description="Experiments become production agents fast."
          />

          {/* Top-right: big illustration spanning two rows */}
          <FeatureCard imageSrc="/about/whyarewediff.png" rowSpan={2} />

          {/* Second row, left */}
          <FeatureCard
            title="AgentOps included."
            description="Logs, alerts, retries, rollbacks, release notes."
          />

          {/* Third row: one row spanning both columns, split 3:2
              Left part approximates 1.5 columns, right part the remaining space */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch">
            <div className="md:col-span-3 h-full">
              <FeatureCard
                title="Code first, tool smart."
                description="We use platforms only where they help."
                imageSrc="/about/codefirst.png"
                descriptionClassName="max-w-[20rem] md:max-w-[22rem]"
                imagePlacement="right"
                containerClassName="h-full"
              />
            </div>
            <div className="md:col-span-2 h-full">
              <FeatureCard
                title="KPI first."
                description="If it can't be measured, we don't build it."
                containerClassName="h-full"
              />
            </div>
          </div>

          {/* Bottom-left: spans two rows */}
          <FeatureCard
            title="Human + AI."
            description="Real integrations, edge cases handled, UX people trust."
            imageSrc="/about/humanplusai.png"
            rowSpan={2}
          />

          {/* Bottom-right stacked */}
          <FeatureCard
            title="Security minded."
            description="Access controls, data policies, clear audit trails."
          />
          <FeatureCard
            title="White label friendly."
            description="You keep the spotlight, we do the heavy lift."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  rowSpan = 1,
  descriptionClassName,
  imagePlacement = "bottom",
  containerClassName,
}) => {
  const rowClass =
    rowSpan === 2 ? "md:row-span-2" : rowSpan === 3 ? "md:row-span-3" : "";
  const isImageOnly = !title && !description && !!imageSrc;
  const layoutClass =
    imagePlacement === "right"
      ? "md:flex md:flex-row md:gap-6 justify-between"
      : isImageOnly
      ? "flex items-center justify-center"
      : "flex flex-col justify-between";
  return (
    <div
      className={`bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-5 ${layoutClass} ${rowClass} ${
        containerClassName ?? ""
      }`}
    >
      {(title || description) && (
        <div className={imagePlacement === "right" ? "md:flex-1" : ""}>
          {title && (
            <h3 className="text-slate-800 font-sfpro text-lg font-light mb-2">
              {title}
            </h3>
          )}
          {description && (
            <p
              className={`text-slate-400 text-large leading-relaxed font-sfpro font-[400] ${
                descriptionClassName ?? ""
              }`}
            >
              {description}
            </p>
          )}
        </div>
      )}
      {imageSrc && (
        <div
          className={
            isImageOnly
              ? "w-full h-full flex items-center justify-center"
              : imagePlacement === "right"
              ? "mt-4 md:mt-0 md:flex-1 w-full flex items-center justify-center"
              : "mt-4 w-full flex items-center justify-center"
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={title || "image"}
            className={
              imagePlacement === "right"
                ? "max-h-40 md:max-h-48 object-contain"
                : "max-h-56 object-contain"
            }
          />
        </div>
      )}
    </div>
  );
};

export default WhyDifferent;
