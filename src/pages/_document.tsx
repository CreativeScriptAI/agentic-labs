import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { CONFIG } from "site.config";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          {/* Google tag (gtag.js) */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-17453709032"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-17453709032');
              `,
            }}
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-PW19164HWX"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PW19164HWX');
          `,
            }}
          />
          {/* Event snippet for Submit lead form (3) conversion page In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
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
              `,
            }}
          />

          {/* Hotjar Tracking Code */}
          <script
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
          {/* google search console */}
          {/* {CONFIG.googleSearchConsole.enable === true && (
            <>
              <meta
                name="google-site-verification"
                content={CONFIG.googleSearchConsole.config.siteVerification}
              />
            </>
          )} */}
          {/* naver search advisor */}
          {/* {CONFIG.naverSearchAdvisor.enable === true && (
            <>
              <meta
                name="naver-site-verification"
                content={CONFIG.naverSearchAdvisor.config.siteVerification}
              />
            </>
          )} */}
        </Head>
        <body className="bg-[#F9F6F4]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
