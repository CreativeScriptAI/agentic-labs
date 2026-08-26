"use client";

import MetricGapCard from "./MetricGapCard";

const WebDesignGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your website",
      runningChip: "Visits in",
      bookedChip: "Meeting booked",
      vanity: [
        { label: "Page views", target: 1840, suffix: "/mo" },
        { label: "Avg load time", prefix: "", target: 1, suffix: "s" },
      ],
      painLabel: "Enquiries booked",
      bookedLabel: "Answered in seconds, booked",
      bookedValue: "+1 meeting",
    }}
  />
);

export default WebDesignGraphic;
