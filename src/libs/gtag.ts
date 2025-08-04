import { CONFIG } from "site.config";

// Declare gtag function on window
declare global {
  interface Window {
    gtag: (
      command: string,
      id: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export const GA_TRACKING_ID =
  (CONFIG as { googleAnalytics?: { config?: { measurementId?: string } } })
    .googleAnalytics?.config?.measurementId || "";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== "object" || !window.gtag || !GA_TRACKING_ID) return;
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
  if (typeof window !== "object" || !window.gtag || !GA_TRACKING_ID) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
