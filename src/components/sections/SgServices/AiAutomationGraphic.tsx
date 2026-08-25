"use client";

import MetricGapCard from "./MetricGapCard";

const AiAutomationGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your back office",
      runningChip: "Piling up",
      bookedChip: "Handled",
      vanity: [
        { label: "Manual tasks", target: 148, suffix: "/wk" },
        { label: "Hours spent", target: 9, suffix: "h" },
      ],
      painLabel: "Handled on time",
      bookedLabel: "Automated, qualified, booked",
      bookedValue: "+1 booked",
    }}
  />
);

export default AiAutomationGraphic;
