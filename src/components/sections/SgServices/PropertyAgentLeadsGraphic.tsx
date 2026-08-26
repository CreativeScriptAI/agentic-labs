"use client";

import MetricGapCard from "./MetricGapCard";

const PropertyAgentLeadsGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your enquiries",
      runningChip: "Enquiries in",
      bookedChip: "Viewing booked",
      vanity: [
        { label: "Portal enquiries", target: 48, suffix: "/mo" },
        { label: "Replied within an hour", target: 0, suffix: "%" },
      ],
      painLabel: "Viewings booked",
      bookedLabel: "Answered in seconds, booked",
      bookedValue: "+1 viewing",
    }}
  />
);

export default PropertyAgentLeadsGraphic;
