import { AppPropsWithLayout } from "../types";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import { RootLayout } from "src/layouts";
import { queryClient } from "src/libs/react-query";
import { mondwest, neuebit } from "src/assets/fonts";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { usePerformanceMonitor } from "src/hooks/usePerformanceMonitor";
import "src/styles/globals.css";

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

    const handleRouteChangeComplete = () => {
      // Scroll to top on route change (except back navigation)
      window.scrollTo(0, 0);
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
  }, [router.events]);

  return (
    <div className={`${mondwest.variable} ${neuebit.variable}`}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
        </HydrationBoundary>
      </QueryClientProvider>
    </div>
  );
}

export default App;
