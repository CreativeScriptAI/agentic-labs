"use client";

import MetricGapCard from "./MetricGapCard";

const WhatsappApiGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your WhatsApp",
      runningChip: "Messages in",
      bookedChip: "Booked",
      vanity: [
        { label: "Enquiries in", target: 47, suffix: "/day" },
        { label: "Avg reply time", target: 3, suffix: " hrs" },
      ],
      painLabel: "Unread enquiries",
      bookedLabel: "Answered in seconds, booked",
      bookedValue: "+1 booking",
    }}
  />
);

export default WhatsappApiGraphic;
