import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isSupportedCountry, getCountryRoute } from "src/lib/country-utils";

interface GeolocationResponse {
  country: string;
  country_code: string;
}

export function useAutoCountryDetection() {
  const router = useRouter();
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);

  useEffect(() => {
    // Only run once on mount
    const detectAndRedirect = async () => {
      // Check if we already have a user preference
      const cookies = document.cookie.split(";");
      const userCountryCookie = cookies.find((c) =>
        c.trim().startsWith("user-country=")
      );

      if (userCountryCookie) {
        // User already has a country preference, don't detect
        return;
      }

      // Check if we're already on a country-specific route
      const pathParts = router.pathname.split("/").filter(Boolean);
      const countryRoutes = [
        "en-in",
        "en-us",
        "en-ca",
        "en-au",
        "en-ae",
        "en-gb",
      ];
      if (pathParts.length > 0 && countryRoutes.includes(pathParts[0])) {
        // Already on a country route, don't detect
        return;
      }

      setIsDetecting(true);

      try {
        // Use the geolocation API endpoint
        const response = await fetch("/api/geolocation");

        if (!response.ok) {
          throw new Error("Geolocation API failed");
        }

        const data: GeolocationResponse = await response.json();
        const countryCode = data.country_code || data.country;

        if (countryCode && isSupportedCountry(countryCode)) {
          setDetectedCountry(countryCode);

          // Set cookie to remember this detection
          document.cookie = `user-country=${countryCode}; path=/; max-age=${
            60 * 60 * 24 * 30
          }`;

          // Build the country-specific URL
          const countryRoute = getCountryRoute(countryCode);
          if (countryRoute) {
            const currentPath = router.asPath;
            const newPath =
              currentPath === "/" || currentPath === ""
                ? `/${countryRoute}/`
                : `/${countryRoute}${currentPath}`;

            // Navigate to country-specific version (shows country in URL)
            await router.push(newPath);
          }
        }
      } catch (error) {
        console.error("Failed to detect country:", error);
        // Silently fail - user stays on global version
      } finally {
        setIsDetecting(false);
      }
    };

    // Run detection after a small delay to not block initial render
    const timer = setTimeout(detectAndRedirect, 500);

    return () => clearTimeout(timer);
  }, [router]); // Run only once on mount (router included to satisfy deps)

  return { isDetecting, detectedCountry };
}
