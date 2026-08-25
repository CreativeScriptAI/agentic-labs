"use client";

import MetricGapCard from "./MetricGapCard";

const AiReceptionistGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your phone",
      runningChip: "Calls ringing",
      bookedChip: "Call booked",
      vanity: [
        { label: "Calls today", target: 47 },
        { label: "After-hours calls", target: 18 },
      ],
      painLabel: "Missed, in voicemail",
      bookedLabel: "Answered in seconds, booked",
      bookedValue: "+1 appt",
    }}
  />
);

export default AiReceptionistGraphic;
