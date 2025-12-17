# Country-Based Routing Implementation Guide

This document explains the country-based routing system implemented for the Agentic AI Labs website.

> **Note:** This system uses **fully automatic country detection** based on IP geolocation. There is no manual country selector UI - users are automatically routed to their country-specific version.

## Overview

The website automatically detects user location and serves country-specific content for supported countries:

- 🇮🇳 India (`/en-in/*`)
- 🇺🇸 United States (`/en-us/*`)
- 🇨🇦 Canada (`/en-ca/*`)
- 🇦🇺 Australia (`/en-au/*`)
- 🇦🇪 United Arab Emirates (`/en-ae/*`)
- 🇬🇧 United Kingdom (`/en-gb/*`)

Users from other countries see the default global content.

### URL Structure

**Country-specific URLs** (for supported countries):

- Homepage: `https://tryagentikai.com/en-in/`
- About page: `https://tryagentikai.com/en-in/about/`
- Services: `https://tryagentikai.com/en-us/services/`
- Blog post: `https://tryagentikai.com/en-ca/blog/post-slug/`

**Global URLs** (for unsupported countries or manual global selection):

- Homepage: `https://tryagentikai.com/`
- About page: `https://tryagentikai.com/about/`
- Services: `https://tryagentikai.com/services/`

**How it works:**

1. User visits `https://tryagentikai.com/`
2. System detects country (e.g., India)
3. Browser redirects to `https://tryagentikai.com/en-in/`
4. URL bar shows the country prefix

## Architecture

### 1. Middleware (`/middleware.ts`)

The middleware intercepts all requests and:

1. **Server-Side Detection** (via middleware) - Priority order:

   - Cookie preference (`user-country`) - highest priority
   - Vercel geo header (`x-vercel-ip-country`) - for Vercel deployments
   - CloudFlare geo header (`cf-ipcountry`) - for CloudFlare deployments
   - Custom geo header (`x-country-code`) - for other CDNs

2. **Client-Side Detection** (via `useAutoCountryDetection` hook):

   - Runs automatically on first visit (when no cookie exists)
   - Calls `/api/geolocation` (proxied to ipapi.co) to detect country from IP
   - Automatically redirects to country-specific version
   - Sets a cookie to remember the preference

3. For supported countries:

   - Automatically redirects to country-specific URL (e.g., `/en-in/about`)
   - URL shows the country prefix for clear identification
   - Preference is saved in a cookie for 30 days
   - Country routing is fully automatic (no manual selection available)

4. For unsupported countries:
   - Serves default global content (no country prefix in URL)
   - No manual country selection available

**Important**:

- The system works **fully automatically** - no user interaction needed
- Server-side uses **redirect** (307 Temporary) to show country in URL
- Client-side detection happens in the background
- Cookie preference is always respected over automatic detection
- Country prefix is visible in URL for better UX and SEO
- **No manual country selector** - routing is based purely on IP/geo detection

### 2. Country-Specific Pages

All main pages have been duplicated for each country:

```
/src/pages/
├── en-in/
│   ├── index.tsx (home)
│   ├── about/index.tsx
│   ├── services.tsx
│   ├── contact.tsx
│   ├── blog/
│   │   ├── index.tsx
│   │   └── [slug]/index.tsx
│   ├── agent/[slug]/index.tsx
│   ├── audit/index.tsx
│   └── ai-clarity-workshop/index.tsx
├── en-us/ (same structure)
├── en-ca/ (same structure)
├── en-au/ (same structure)
├── en-ae/ (same structure)
└── en-gb/ (same structure)
```

### 3. Utility Functions (`/src/lib/country-utils.ts`)

Provides helper functions:

- `getCountryRoute(countryCode)` - Get route prefix from country code
- `getCountryCodeFromRoute(route)` - Get country code from route prefix
- `getCountryName(countryCode)` - Get full country name
- `isSupportedCountry(countryCode)` - Check if country is supported
- `buildCountryUrl(path, countryCode)` - Build country-aware URL

### 4. Custom Hooks

#### `useCountry` (`/src/hooks/useCountry.ts`)

React hook that provides country context:

- `isCountrySpecific` - Boolean indicating if on country-specific route
- `countryRoute` - Current country route (e.g., 'en-in')
- `countryCode` - Current country code (e.g., 'IN')
- `countryPrefix` - Current URL prefix (e.g., '/en-in')
- `buildUrl(path)` - Helper to build country-aware URLs

Usage:

```tsx
import { useCountry } from "src/hooks/useCountry";

const MyComponent = () => {
  const { countryCode, buildUrl } = useCountry();

  return (
    <Link href={buildUrl("/about")}>
      About Us {countryCode && `(${countryCode})`}
    </Link>
  );
};
```

#### `useAutoCountryDetection` (`/src/hooks/useAutoCountryDetection.ts`)

Automatic country detection hook that:

