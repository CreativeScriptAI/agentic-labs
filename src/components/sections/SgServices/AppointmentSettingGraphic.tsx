"use client";

import MetricGapCard from "./MetricGapCard";

const AppointmentSettingGraphic = ({ className = "" }: { className?: string }) => (
  <MetricGapCard
    className={className}
    config={{
      header: "Your outreach",
      runningChip: "Dialling",
      bookedChip: "Meeting booked",
      vanity: [
        { label: "Prospects contacted", target: 640, suffix: "/mo" },
        { label: "Dials made", target: 1450 },
      ],
      painLabel: "Meetings booked",
      bookedLabel: "Followed up, qualified, booked",
      bookedValue: "+1 meeting",
    }}
  />
);

export default AppointmentSettingGraphic;
