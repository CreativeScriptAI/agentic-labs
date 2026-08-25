"use client";

import MetricGapCard from "./MetricGapCard";

const LocalSeoGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your listing",
      runningChip: "Views in",
      bookedChip: "Call booked",
      vanity: [
        { label: "Profile views", target: 248, suffix: "/mo" },
        { label: "Direction requests", target: 61 },
      ],
      painLabel: "Calls waiting",
      bookedLabel: "Answered from the map, booked",
      bookedValue: "+1 call",
    }}
  />
);

export default LocalSeoGraphic;
