"use client";

import MetricGapCard from "./MetricGapCard";

const B2bLeadGenGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your outreach",
      runningChip: "Sending",
      bookedChip: "Meeting booked",
      vanity: [
        { label: "Leads sourced", target: 1840, suffix: "/mo" },
        { label: "Sequences sent", target: 1200 },
      ],
      painLabel: "Meetings booked",
      bookedLabel: "Replied in seconds, qualified, booked",
      bookedValue: "+1 meeting",
    }}
  />
);

export default B2bLeadGenGraphic;
