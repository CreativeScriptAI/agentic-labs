import { AppPropsWithLayout } from "../types";
import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import { RootLayout } from "../layouts";
import { queryClient } from "../libs/react-query";
import { mondwest, neuebit } from "../assets/fonts";
import { useRouter } from "next/router";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import "../styles/globals.css";

// Performance: Lazy load development-only components (tree-shaken in production)
const PerformanceDashboard = dynamic(
  () => import("../components/PerformanceDashboard"),
  { ssr: false }
);

function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${mondwest.variable} ${neuebit.variable}`}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
        </HydrationBoundary>
      </QueryClientProvider>
      {process.env.NODE_ENV === "development" && <PerformanceDashboard />}
    </div>
  );
}

export default App;
