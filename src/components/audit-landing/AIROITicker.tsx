import React, { useEffect, useState, useRef, useMemo } from "react";

// Types
interface Company {
  name: string;
  logoSrc?: string;
}

interface Metric {
  type: "moneyMonthly" | "moneyYearly" | "hoursWeekly" | "percentFaster" | "tasksWeekly" | "fteSaved";
  value: number;
  formatted: string;
}

interface TickerItem {
  id: string;
  company: Company;
  metric: Metric;
}

// Metric generators with ranges
const metricGenerators = {
  moneyMonthly: (): Metric => {
    const value = Math.round((Math.random() * (25000 - 2000) + 2000) / 50) * 50;
    return {
      type: "moneyMonthly",
      value,
      formatted: `+$${value.toLocaleString()}/month`,
    };
  },
  moneyYearly: (): Metric => {
    const value = Math.round((Math.random() * (300000 - 25000) + 25000) / 100) * 100;
    return {
      type: "moneyYearly",
      value,
      formatted: `+$${value.toLocaleString()}/year`,
    };
  },
  hoursWeekly: (): Metric => {
    const value = Math.round((Math.random() * (120 - 15) + 15) / 5) * 5;
    return {
      type: "hoursWeekly",
      value,
      formatted: `+${value} hrs/week`,
    };
  },
  percentFaster: (): Metric => {
    const value = Math.round(Math.random() * (60 - 10) + 10);
    return {
      type: "percentFaster",
      value,
      formatted: `+${value}% faster`,
    };
  },
  tasksWeekly: (): Metric => {
    const value = Math.round((Math.random() * (800 - 40) + 40) / 10) * 10;
    return {
      type: "tasksWeekly",
      value,
      formatted: `+${value} tasks/week`,
    };
  },
  fteSaved: (): Metric => {
    const value = Math.round((Math.random() * (4.0 - 0.3) + 0.3) * 10) / 10;
    return {
      type: "fteSaved",
      value,
      formatted: `+${value} FTE`,
    };
  },
};

// Weighted metric types (dollars and hours appear most)
const metricTypeWeights: Array<{ type: keyof typeof metricGenerators; weight: number }> = [
  { type: "moneyMonthly", weight: 2 },
  { type: "moneyYearly", weight: 2 },
  { type: "hoursWeekly", weight: 2 },
  { type: "percentFaster", weight: 1 },
  { type: "tasksWeekly", weight: 1 },
  { type: "fteSaved", weight: 1 },
];

function pickRandomMetricType(): keyof typeof metricGenerators {
  const totalWeight = metricTypeWeights.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const item of metricTypeWeights) {
    if (random < item.weight) {
      return item.type;
    }
    random -= item.weight;
  }
  
  return metricTypeWeights[0].type;
}

function generateMetric(): Metric {
  const type = pickRandomMetricType();
  return metricGenerators[type]();
}

