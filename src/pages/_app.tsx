import { AppPropsWithLayout } from "../types";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import { RootLayout } from "../layouts";
import { queryClient } from "../libs/react-query";
import { mondwest, neuebit, alteHaas, geistMono } from "../assets/fonts";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { usePerformanceMonitor } from "../hooks/usePerformanceMonitor";
import PerformanceDashboard from "../components/PerformanceDashboard";
import Head from "next/head";
import "../styles/globals.css";

function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);

  // Monitor performance metrics
  usePerformanceMonitor();

  // Handle scroll restoration
  useEffect(() => {
    const handleRouteChangeStart = () => {
      // Disable automatic scroll restoration
      if (
        typeof window !== "undefined" &&
        "scrollRestoration" in window.history
      ) {
        window.history.scrollRestoration = "manual";
      }
    };

    const handleRouteChangeComplete = (url: string) => {
      // Scroll to top only on full page navigations — skip hash-only changes (#section)
      // on the same path, which are in-page anchor jumps and should not reset scroll.
      const currentPath = window.location.pathname;
      const newPath = url.split("#")[0].split("?")[0];
      if (newPath && newPath !== currentPath) {
        window.scrollTo(0, 0);
      }
    };

    // Set scroll restoration to manual on initial load
    if (
      typeof window !== "undefined" &&
      "scrollRestoration" in window.history
    ) {
      window.history.scrollRestoration = "manual";
    }

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load ALL third-party analytics (Google Ads gtag, GA4, GTM, Hotjar) only
  // after the first user interaction, with a 6s idle fallback so no-interaction
  // sessions are still tracked. This keeps every third-party script out of the
  // initial load and the Total Blocking Time window.
  useEffect(() => {
    let done = false;
    const inject = (src: string) => {
      const s = document.createElement("script");
      s.async = true;
      s.src = src;
      document.head.appendChild(s);
    };
    const load = () => {
      if (done) return;
      done = true;
      cleanup();

      // Google tag (gtag.js) - Google Ads (AW-17453709032) + GA4 (G-PW19164HWX)
      const w = window as unknown as { dataLayer?: unknown[] };
      w.dataLayer = w.dataLayer || [];
      function gtag(...args: unknown[]) {
        w.dataLayer!.push(args);
      }
      gtag("js", new Date());
      gtag("config", "AW-17453709032");
      gtag("config", "G-PW19164HWX");
      inject("https://www.googletagmanager.com/gtag/js?id=AW-17453709032");

      // Google Tag Manager (GTM-N8HPKS8Z)
      inject("https://www.googletagmanager.com/gtm.js?id=GTM-N8HPKS8Z");

      // Hotjar (hjid 6592201)
      const h = window as unknown as {
        hj?: ((...args: unknown[]) => void) & { q?: unknown[] };
        _hjSettings?: { hjid: number; hjsv: number };
      };
      h.hj =
        h.hj ||
        function (...args: unknown[]) {
          (h.hj!.q = h.hj!.q || []).push(args);
        };
      h._hjSettings = { hjid: 6592201, hjsv: 6 };
      inject(
        `https://static.hotjar.com/c/hotjar-${h._hjSettings.hjid}.js?sv=${h._hjSettings.hjsv}`
      );

      // Microsoft Clarity (heatmaps + session recordings + analytics).
      // Set CLARITY_PROJECT_ID to the 10-char project id from clarity.microsoft.com.
      // Left empty = Clarity does not load, so this is inert until the id is set.
      const CLARITY_PROJECT_ID = "yb1e18vsqg";
      if (CLARITY_PROJECT_ID) {
        const c = window as unknown as {
          clarity?: ((...args: unknown[]) => void) & { q?: unknown[] };
        };
        c.clarity =
          c.clarity ||
          function (...args: unknown[]) {
            (c.clarity!.q = c.clarity!.q || []).push(args);
          };
        inject(`https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`);
      }
    };
    const events: Array<keyof WindowEventMap> = [
      "scroll",
      "pointerdown",
      "keydown",
      "touchstart",
    ];
    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, load));
      window.clearTimeout(timer);
    };
    events.forEach((e) =>
      window.addEventListener(e, load, { once: true, passive: true })
    );
    const timer = window.setTimeout(load, 6000);
    return cleanup;
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover"
        />
      </Head>
      <div className={`${mondwest.variable} ${neuebit.variable} ${alteHaas.variable} ${geistMono.variable}`}>
        <QueryClientProvider client={queryClient}>
          <HydrationBoundary state={pageProps.dehydratedState}>
            <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
          </HydrationBoundary>
        </QueryClientProvider>
        {process.env.NODE_ENV === "development" && <PerformanceDashboard />}
      </div>
      {/* All third-party analytics (gtag, GA4, GTM, Hotjar) are injected by the
          interaction/idle-gated effect above, so none of them run in the
          initial load or Total Blocking Time window. */}
    </>
  );
}

export default App;
