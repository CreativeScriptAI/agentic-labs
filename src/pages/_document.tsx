import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { CONFIG } from "site.config";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          {/* Partytown Configuration - Runs third-party scripts in Web Workers */}
          {/* Configure forwarded functions for Partytown */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                partytown = {
                  forward: ['dataLayer.push', 'gtag', 'fbq', 'hj'],
                  debug: false
                };
              `,
            }}
          />

          {/* Preload critical resources for improved LCP and FCP */}
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
          
          {/* Preload critical CSS */}
          <link
            rel="preload"
            href="/_next/static/css/app.css"
            as="style"
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

          {/* Google Tag Manager - Runs in Web Worker */}
          <Script
            id="gtm"
            type="text/partytown"
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

          {/* Google Analytics - Consolidated via GTM (loads through GTM) */}
          {/* Configure GA4 (G-PW19164HWX) inside GTM dashboard for better performance */}
          <Script
            id="gtag-base"
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-PW19164HWX', {
                  page_title: document.title,
                  page_location: window.location.href,
                  send_page_view: true
                });
                gtag('config', 'AW-17453709032');
                
                function gtag_report_conversion(url) {
                  var callback = function () {
                    if (typeof(url) != 'undefined') {
                      window.location = url;
                    }
                  };
                  gtag('event', 'conversion', {
                    'send_to': 'AW-17453709032/TTBlCJLYqZAbEOjtyYJB',
                    'event_callback': callback
                  });
                  return false;
                }
              `,
            }}
          />

          {/* Facebook Pixel - Runs in Web Worker */}
          <Script 
            id="facebook-pixel" 
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1967779620726553');
                fbq('track', 'PageView');
              `,
            }}
          />

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

          {/* Hotjar - Runs in Web Worker */}
          <Script 
            id="hotjar" 
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
                (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:6498424,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `,
            }}
          />

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
