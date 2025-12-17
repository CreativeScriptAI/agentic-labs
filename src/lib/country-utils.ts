// Country configuration
export const SUPPORTED_COUNTRIES = [
  "IN",
  "US",
  "CA",
  "AU",
  "AE",
  "GB",
] as const;
export type SupportedCountry = (typeof SUPPORTED_COUNTRIES)[number];

export const COUNTRY_ROUTES: Record<SupportedCountry, string> = {
  IN: "en-in",
  US: "en-us",
  CA: "en-ca",
  AU: "en-au",
  AE: "en-ae",
  GB: "en-gb",
};

export const COUNTRY_NAMES: Record<SupportedCountry, string> = {
  IN: "India",
  US: "United States",
  CA: "Canada",
  AU: "Australia",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
};

// Get country route from country code
export function getCountryRoute(countryCode: string): string | null {
  if (SUPPORTED_COUNTRIES.includes(countryCode as SupportedCountry)) {
    return COUNTRY_ROUTES[countryCode as SupportedCountry];
  }
  return null;
}

// Get country code from route
export function getCountryCodeFromRoute(
  route: string
): SupportedCountry | null {
  const entry = Object.entries(COUNTRY_ROUTES).find(
    ([_, value]) => value === route
  );
  return entry ? (entry[0] as SupportedCountry) : null;
}

// Get country name from country code
export function getCountryName(countryCode: string): string | null {
  if (SUPPORTED_COUNTRIES.includes(countryCode as SupportedCountry)) {
    return COUNTRY_NAMES[countryCode as SupportedCountry];
  }
  return null;
}

// Check if a country is supported
export function isSupportedCountry(countryCode: string): boolean {
  return SUPPORTED_COUNTRIES.includes(countryCode as SupportedCountry);
}

// Get all country routes
export function getAllCountryRoutes(): string[] {
  return Object.values(COUNTRY_ROUTES);
}

// Build country-aware URL
export function buildCountryUrl(path: string, countryCode?: string): string {
  if (!countryCode || !isSupportedCountry(countryCode)) {
    return path;
  }

  const countryRoute = getCountryRoute(countryCode);
  if (!countryRoute) {
    return path;
  }

  // Handle root path
  if (path === "/" || path === "") {
    return `/${countryRoute}`;
  }

  // Handle paths that already start with country route
  if (path.startsWith(`/${countryRoute}`)) {
    return path;
  }

  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `/${countryRoute}/${cleanPath}`;
}