- Runs automatically on first visit (when no cookie exists)
- Skips detection if user already has a preference
- Skips detection if already on a country-specific route
- Calls geolocation API to detect country from IP address
- Automatically redirects to country-specific version
- Sets cookie to remember the detection

**How it works:**

1. Checks for existing `user-country` cookie
2. If no cookie, calls `/api/geolocation` (proxied to ipapi.co)
3. Validates detected country against supported countries
4. Sets cookie and redirects to country-specific URL
5. Runs only once on mount with a 500ms delay (non-blocking)

The hook is automatically integrated into `RootLayout`, so no manual setup is required!

### 5. Navigation Updates

#### Logo Component (`/src/layouts/RootLayout/Header/Logo.tsx`)

- Now uses `useCountry` hook
- Home link automatically adjusts based on current country

#### NavBar Component (`/src/layouts/RootLayout/Header/NavBar.tsx`)

- Now uses `useCountry` hook
- All navigation links automatically include country prefix

### 6. Country Selector Component (`/src/components/CountrySelector.tsx`)

**Note: The country selector dropdown is currently hidden from the UI.**

The system uses automatic country routing only. Users cannot manually change countries through the UI. The country is determined by:

1. IP-based geolocation (automatic)
2. Cookie preference (if previously set)
3. Geo headers from CDN (Vercel/CloudFlare)

If you need to enable manual country selection in the future, uncomment the `CountrySelector` component in `/src/layouts/RootLayout/Header/index.tsx`.

## Configuration

### Adding a New Country

1. **Update `middleware.ts`**:

```typescript
const SUPPORTED_COUNTRIES = [
  "IN",
  "US",
  "CA",
  "AU",
  "AE",
  "GB",
  "NEW_CODE",
] as const;

const COUNTRY_ROUTES: Record<SupportedCountry, string> = {
  // ... existing
  NEW_CODE: "new-country",
};
```

2. **Update `src/lib/country-utils.ts`**:

```typescript
export const SUPPORTED_COUNTRIES = [
  "IN",
  "US",
  "CA",
  "AU",
  "AE",
  "GB",
  "NEW_CODE",
] as const;

export const COUNTRY_ROUTES: Record<SupportedCountry, string> = {
  // ... existing
  NEW_CODE: "en-xx",
};

export const COUNTRY_NAMES: Record<SupportedCountry, string> = {
  // ... existing
  NEW_CODE: "New Country Name",
};
```

3. **Create country-specific pages**:

```bash
mkdir -p src/pages/en-xx/{about,blog,agent,audit,ai-clarity-workshop}
```

4. **Copy and adapt existing country pages** (e.g., from `/en-in` to `/en-xx`)

5. **Update `CountrySelector.tsx`** to add the new country with its flag emoji

## Automatic Country Detection

The system now includes **fully automatic country detection** without any user interruption:

### How It Works

1. **First Visit (No Cookie)**:

   - Client-side hook detects user's country from IP (via ipapi.co)
   - Automatically redirects to country-specific version
   - Sets cookie to remember preference

2. **Subsequent Visits**:

   - Cookie is checked first
   - User sees their country-specific content immediately
   - No additional API calls needed

3. **Persistence**:
   - Country preference is stored in cookie for 30 days
   - Works seamlessly across all pages and visits
   - No manual intervention required

### Benefits

- ✅ **Zero user interruption** - works silently in the background
- ✅ **Performance optimized** - 500ms delay to not block initial render
- ✅ **Privacy-friendly** - uses IP-based geolocation (no personal data)
- ✅ **Fallback support** - works even if geo headers aren't available
- ✅ **Fully automatic** - no UI elements, no user decisions needed

### Configuration

The geolocation API is already configured in `next.config.ts`:

```typescript
async rewrites() {
  return [
    {
      source: "/api/geolocation",
      destination: "https://ipapi.co/json/",
    },
  ];
}
```

This proxies requests to ipapi.co to avoid CORS issues and keep API calls server-side.

## Testing

### Local Testing

1. **Test automatic detection**:

   - Clear cookies in browser
   - Visit the homepage
   - Should automatically redirect to your country (if supported)
   - Check Network tab for `/api/geolocation` call

2. **Test with VPN**:

   - Connect to VPN in different country
   - Clear cookies
   - Visit site - should detect VPN country

3. **Test different countries (Developer only)**:

   ```javascript
   // In browser DevTools console:
   // Set country manually for testing
   document.cookie = "user-country=US; path=/; max-age=2592000";
   // Refresh page - will show US version

   document.cookie = "user-country=IN; path=/; max-age=2592000";
   // Refresh page - will show India version

   // Clear cookie to test auto-detection again
   document.cookie = "user-country=; path=/; max-age=0";
   // Refresh page - will auto-detect from IP
   ```

4. **Test navigation**:

   - Use the country selector dropdown
   - Verify navigation preserves country context
   - Check that cookie persists across page loads

5. **Test cookie preference**:

