import { useEffect, useRef } from "react";

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

export const usePerformanceMonitor = () => {
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(
        (entry) => entry.name === "first-contentful-paint"
      );
      if (fcpEntry) {
        metricsRef.current.fcp = fcpEntry.startTime;
        console.log("FCP:", fcpEntry.startTime);
      }
    });
    fcpObserver.observe({ entryTypes: ["paint"] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        metricsRef.current.lcp = lastEntry.startTime;
        console.log("LCP:", lastEntry.startTime);
      }
    });
    lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.processingStart && entry.startTime) {
          metricsRef.current.fid = entry.processingStart - entry.startTime;
          console.log("FID:", entry.processingStart - entry.startTime);
        }
      });
    });
    fidObserver.observe({ entryTypes: ["first-input"] });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          metricsRef.current.cls = clsValue;
          console.log("CLS:", clsValue);
        }
      });
    });
    clsObserver.observe({ entryTypes: ["layout-shift"] });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metricsRef.current.ttfb =
        navigationEntry.responseStart - navigationEntry.requestStart;
      console.log(
        "TTFB:",
        navigationEntry.responseStart - navigationEntry.requestStart
      );
    }

    // Mobile-specific optimizations
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      // Reduce animation complexity on mobile
      document.documentElement.style.setProperty(
        "--animation-duration",
        "0.2s"
      );

      // Optimize scroll performance
      document.documentElement.style.setProperty("--scroll-behavior", "auto");
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  return metricsRef.current;
};
