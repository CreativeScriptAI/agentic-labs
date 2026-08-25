"use client";

import MetricGapCard from "./MetricGapCard";

const RenovationLeadsGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your enquiries",
      runningChip: "Quotes requested",
      bookedChip: "Consult booked",
      vanity: [
        { label: "Enquiries in", target: 47, suffix: "/mo" },
        { label: "Quotes requested", target: 31 },
      ],
      painLabel: "Consults booked",
      bookedLabel: "Replied in seconds, booked",
      bookedValue: "+1 consult",
    }}
  />
);

export default RenovationLeadsGraphic;
