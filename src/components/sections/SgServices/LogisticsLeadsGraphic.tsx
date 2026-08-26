"use client";

import MetricGapCard from "./MetricGapCard";

const LogisticsLeadsGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your pipeline",
      runningChip: "RFQs in",
      bookedChip: "Lane booked",
      vanity: [
        { label: "Quote enquiries", target: 128, suffix: "/mo" },
        { label: "Avg reply time", prefix: "", target: 9, suffix: "h" },
      ],
      painLabel: "RFQ conversations booked",
      bookedLabel: "Answered in seconds, qualified, booked",
      bookedValue: "+1 lane",
    }}
  />
);

export default LogisticsLeadsGraphic;
