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
import Script from "next/script";
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

      {/* Third-party analytics loaded after the page is interactive and idle */}
      {/* (lazyOnload) so they stay outside the Total Blocking Time window. */}

      {/* Google tag (gtag.js) loader - covers Google Ads and GA4 */}
      <Script
        id="gtag-loader"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17453709032"
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17453709032');
          gtag('config', 'G-PW19164HWX');
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script id="gtm" strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N8HPKS8Z');
        `}
      </Script>

      {/* Hotjar Tracking Code for https://tryagentikai.com */}
      <Script id="hotjar" strategy="lazyOnload">
        {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:6592201,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
    </>
  );
}

export default App;
