"use client";

import MetricGapCard from "./MetricGapCard";

const GoogleAdsGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your ads",
      runningChip: "Clicks in",
      bookedChip: "Lead booked",
      vanity: [
        { label: "Ad clicks", target: 312, suffix: "/mo" },
        { label: "Cost per click", prefix: "S$", target: 4 },
      ],
      painLabel: "Leads waiting",
      bookedLabel: "Replied in seconds, booked",
      bookedValue: "+1 lead",
    }}
  />
);

export default GoogleAdsGraphic;