// Simple logo placeholder component (monochrome circle with initials)
function CompanyLogo({ company }: { company: Company }) {
  const initials = company.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  
  return (
    <div 
      className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-600 font-semibold text-[10px] shrink-0"
      style={{ 
        color: "var(--muted-foreground)",
        backgroundColor: "var(--muted)",
      }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

// Up arrow icon
function UpArrow() {
  return (
    <svg
      className="inline-block w-3 h-3 mr-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  );
}

// Lightweight Money icon with subtle animation
function MoneyIcon({ isAnimating }: { isAnimating: boolean }) {
  return (
    <svg
      className={`inline-block w-4 h-4 mr-1.5 ${isAnimating ? 'animate-pulse-scale' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ 
        animation: isAnimating ? 'moneyPulse 0.8s ease-in-out' : 'none',
        transformOrigin: 'center'
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

// Lightweight Clock/Time icon with subtle animation
function TimeIcon({ isAnimating }: { isAnimating: boolean }) {
  return (
    <svg
      className={`inline-block w-4 h-4 mr-1.5 ${isAnimating ? 'animate-rotate-subtle' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ 
        animation: isAnimating ? 'timeRotate 0.8s ease-in-out' : 'none',
        transformOrigin: 'center'
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function AIROITicker() {
  const [items, setItems] = useState<TickerItem[]>([]);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastUpdateRef = useRef<number>(0);
  const updateIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const recentUpdatesRef = useRef<Set<string>>(new Set());

  // Company pool - define inline to avoid dependency issues
  const companies: Company[] = [
    { name: "LARHUB" },
    { name: "Dolado" },
    { name: "TAIE" },
    { name: "SBF" },
    { name: "Poker Zombie" },
    { name: "Solar Hub" },
    { name: "HowWorks" },
    { name: "Season of Ink" },
    { name: "Haavi" },
    { name: "Bitmap" },
    { name: "WickedRock" },
    { name: "Betelruse" },
    { name: "Becton" },
    { name: "OneClick" },
    { name: "Biscuit" },
    { name: "Figma" },
  ];

  // Initialize items immediately
  useEffect(() => {
    const initialItems: TickerItem[] = companies.slice(0, 10).map((company, index) => ({
      id: `item-${index}`,
      company,
      metric: generateMetric(),
    }));

    setItems(initialItems);
  }, []);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Dynamic metric updates every 6-10 seconds
  useEffect(() => {
    if (isReducedMotion || items.length === 0) return;

    const updateMetrics = () => {
      const now = Date.now();
      // Avoid updates too close together
      if (now - lastUpdateRef.current < 6000) return;

      lastUpdateRef.current = now;

      // Pick 2-3 random items to update
      const numUpdates = Math.floor(Math.random() * 2) + 2; // 2 or 3
      const indicesToUpdate = new Set<number>();

      while (indicesToUpdate.size < numUpdates && indicesToUpdate.size < items.length) {
        indicesToUpdate.add(Math.floor(Math.random() * items.length));
      }

      setItems((prevItems) => {
        const updated = [...prevItems];
        const updatedIds = new Set<string>();

        indicesToUpdate.forEach((index) => {
          const item = updated[index];
          if (!item) return;

          // Generate new metric, ensuring it's different from current
          let newMetric = generateMetric();
          let attempts = 0;
          while (
            newMetric.type === item.metric.type &&
            newMetric.value === item.metric.value &&
            attempts < 10
          ) {
            newMetric = generateMetric();
            attempts++;
          }

          updated[index] = {
            ...item,
            metric: newMetric,
          };
          updatedIds.add(item.id);
        });

        // Clear recent updates after 30 seconds
        recentUpdatesRef.current = updatedIds;
        setTimeout(() => {
          recentUpdatesRef.current.clear();
        }, 30000);

        return updated;
      });
    };

    // Initial delay, then periodic updates
    const scheduleUpdate = () => {
      const delay = 6000 + Math.random() * 4000; // 6-10 seconds
      updateIntervalRef.current = setTimeout(() => {
        updateMetrics();
        scheduleUpdate();
      }, delay);
    };

    scheduleUpdate();

    return () => {
      if (updateIntervalRef.current) {
        clearTimeout(updateIntervalRef.current);
      }
    };
  }, [items.length, isReducedMotion]);

  // Create duplicated items for seamless loop
  const duplicatedItems = useMemo(() => {
    return [...items, ...items];
  }, [items]);

  return (
    <section className="w-full bg-[#f9f6f4] pt-8 pb-2 md:pt-12 md:pb-4 relative" style={{ minHeight: '200px', zIndex: 1 }}>
      <div className="relative w-full max-w-full mx-auto">
        {/* Disclaimer */}
        

        {/* Ticker Container */}
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          style={{ minHeight: '80px', position: 'relative' }}
          role="marquee"
          aria-label="AI ROI metrics ticker"
          aria-live="polite"
        >
          {items.length === 0 ? (
            <div className="flex items-center justify-center" style={{ minHeight: '80px' }}>
              <div className="flex items-center gap-4">
                <span className="font-['Kalam',_sans-serif] text-slate-600">LARHUB</span>
                <span className="font-['Kalam',_sans-serif] text-green-600 font-normal">+$12,500/month</span>
              </div>
            </div>
          ) : isReducedMotion ? (
            /* Reduced motion fallback - static display */
            <div className="flex items-center justify-center gap-6 md:gap-[64px] px-4 flex-wrap">
              {items.slice(0, 7).map((item) => (
                <TickerItemComponent key={item.id} item={item} index={0} />
              ))}
            </div>
          ) : (
            <>
              {/* Gradient masks */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f9f6f4] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f9f6f4] to-transparent z-10 pointer-events-none" />

              {/* Scrolling items */}
              <div
                className="flex items-center animate-scroll-ticker gap-6 md:gap-[64px]"
                style={{
                  width: duplicatedItems.length > 0 ? `${duplicatedItems.length * 320}px` : 'auto',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {duplicatedItems.map((item, index) => (
                  <TickerItemComponent
                    key={`${item.id}-${index}`}
                    item={item}
                    index={index}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes scroll-ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes moneyPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }

        @keyframes timeRotate {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(15deg) scale(1.1);
          }
        }

        .animate-scroll-ticker {
          animation: scroll-ticker 18s linear infinite;
        }

        .animate-scroll-ticker:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-ticker {
            animation: none;
          }
          @keyframes moneyPulse {
            0%, 100% { transform: scale(1); }
          }
          @keyframes timeRotate {
            0%, 100% { transform: rotate(0deg) scale(1); }
          }
        }
      `}</style>
    </section>
  );
}

function TickerItemComponent({
  item,
  index,
}: {
  item: TickerItem;
  index: number;
}) {
  const [animatedValue, setAnimatedValue] = useState(item.metric.value);
  const [currentMetricType, setCurrentMetricType] = useState(item.metric.type);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevMetricRef = useRef(item.metric);
  const animationFrameRef = useRef<number | null>(null);

  // Initialize animated value when component mounts
  useEffect(() => {
    setAnimatedValue(item.metric.value);
    setCurrentMetricType(item.metric.type);
    prevMetricRef.current = item.metric;
  }, []);

  // Animate value change with count-up effect
  useEffect(() => {
    const hasChanged = 
      prevMetricRef.current.type !== item.metric.type ||
      prevMetricRef.current.value !== item.metric.value;

    if (hasChanged) {
      // Cancel any ongoing animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      setIsAnimating(true);
      
      // If metric type changed, update immediately
      if (prevMetricRef.current.type !== item.metric.type) {
        setCurrentMetricType(item.metric.type);
      }

      const startValue = prevMetricRef.current.value;
      const endValue = item.metric.value;
      const duration = 800; // Animation duration in ms
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation (easeOutCubic)
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (endValue - startValue) * easeOutCubic;
        
        setAnimatedValue(currentValue);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Ensure final value is exact
          setAnimatedValue(endValue);
          setIsAnimating(false);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
      prevMetricRef.current = item.metric;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [item.metric]);

  // Format the animated value based on metric type
  const formatAnimatedValue = (): string => {
    const type = currentMetricType || item.metric.type;
    let value: number;

    switch (type) {
      case "fteSaved":
        // FTE values are stored as decimals (e.g., 1.4, 2.3)
        value = Math.round(animatedValue * 10) / 10;
        return `+${value.toFixed(1)} FTE`;
      case "moneyMonthly":
      case "moneyYearly":
        value = Math.round(animatedValue);
        const prefix = type === "moneyMonthly" ? "/month" : "/year";
        return `+$${value.toLocaleString()}${prefix}`;
      case "hoursWeekly":
        value = Math.round(animatedValue);
        return `+${value} hrs/week`;
      case "percentFaster":
        value = Math.round(animatedValue);
        return `+${value}% faster`;
      case "tasksWeekly":
        value = Math.round(animatedValue);
        return `+${value} tasks/week`;
      default:
        return item.metric.formatted;
    }
  };

  return (
    <div
      className="flex items-center gap-2 md:gap-3 shrink-0"
      style={{ minWidth: "280px" }}
      role="presentation"
      aria-label={`${item.company.name}: ${item.metric.formatted}`}
    >
      <span className="font-['Kalam',_sans-serif] text-[14px] md:text-[16px] text-slate-700 not-italic whitespace-nowrap">
        {item.company.name}
      </span>
      <span
        className={`font-['Kalam',_sans-serif] text-[16px] md:text-[18px] font-normal text-green-600 not-italic whitespace-nowrap inline-flex items-center transition-all duration-300 ${
          isAnimating ? "scale-105" : "scale-100"
        }`}
        style={{ color: "var(--color-green-600)" }}
      >
        <UpArrow />
        {(() => {
          const type = currentMetricType || item.metric.type;
          if (type === "moneyMonthly" || type === "moneyYearly") {
            return <MoneyIcon isAnimating={isAnimating} />;
          } else if (type === "hoursWeekly") {
            return <TimeIcon isAnimating={isAnimating} />;
          }
          return null;
        })()}
        <span className="inline-block">
          {formatAnimatedValue()}
        </span>
      </span>
    </div>
  );
}

