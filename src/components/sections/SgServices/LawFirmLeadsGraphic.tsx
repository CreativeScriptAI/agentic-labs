"use client";

import MetricGapCard from "./MetricGapCard";

const LawFirmLeadsGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your intake",
      runningChip: "Enquiries in",
      bookedChip: "Consult booked",
      vanity: [
        { label: "Enquiries in", target: 47, suffix: "/mo" },
        { label: "Response time", prefix: "", target: 6, suffix: "h" },
      ],
      painLabel: "Consults waiting",
      bookedLabel: "Answered in seconds, booked",
      bookedValue: "+1 consult",
    }}
  />
);

export default LawFirmLeadsGraphic;
