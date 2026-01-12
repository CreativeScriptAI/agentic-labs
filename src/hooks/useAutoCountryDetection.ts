import { useEffect, useState, useRef } from "react";
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
  const hasRunRef = useRef(false); // Track if detection has already run

  useEffect(() => {
    // Prevent running multiple times
    if (hasRunRef.current) {
      console.log("⏭️  [Country Detection] Already ran, skipping...");
      return;
    }
    hasRunRef.current = true;

    // Only run once on mount
    const detectAndRedirect = async () => {
      console.log("🔍 [Country Detection] Starting...");
      console.log("📍 [Country Detection] pathname:", router.pathname);
      console.log("📍 [Country Detection] asPath:", router.asPath);

      // Check if we already have a user preference
      const cookies = document.cookie.split(";");
      console.log("🍪 [Country Detection] All cookies:", document.cookie);
      const userCountryCookie = cookies.find((c) =>
        c.trim().startsWith("user-country=")
      );

      if (userCountryCookie) {
        const savedCountry = userCountryCookie.split("=")[1];
        console.log(
          "✅ [Country Detection] Found saved preference:",
          savedCountry
        );
        // User already has a country preference, don't detect
        return;
      }

      console.log("📍 [Country Detection] No saved cookie found");

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
      console.log("📍 [Country Detection] Path parts:", pathParts);
      if (pathParts.length > 0 && countryRoutes.includes(pathParts[0])) {
        console.log(
          "✅ [Country Detection] Already on country route:",
          pathParts[0]
        );
        // Already on a country route, don't detect
        return;
      }

      console.log(
        "🌐 [Country Detection] Not on country route, starting detection..."
      );
      setIsDetecting(true);

      try {
        // Use the geolocation API endpoint
        console.log("📡 [Country Detection] Calling /api/geolocation");
        const response = await fetch("/api/geolocation");
        console.log("📡 [Country Detection] Response status:", response.status);

        if (!response.ok) {
          throw new Error(
            `Geolocation API failed with status ${response.status}`
          );
        }

        const data: GeolocationResponse = await response.json();
        const countryCode = data.country_code || data.country;
        console.log("📍 [Country Detection] Full response:", data);
        console.log("📍 [Country Detection] Detected country:", countryCode);
        console.log("📍 [Country Detection] Checking if supported...");
        console.log(
          "📍 [Country Detection] isSupportedCountry result:",
          isSupportedCountry(countryCode)
        );

        if (countryCode && isSupportedCountry(countryCode)) {
          setDetectedCountry(countryCode);
          console.log("✅ [Country Detection] Country IS supported!");

          // Set cookie to remember this detection
          const cookieValue = `user-country=${countryCode}; path=/; max-age=${
            60 * 60 * 24 * 30
          }`;
          console.log("🍪 [Country Detection] Setting cookie:", cookieValue);
          document.cookie = cookieValue;
          console.log(
            "🍪 [Country Detection] Cookie after set:",
            document.cookie
          );

          // Build the country-specific URL
          const countryRoute = getCountryRoute(countryCode);
          console.log(
            "📍 [Country Detection] Country route result:",
            countryRoute
          );

          if (countryRoute) {
            const currentPath = router.asPath;
            const newPath =
              currentPath === "/" || currentPath === ""
                ? `/${countryRoute}/`
                : `/${countryRoute}${currentPath}`;

            console.log("🚀 [Country Detection] Current path:", currentPath);
            console.log("🚀 [Country Detection] New path:", newPath);
            console.log("🚀 [Country Detection] Calling router.push...");

            // Navigate to country-specific version (shows country in URL)
            const pushResult = await router.push(newPath);
            console.log(
              "✅ [Country Detection] router.push result:",
              pushResult
            );
          } else {
            console.log(
              "❌ [Country Detection] No route found for country:",
              countryCode
            );
          }
        } else {
          console.log(
            "⚠️ [Country Detection] Country NOT supported:",
            countryCode
          );
        }
      } catch (error) {
        console.error("❌ [Country Detection] Error occurred:", error);
        console.error(
          "❌ [Country Detection] Error stack:",
          error instanceof Error ? error.stack : "N/A"
        );
        // Silently fail - user stays on global version
      } finally {
        setIsDetecting(false);
        console.log("🏁 [Country Detection] Detection complete");
      }
    };

    // Run detection immediately (removed delay for debugging)
    console.log("⏰ [Country Detection] Starting detection immediately...");
    detectAndRedirect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

  return { isDetecting, detectedCountry };
}
