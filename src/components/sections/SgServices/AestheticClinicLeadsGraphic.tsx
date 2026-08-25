"use client";

import MetricGapCard from "./MetricGapCard";

const AestheticClinicLeadsGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your clinic",
      runningChip: "DMs in",
      bookedChip: "Consult booked",
      vanity: [
        { label: "Enquiries in", target: 214, suffix: "/mo" },
        { label: "Quotes requested", target: 96 },
      ],
      painLabel: "Consults waiting",
      bookedLabel: "Answered in seconds, booked",
      bookedValue: "+1 consult",
    }}
  />
);

export default AestheticClinicLeadsGraphic;
