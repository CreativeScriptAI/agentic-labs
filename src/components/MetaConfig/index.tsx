import { CONFIG } from "site.config";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  COUNTRY_ROUTES,
  SUPPORTED_COUNTRIES,
  getAllCountryRoutes,
} from "src/lib/country-utils";

export type MetaConfigProps = {
  title: string;
  description: string;
  type: "Website" | "Post" | "Page" | "Agent" | string;
  date?: string;
  image?: string;
  url: string;
  author?: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
  schema?: any;
};

const MetaConfig: React.FC<MetaConfigProps> = (props) => {
  const router = useRouter();
  const baseUrl = "https://www.tryagentikai.com";
  const fullTitle =
    props.title === "Agentic AI Labs"
      ? props.title
      : `${props.title} – Agentic AI Labs`;
  const canonicalUrl = props.canonical || props.url;
  console.log("canonicalUrl", canonicalUrl);
  const ogImage = props.image || "/og.jpg";
  const fullImageUrl = props.image?.startsWith("http")
    ? props.image
    : `${baseUrl}${ogImage}`;

  // Security and staging controls
  const isProduction = CONFIG.isProd;
  const robotsContent = "index, follow";

  // Generate hreflang links for all country versions
  const generateHreflangs = () => {
    const pathParts = router.pathname.split("/").filter(Boolean);
    const countryRoutes = getAllCountryRoutes();

    // Get the base path without country prefix
    let basePath = router.pathname;
    if (pathParts.length > 0 && countryRoutes.includes(pathParts[0])) {
      basePath = "/" + pathParts.slice(1).join("/");
    }

    // Handle root path
    if (basePath === "" || basePath === "/") {
      basePath = "";
    } else if (!basePath.startsWith("/")) {
      basePath = "/" + basePath;
    }

    const hreflangs: Array<{ hreflang: string; href: string }> = [];

    // Add x-default for global version
    hreflangs.push({
      hreflang: "x-default",
      href: `${baseUrl}${basePath || "/"}`,
    });

    // Add each country version
    SUPPORTED_COUNTRIES.forEach((countryCode) => {
      const countryRoute = COUNTRY_ROUTES[countryCode];
      // Format: en-IN, en-US, en-CA, en-AU, en-AE, en-GB (all uppercase for hreflang)
      const hreflangCode = `en-${countryCode}`;
      const href = `${baseUrl}/${countryRoute}${basePath || ""}`;

      hreflangs.push({
        hreflang: hreflangCode,
        href: href,
      });
    });

    return hreflangs;
  };

  const hreflangs = generateHreflangs();

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="robots" content={robotsContent} />
      <meta charSet="UTF-8" />
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang tags for international SEO */}
      {hreflangs.map((link) => (
        <link
          key={link.hreflang}
          rel="alternate"
          hrefLang={link.hreflang}
          href={link.href}
        />
      ))}

      {/* Security Headers - Only add noindex for staging/preview environments */}
      {/* {process.env.VERCEL_ENV === "preview" && (
        <meta httpEquiv="X-Robots-Tag" content="noindex, nofollow" />
      )} */}

      {/* Google Search Console Verification */}
      {CONFIG.googleSearchConsole?.enable &&
        CONFIG.googleSearchConsole.config.siteVerification && (
          <meta
            name="google-site-verification"
            content={CONFIG.googleSearchConsole.config.siteVerification}
          />
        )}

      {/* Keywords */}
      {props.keywords && (
        <meta name="keywords" content={props.keywords.join(", ")} />
      )}

      {/* Author */}
      <meta
        name="author"
        content={props.author || CONFIG.profile.name || "Agentic AI Labs"}
      />

      {/* Manifest */}
      <link rel="manifest" href="/manifest.webmanifest" />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content={props.type === "Post" ? "article" : "website"}
      />
      <meta property="og:site_name" content="Agentic AI Labs" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.url} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={props.title} />
      {CONFIG.lang && <meta property="og:locale" content={CONFIG.lang} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@agenticlabs" />
      <meta name="twitter:creator" content="@agenticlabs" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Article Meta (for blog posts) */}
      {props.type === "Post" && (
        <>
          <meta property="article:published_time" content={props.date} />
          <meta
            property="article:author"
            content={props.author || CONFIG.profile.name}
          />
          <meta property="article:section" content="Technology" />
          <meta property="article:tag" content="AI" />
          <meta property="article:tag" content="Agents" />
          <meta property="article:tag" content="Automation" />
        </>
      )}

      {/* Theme */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />

      {/* Structured Data */}
      {props.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(props.schema),
          }}
        />
      )}
    </Head>
  );
};

export default MetaConfig;
