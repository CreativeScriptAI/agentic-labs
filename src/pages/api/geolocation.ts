import type { NextApiRequest, NextApiResponse } from "next";

type GeolocationResponse = {
  country: string;
  country_code: string;
  source: string;
};

type ErrorResponse = {
  error: string;
  details?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GeolocationResponse | ErrorResponse>
) {
  try {
    console.log("🌍 [Geolocation API] Request received");

    // 1. Check Vercel geo headers (production)
    const vercelCountry = req.headers["x-vercel-ip-country"] as string;
    if (vercelCountry) {
      console.log(
        "✅ [Geolocation] Detected from Vercel headers:",
        vercelCountry
      );
      return res.status(200).json({
        country: vercelCountry,
        country_code: vercelCountry,
        source: "vercel-headers",
      });
    }

    // 2. Check CloudFlare geo headers
    const cfCountry = req.headers["cf-ipcountry"] as string;
    if (cfCountry) {
      console.log(
        "✅ [Geolocation] Detected from CloudFlare headers:",
        cfCountry
      );
      return res.status(200).json({
        country: cfCountry,
        country_code: cfCountry,
        source: "cloudflare-headers",
      });
    }

    // 3. Get client IP
    const forwarded = req.headers["x-forwarded-for"] as string;
    const ip = forwarded ? forwarded.split(",")[0] : req.socket.remoteAddress;
    console.log("🔍 [Geolocation] Client IP:", ip);

    // 4. Fallback: Use ip-api.com for IP geolocation (free, no key needed)
    if (ip && ip !== "::1" && ip !== "127.0.0.1") {
      console.log("🌐 [Geolocation] Calling ip-api.com for IP:", ip);
      const response = await fetch(
        `http://ip-api.com/json/${ip}?fields=country,countryCode`
      );

      if (response.ok) {
        const data = await response.json();
        console.log("✅ [Geolocation] IP-API response:", data);
        return res.status(200).json({
          country: data.country || "Unknown",
          country_code: data.countryCode || "US",
          source: "ip-api",
        });
      } else {
        console.log("❌ [Geolocation] IP-API request failed:", response.status);
      }
    } else {
      console.log("⚠️ [Geolocation] Local IP detected, using fallback");
    }

    // 5. Final fallback: Default to US
    console.log("⚠️ [Geolocation] Using default fallback (US)");
    return res.status(200).json({
      country: "United States",
      country_code: "US",
      source: "default-fallback",
    });
  } catch (error) {
    console.error("❌ [Geolocation] Error:", error);

    // Return default on error
    return res.status(200).json({
      country: "United States",
      country_code: "US",
      source: "error-fallback",
    });
  }
}
