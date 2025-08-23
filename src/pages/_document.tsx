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
          <link rel="dns-prefetch" href="//www.notion.so" />

          {/* Preconnect to critical domains */}
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://static.hotjar.com" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
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
        </Head>
        <body className="bg-[#F9F6F4]">
          <Main />
          <NextScript />

          {/* Optimized third-party scripts with proper loading strategies */}

          {/* Google Tag Manager - Load early but after page content */}
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-N8HPKS8Z');
              `,
            }}
          />

          {/* Google Analytics - Load after page becomes interactive */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-PW19164HWX"
            strategy="afterInteractive"
          />
          <Script id="ga-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PW19164HWX', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `}
          </Script>

          {/* Google Ads - Load lazily */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-17453709032"
            strategy="lazyOnload"
          />
          <Script id="ga-ads" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17453709032');
              
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-17453709032/iUPxCMLqrIkbEOjtyYJB',
                  'value': 1.0,
                  'currency': 'INR',
                  'event_callback': callback
                });
                return false;
              }
            `}
          </Script>

          {/* Hotjar - Load after user interaction */}
          <Script id="hotjar" strategy="lazyOnload">
            {`
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:6498424,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </Script>

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
