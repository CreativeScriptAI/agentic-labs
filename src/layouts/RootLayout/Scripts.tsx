import Script from "next/script";
import { CONFIG } from "site.config";

const Scripts: React.FC = () => (
  <>
    {(CONFIG as any)?.googleAnalytics?.enable === true && (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${
            (CONFIG as any).googleAnalytics.config.measurementId
          }`}
        />
        <Script strategy="lazyOnload" id="ga">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${
              (CONFIG as any).googleAnalytics.config.measurementId
            }', {
              page_path: window.location.pathname,
            });`}
        </Script>
      </>
    )}
  </>
);

export default Scripts;
