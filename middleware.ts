import { NextRequest, NextResponse } from "next/server";

// COMMENTED OUT: Language/locale pages and auto-redirection disabled
// Supported countries for localized routes
// const SUPPORTED_COUNTRIES = ["IN", "US", "CA", "AU", "AE", "GB"] as const;
// type SupportedCountry = (typeof SUPPORTED_COUNTRIES)[number];

// Country code to route mapping
// const COUNTRY_ROUTES: Record<SupportedCountry, string> = {
//   IN: "en-in",
//   US: "en-us",
//   CA: "en-ca",
//   AU: "en-au",
//   AE: "en-ae",
//   GB: "en-gb",
// };

// Routes that should be excluded from country-based routing
// const EXCLUDED_PATHS = [
//   "/api",
//   "/_next",
//   "/static",
//   "/favicon.ico",
//   "/robots.txt",
//   "/sitemap.xml",
//   "/manifest.webmanifest",
//   "/~partytown",
// ];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── Voice agent geo-routing ───────────────────────────────────────────────
  // India (IN) → /ai-voice-agent (India pricing)
  // Everyone else → /ai-voice-agent-global (global pricing)
  const isVoiceIndia  = pathname === "/ai-voice-agent"  || pathname === "/ai-voice-agent/";
  const isVoiceGlobal = pathname === "/ai-voice-agent-global" || pathname === "/ai-voice-agent-global/";

  if (isVoiceIndia || isVoiceGlobal) {
    const url = request.nextUrl.clone();

    // ── Manual override via ?version=global or ?version=india ────────────────
    // Useful for demos: share /ai-voice-agent?version=global to show global
    // pricing to a US client even when opening from India.
    // The override is stored in a cookie so it persists for the session.
    const versionParam = request.nextUrl.searchParams.get("version");
    const versionCookie = request.cookies.get("voice-version")?.value;
    const version = versionParam ?? versionCookie ?? null;

    if (version === "global") {
      url.pathname = "/ai-voice-agent-global";
      url.searchParams.delete("version");
      const res = NextResponse.rewrite(url);
      if (versionParam) res.cookies.set("voice-version", "global", { path: "/", maxAge: 60 * 60 * 24 });
      return res;
    }

    if (version === "india") {
      url.pathname = "/ai-voice-agent";
      url.searchParams.delete("version");
      const res = NextResponse.rewrite(url);
      if (versionParam) res.cookies.set("voice-version", "india", { path: "/", maxAge: 60 * 60 * 24 });
      return res;
    }
    // ─────────────────────────────────────────────────────────────────────────

    // ── Geo-based routing (no override set) ──────────────────────────────────
    const country =
      request.headers.get("x-vercel-ip-country") ||
      request.headers.get("cf-ipcountry") ||
      request.headers.get("x-country-code") ||
      null;

    const isIndia = country === "IN";

    // Non-Indian visitor on /ai-voice-agent → serve global page silently
    if (!isIndia && isVoiceIndia) {
      url.pathname = "/ai-voice-agent-global";
      return NextResponse.rewrite(url);
    }

    // Indian visitor on /ai-voice-agent-global → serve India page silently
    if (isIndia && isVoiceGlobal) {
      url.pathname = "/ai-voice-agent";
      return NextResponse.rewrite(url);
    }
  }
  // ─────────────────────────────────────────────────────────────────────────

  // COMMENTED OUT: Auto-redirect to language/locale pages disabled
  // const { pathname } = request.nextUrl;

  // Skip excluded paths
  // if (EXCLUDED_PATHS.some((path) => pathname.startsWith(path))) {
  //   return NextResponse.next();
  // }

  // Skip if already on a country-specific route
  // const countryPrefixes = Object.values(COUNTRY_ROUTES);
  // if (countryPrefixes.some((prefix) => pathname.startsWith(`/${prefix}`))) {
  //   return NextResponse.next();
  // }

  // Get country from various sources
  // let countryCode: string | null = null;

  // 1. Check cookie preference (highest priority)
  // const cookieCountry = request.cookies.get("user-country")?.value;
  // if (
  //   cookieCountry &&
  //   SUPPORTED_COUNTRIES.includes(cookieCountry as SupportedCountry)
  // ) {
  //   countryCode = cookieCountry;
  // }

  // 2. Check Vercel geo header (for Vercel deployments)
  // if (!countryCode) {
  //   countryCode = request.headers.get("x-vercel-ip-country") || null;
  // }

  // 3. Check CloudFlare geo header (for CloudFlare deployments)
  // if (!countryCode) {
  //   countryCode = request.headers.get("cf-ipcountry") || null;
  // }

  // 4. Check custom geo header (for other proxies/CDNs)
  // if (!countryCode) {
  //   countryCode = request.headers.get("x-country-code") || null;
  // }

  // If country is supported, redirect to country-specific route
  // if (
  //   countryCode &&
  //   SUPPORTED_COUNTRIES.includes(countryCode as SupportedCountry)
  // ) {
  //   const countryRoute = COUNTRY_ROUTES[countryCode as SupportedCountry];
  //   const newUrl = request.nextUrl.clone();

  //   // Handle trailing slashes
  //   const cleanPathname =
  //     pathname.endsWith("/") && pathname !== "/"
  //       ? pathname.slice(0, -1)
  //       : pathname;

  //   // Special case for home page
  //   if (cleanPathname === "" || cleanPathname === "/") {
  //     newUrl.pathname = `/${countryRoute}/`;
  //   } else {
  //     newUrl.pathname = `/${countryRoute}${cleanPathname}`;
  //   }

  //   // Redirect to country-specific URL (URL will show the country prefix)
  //   const response = NextResponse.redirect(newUrl, 307); // 307 Temporary Redirect

  //   // Set cookie to remember preference (this also makes it available to client-side)
  //   response.cookies.set("user-country", countryCode, {
  //     maxAge: 60 * 60 * 24 * 30, // 30 days
  //     path: "/",
  //     sameSite: "lax",
  //   });

  //   return response;
  // }

  // For unsupported countries, serve the default content
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|~partytown).*)",
  ],
};
