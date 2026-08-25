"use client";

import MetricGapCard from "./MetricGapCard";

const SeoPackagesGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your SEO",
      runningChip: "Enquiries in",
      bookedChip: "Call booked",
      vanity: [
        { label: "Organic enquiries", target: 47, suffix: "/mo" },
        { label: "Keyword rankings", target: 128 },
      ],
      painLabel: "Consults booked 0",
      bookedLabel: "Answered fast, qualified, booked",
      bookedValue: "+1 call",
    }}
  />
);

export default SeoPackagesGraphic;
