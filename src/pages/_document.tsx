import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { CONFIG } from "site.config";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          {/* Preload critical resources */}
          <link
            rel="preload"
            href="/fonts/ppmondwest-regular.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/ppneuebit-bold.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />

          {/* DNS prefetch for external domains */}
          <link rel="dns-prefetch" href="//www.googletagmanager.com" />
          <link rel="dns-prefetch" href="//static.hotjar.com" />
          <link rel="dns-prefetch" href="//connect.facebook.net" />
          <link rel="dns-prefetch" href="//www.notion.so" />

          {/* Preconnect to critical domains */}
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://static.hotjar.com" />
          <link rel="preconnect" href="https://connect.facebook.net" />

          {/* Viewport moved to next.config.js or _app.tsx per Next.js recommendation */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />

          {/* Feeds */}
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Agentic AI Labs RSS Feed"
            href="/api/feed.xml"
          />
          <link
            rel="alternate"
            type="application/atom+xml"
            title="Agentic AI Labs Atom Feed"
            href="/api/atom.xml"
          />

          {/* Manifest */}
          <link rel="manifest" href="/manifest.webmanifest" />

          {/* Site-wide Organization entity. Every page previously declared
              Organization only as a nested "provider" inside Service schema,
              which never established the org as a standalone entity Google can
              attach reputation to. This is the sitewide anchor for that. */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": `${CONFIG.link}/#organization`,
                name: "Agentic AI Labs",
                url: CONFIG.link,
                logo: {
                  "@type": "ImageObject",
                  url: `${CONFIG.link}/favicon.png`,
                },
                description:
                  "Agentic AI Labs builds production AI voice agents and automation systems for businesses, wired into GoHighLevel, n8n, and existing CRMs.",
                email: CONFIG.profile.email,
                founder: {
                  "@type": "Person",
                  name: "Aditya Pandey",
                  jobTitle: "Founder",
                },
                knowsAbout: [
                  "AI voice agents",
                  "GoHighLevel automation",
                  "n8n workflow automation",
                  "conversational AI",
                  "CRM integration",
                  "AI receptionists",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  email: CONFIG.profile.email,
                  url: `${CONFIG.link}/contact/`,
                },
              }),
            }}
          />

          {/* WebSite entity, pairs with Organization so the two are linked
              rather than floating independently. */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": `${CONFIG.link}/#website`,
                url: CONFIG.link,
                name: "Agentic AI Labs",
                publisher: { "@id": `${CONFIG.link}/#organization` },
              }),
            }}
          />
        </Head>
        <body className="bg-[#F9F6F4]">
          <Main />
          <NextScript />

          {/* PERFORMANCE OPTIMIZATION: Partytown Web Workers */}
          {/* 
            All third-party scripts run in Web Workers (background threads).
            This prevents blocking the main thread, reducing TBT by ~1,200ms.
            Goal: Reach TBT < 200ms (from 2,212ms)
            
            Partytown moves analytics to background:
            - Google Tag Manager (includes GA, Ads)
            - Hotjar
            - Facebook Pixel
            
            All tracking works the same, just doesn't block page rendering!
          */}

          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1967779620726553&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>

          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1115613783700229&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>

          {/* GTM noscript fallback */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-N8HPKS8Z"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
