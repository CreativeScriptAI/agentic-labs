import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  COUNTRY_NAMES,
  COUNTRY_ROUTES,
  type SupportedCountry,
} from "src/lib/country-utils";
import { useCountry } from "src/hooks/useCountry";

const CountrySelector = () => {
  const router = useRouter();
  const { countryCode, isCountrySpecific } = useCountry();
  const [isOpen, setIsOpen] = useState(false);
  const [detectedCountry, setDetectedCountry] =
    useState<SupportedCountry | null>(null);

  // Read the country from cookie on mount (auto-detected by middleware or previously set)
  useEffect(() => {
    const cookies = document.cookie.split(";");
    const userCountryCookie = cookies.find((c) =>
      c.trim().startsWith("user-country=")
    );

    if (userCountryCookie) {
      const cookieValue = userCountryCookie.split("=")[1];
      if (cookieValue && cookieValue !== "") {
        setDetectedCountry(cookieValue as SupportedCountry);
      }
    }
  }, []);

  const handleCountryChange = async (
    newCountryCode: SupportedCountry | "default"
  ) => {
    setIsOpen(false);

    // Get the current path without the country prefix
    const pathParts = router.pathname.split("/").filter(Boolean);
    const supportedCountries = Object.values(COUNTRY_ROUTES);

    let currentPath = router.pathname;
    if (pathParts.length > 0 && supportedCountries.includes(pathParts[0])) {
      // Remove the country prefix
      currentPath = "/" + pathParts.slice(1).join("/");
    }

    // Build new path
    let newPath = currentPath;
    if (newCountryCode !== "default") {
      const countryRoute = COUNTRY_ROUTES[newCountryCode];
      newPath = `/${countryRoute}${currentPath === "/" ? "" : currentPath}`;
    }

    // Set cookie to remember preference
    document.cookie = `user-country=${
      newCountryCode === "default" ? "" : newCountryCode
    }; path=/; max-age=${60 * 60 * 24 * 30}`;

    // Only navigate if the new path is different from the current path
    // This prevents the error: "attempted to hard navigate to the same URL"
    if (newPath !== router.asPath) {
      await router.push(newPath);
    }
  };

  const countries: Array<{
    code: SupportedCountry | "default";
    name: string;
    flag: string;
  }> = [
    { code: "default", name: "Global", flag: "🌍" },
    { code: "IN", name: COUNTRY_NAMES.IN, flag: "🇮🇳" },
    { code: "US", name: COUNTRY_NAMES.US, flag: "🇺🇸" },
    { code: "CA", name: COUNTRY_NAMES.CA, flag: "🇨🇦" },
    { code: "AU", name: COUNTRY_NAMES.AU, flag: "🇦🇺" },
    { code: "AE", name: COUNTRY_NAMES.AE, flag: "🇦🇪" },
    { code: "GB", name: COUNTRY_NAMES.GB, flag: "🇬🇧" },
  ];

  // Determine the current country from URL path or detected country (from cookie)
  const currentCountryCode = countryCode || detectedCountry || "default";
  const currentCountry = countries.find((c) => c.code === currentCountryCode);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Select country"
        aria-expanded={isOpen}
      >
        <span className="text-lg leading-none">
          {currentCountry?.flag || "🌍"}
        </span>
        <span className="hidden sm:inline">
          {currentCountry?.name || "Global"}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-56 max-h-[400px] overflow-y-auto country-dropdown-scroll rounded-lg shadow-xl bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-700 z-50 border border-gray-100 dark:border-gray-800">
            <div className="py-2" role="menu" aria-orientation="vertical">
              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => handleCountryChange(country.code)}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-all duration-150 ${
                    currentCountry?.code === country.code
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                  role="menuitem"
                >
                  <span className="text-lg flex-shrink-0">{country.flag}</span>
                  <span className="flex-1">{country.name}</span>
                  {currentCountry?.code === country.code && (
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountrySelector;
