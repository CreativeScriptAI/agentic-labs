"use client";

import MetricGapCard from "./MetricGapCard";

const B2bSaasLeadsGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your funnel",
      runningChip: "Trials in",
      bookedChip: "Demo booked",
      vanity: [
        { label: "Trial sign-ups", target: 184, suffix: "/mo" },
        { label: "Demo requests", target: 26, suffix: "/mo" },
      ],
      painLabel: "Demos booked",
      bookedLabel: "Activated and qualified, booked",
      bookedValue: "+1 demo",
    }}
  />
);

export default B2bSaasLeadsGraphic;
