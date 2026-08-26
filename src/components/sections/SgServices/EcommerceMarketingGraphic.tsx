"use client";

import MetricGapCard from "./MetricGapCard";

const EcommerceMarketingGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your store",
      runningChip: "Traffic in",
      bookedChip: "Order recovered",
      vanity: [
        { label: "Store visits", target: 1840, suffix: "/mo" },
        { label: "Platform ROAS", target: 4, suffix: "x" },
      ],
      painLabel: "Carts abandoned, unrecovered",
      bookedLabel: "Cart followed up, checkout closed",
      bookedValue: "+1 order",
    }}
  />
);

export default EcommerceMarketingGraphic;
