"use client";

import MetricGapCard from "./MetricGapCard";

const FitnessLeadsGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your studio",
      runningChip: "DMs in",
      bookedChip: "Trial booked",
      vanity: [
        { label: "Followers", target: 4820, suffix: "" },
        { label: "Trial enquiries", target: 38, suffix: "/mo" },
      ],
      painLabel: "Trials booked",
      bookedLabel: "Answered in seconds, booked",
      bookedValue: "+1 trial",
    }}
  />
);

export default FitnessLeadsGraphic;
