"use client";

import MetricGapCard from "./MetricGapCard";

const SeoGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your SEO",
      runningChip: "Traffic up",
      bookedChip: "Leads booked",
      vanity: [
        { label: "Keyword rank", prefix: "#", target: 1 },
        { label: "Organic traffic", target: 4200, suffix: "/mo" },
      ],
      painLabel: "Leads captured",
      bookedLabel: "Booked a call",
      bookedValue: "+1 lead",
    }}
  />
);

export default SeoGraphic;
