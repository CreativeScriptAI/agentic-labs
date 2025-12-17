import { useRouter } from "next/router";
import { useMemo } from "react";
import {
  getAllCountryRoutes,
  getCountryCodeFromRoute,
} from "src/lib/country-utils";

export function useCountry() {
  const router = useRouter();

  const countryData = useMemo(() => {
    const supportedCountries = getAllCountryRoutes();
    const pathParts = router.pathname.split("/").filter(Boolean);

    if (pathParts.length > 0 && supportedCountries.includes(pathParts[0])) {
      const countryRoute = pathParts[0];
      const countryCode = getCountryCodeFromRoute(countryRoute);

      return {
        isCountrySpecific: true,
        countryRoute,
        countryCode,
        countryPrefix: `/${countryRoute}`,
      };
    }

    return {
      isCountrySpecific: false,
      countryRoute: null,
      countryCode: null,
      countryPrefix: "",
    };
  }, [router.pathname]);

  // Helper function to build country-aware URLs
  const buildUrl = (path: string) => {
    if (!countryData.isCountrySpecific) {
      return path;
    }

    // Handle root path
    if (path === "/" || path === "") {
      return countryData.countryPrefix;
    }

    // Remove leading slash if present for consistency
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;

    return `${countryData.countryPrefix}/${cleanPath}`;
  };

  return {
    ...countryData,
    buildUrl,
  };
}