```javascript
// In browser console
document.cookie = "user-country=IN; path=/; max-age=2592000";
// Refresh page - should show India version
```

### Production Testing

After deployment to Vercel:

1. Test from actual locations in supported countries
2. Use VPN to simulate different countries
3. Test CDN caching behavior
4. Verify SEO metadata for country pages

## SEO Considerations

### Current Implementation

- Each country page has unique metadata (title, description, canonical URL)
- URLs show country prefix (middleware uses 307 redirect for automatic detection)
- All pages are statically generated at build time
- Country-specific URLs are SEO-friendly (e.g., `/en-in/about`, `/en-us/services`)

### Recommendations

1. **Hreflang tags**: Add alternate language/region tags

```html
<link rel="alternate" hreflang="en-IN" href="https://tryagentikai.com/en-in" />
<link rel="alternate" hreflang="en-US" href="https://tryagentikai.com/en-us" />
<!-- etc -->
```

2. **Sitemap**: Generate separate sitemaps for each country or include all country URLs

3. **Canonical URLs**: Already implemented - each country page has its own canonical

4. **Structured Data**: Already implemented - each page includes appropriate schema.org markup

## Performance

### Optimizations Implemented

1. **Static Generation**: All country pages are pre-rendered at build time
2. **Middleware Efficiency**: Lightweight country detection logic
3. **Cookie-based Preference**: Reduces repeated detection overhead
4. **Code Splitting**: Country-specific pages are automatically code-split by Next.js

### Bundle Size Impact

- Middleware: ~2KB
- Country utilities: ~1KB
- Country selector component: ~3KB
- Hook: ~1KB
- Total overhead: ~7KB (minified + gzipped: ~2KB)

## Customization

### Country-Specific Content

To add country-specific content to a page:

```tsx
import { useCountry } from "src/hooks/useCountry";

const MyPage = () => {
  const { countryCode } = useCountry();

  return (
    <div>
      <h1>Welcome!</h1>
      {countryCode === "IN" && <p>Special offer for India!</p>}
      {countryCode === "US" && <p>Special offer for USA!</p>}
    </div>
  );
};
```

### Styling Country-Specific Elements

```tsx
<div className={`banner ${countryCode === "IN" ? "india-theme" : ""}`}>
  Country-specific styling
</div>
```

## Troubleshooting

### Country not detected correctly

- Check middleware logs in Vercel
- Verify geo headers are being sent
- Test cookie-based override
- Check excluded paths in middleware config

### Navigation not working

- Verify `useCountry` hook is imported correctly
- Check that links use `buildUrl()` or `countryPrefix`
- Ensure middleware is not blocking the route

### Pages not rendering

- Check that country-specific page exists
- Verify getStaticPaths includes country prefix
- Check Next.js build logs for errors

### Country selector not appearing

- Verify CountrySelector is imported in Header
- Check z-index conflicts
- Verify component is rendering (check React DevTools)

## Migration from Current Site

For existing URLs:

1. **Default behavior**: Global pages remain at root URLs
2. **Supported countries**: Automatically rewritten to country pages
3. **Existing links**: Continue to work (middleware handles routing)
4. **External links**: Will be automatically localized based on visitor's country

No breaking changes - the system is backward compatible!

## URL Behavior Summary

### Example: User from India visits the site

**Step-by-step:**

1. User types: `https://tryagentikai.com/about`
2. Middleware detects: IP is from India (`IN`)
3. Browser redirects to: `https://tryagentikai.com/en-in/about/`
4. Cookie is set: `user-country=IN`
5. User sees: URL with `/en-in/` prefix

**On next visit:**

1. User types any URL: `https://tryagentikai.com/services`
2. Cookie is read: `user-country=IN`
3. Browser redirects to: `https://tryagentikai.com/en-in/services/`
4. User sees: Consistent country-specific URL

**Persistence:**

- Cookie remains valid for 30 days
- All subsequent visits show the correct country prefix
- Works seamlessly across all pages
- No user interaction required

### Benefits of Showing Country in URL

✅ **SEO-friendly**: Search engines can index country-specific pages  
✅ **User clarity**: Users know which version they're viewing  
✅ **Shareable links**: URLs preserve country context when shared  
✅ **Browser history**: Back/forward buttons work correctly with country routes  
✅ **Analytics**: Easier to track country-specific traffic  
✅ **Bookmarkable**: Users can bookmark country-specific pages

## Future Enhancements

1. **Language support**: Add i18n for multi-language content per country
2. **Currency**: Show prices in local currency
3. **Contact info**: Display country-specific contact details
4. **Analytics**: Track conversion by country
5. **A/B testing**: Test country-specific variations
6. **Edge caching**: Optimize CDN caching per country

## Support

For questions or issues:

1. Check this guide
2. Review middleware logs in Vercel dashboard
3. Test with cookie-based override
4. Check Next.js documentation for routing issues
