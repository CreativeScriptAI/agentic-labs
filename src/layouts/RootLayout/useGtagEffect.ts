import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "src/libs/gtag";
import { CONFIG } from "site.config";

const useGtagEffect = () => {
  const router = useRouter();
  useEffect(() => {
    if (
      !(
        CONFIG.isProd &&
        (CONFIG as { googleAnalytics?: { enable?: boolean } })?.googleAnalytics
          ?.enable
      )
    )
      return;

    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return null;
};
export default useGtagEffect;
