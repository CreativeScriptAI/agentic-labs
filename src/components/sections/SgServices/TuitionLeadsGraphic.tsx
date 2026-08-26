"use client";

import MetricGapCard from "./MetricGapCard";

const TuitionLeadsGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your enquiries",
      runningChip: "WhatsApps in",
      bookedChip: "Trial booked",
      vanity: [
        { label: "Enquiries", target: 48, suffix: "/mo" },
        { label: "Avg reply time", target: 6, suffix: "h" },
      ],
      painLabel: "Trials booked",
      bookedLabel: "Answered in seconds, booked",
      bookedValue: "+1 trial",
    }}
  />
);

export default TuitionLeadsGraphic;
