import React, { useState, useEffect } from "react";
import { usePerformanceMonitor } from "../hooks/usePerformanceMonitor";

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceDashboard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  // Update metrics when performance monitor changes
  useEffect(() => {
    const updateMetrics = () => {
      const performance = window.performance;
      if (performance) {
        const navigation = performance.getEntriesByType(
          "navigation"
        )[0] as PerformanceNavigationTiming;
        if (navigation) {
          setMetrics((prev) => ({
            ...prev,
            ttfb: navigation.responseStart - navigation.requestStart,
          }));
        }
      }
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  const getScore = (
    value: number | null,
    thresholds: { good: number; needsImprovement: number }
  ) => {
    if (value === null) return "N/A";
    if (value <= thresholds.good) return "Good";
    if (value <= thresholds.needsImprovement) return "Needs Improvement";
    return "Poor";
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case "Good":
        return "text-green-600";
      case "Needs Improvement":
        return "text-yellow-600";
      case "Poor":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg z-50"
        title="Performance Dashboard"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-80 z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">
            FCP (First Contentful Paint)
          </span>
          <span
            className={`text-sm ${getScoreColor(
              getScore(metrics.fcp, { good: 1800, needsImprovement: 3000 })
            )}`}
          >
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : "N/A"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">
            LCP (Largest Contentful Paint)
          </span>
          <span
            className={`text-sm ${getScoreColor(
              getScore(metrics.lcp, { good: 2500, needsImprovement: 4000 })
            )}`}
          >
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : "N/A"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">FID (First Input Delay)</span>
          <span
            className={`text-sm ${getScoreColor(
              getScore(metrics.fid, { good: 100, needsImprovement: 300 })
            )}`}
          >
            {metrics.fid ? `${Math.round(metrics.fid)}ms` : "N/A"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">
            CLS (Cumulative Layout Shift)
          </span>
          <span
            className={`text-sm ${getScoreColor(
              getScore(metrics.cls, { good: 0.1, needsImprovement: 0.25 })
            )}`}
          >
            {metrics.cls ? metrics.cls.toFixed(3) : "N/A"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">TTFB (Time to First Byte)</span>
          <span
            className={`text-sm ${getScoreColor(
              getScore(metrics.ttfb, { good: 800, needsImprovement: 1800 })
            )}`}
          >
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : "N/A"}
          </span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
