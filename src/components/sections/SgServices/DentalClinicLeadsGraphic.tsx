"use client";

import MetricGapCard from "./MetricGapCard";

const DentalClinicLeadsGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your clinic",
      runningChip: "Enquiries in",
      bookedChip: "Consult booked",
      vanity: [
        { label: "Invisalign enquiries", target: 47, suffix: "/mo" },
        { label: "Avg reply time", prefix: "", target: 9, suffix: "h" },
      ],
      painLabel: "Consults booked",
      bookedLabel: "Answered in seconds, booked",
      bookedValue: "+1 consult",
    }}
  />
);

export default DentalClinicLeadsGraphic;
