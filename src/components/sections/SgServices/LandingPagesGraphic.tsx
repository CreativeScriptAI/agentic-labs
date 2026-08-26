"use client";

import MetricGapCard from "./MetricGapCard";

const LandingPagesGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your landing page",
      runningChip: "Visits in",
      bookedChip: "Call booked",
      vanity: [
        { label: "Page visits", target: 1840, suffix: "/mo" },
        { label: "Bounce rate", target: 71, suffix: "%" },
      ],
      painLabel: "Calls booked",
      bookedLabel: "Answered in seconds, booked",
      bookedValue: "+1 call",
    }}
  />
);

export default LandingPagesGraphic;
