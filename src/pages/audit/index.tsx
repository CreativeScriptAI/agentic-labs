import { useEffect } from "react";
import { Hero } from "src/components/audit-landing/Hero";
import { SocialProof } from "src/components/audit-landing/SocialProof";
import { Deliverables } from "src/components/audit-landing/Deliverables";
import { HowItWorks } from "src/components/audit-landing/HowItWorks";
import { WhyThisWorks } from "src/components/audit-landing/WhyThisWorks";
import { TeamCredibility } from "src/components/audit-landing/TeamCredibility";
import { WhoItsFor } from "src/components/audit-landing/WhoItsFor";
import { FAQ } from "src/components/audit-landing/FAQ";
import { Testimonials } from "src/components/audit-landing/Testimonials";
import { FinalCTA } from "src/components/audit-landing/FinalCTA";

/**
 * AI Audit Landing Page Component
 *
 * This component can be used as a subpage/route in another project.
 *
 * Props:
 * - showNavigation: Whether to show the Navigation component (default: true)
 * - showFooter: Whether to show the Footer component (default: true)
 * - skipSEO: Whether to skip SEO metadata setup (default: false)
 *   Useful if your framework handles SEO (like Next.js)
 */
interface AIAuditPageProps {
  showNavigation?: boolean;
  showFooter?: boolean;
  skipSEO?: boolean;
}

export default function AIAuditPage({
  showNavigation = true,
  showFooter = true,
  skipSEO = false,
}: AIAuditPageProps = {}) {
  useEffect(() => {
    if (skipSEO) return;

    // Set SEO metadata
    document.title =
      "AI Audit for SaaS Companies | Automated ROI Audit & AI Process Mapping";

    // Meta description
    const metaDescription =
      document.querySelector('meta[name="description"]') ||
      document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute(
      "content",
      "AI Audit for SaaS companies finds operational leaks and waste. Get automated ROI audits, AI process mapping, and proof of concept AI agents. Find hidden savings in 2 weeks."
    );
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Keywords meta tag
    const metaKeywords =
      document.querySelector('meta[name="keywords"]') ||
      document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    metaKeywords.setAttribute(
      "content",
      "ai audit, ai in auditing, artificial intelligence auditing, ai for auditing, ai auditor, ai auditors, ai audit for saas companies, ai for business, automated roi audit, ai in accounting and auditing, internal audit ai, ai internal audit, ai process mapping service, proof of concept ai agent"
    );
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Canonical URL - Update this to your actual domain
    const canonical =
      document.querySelector('link[rel="canonical"]') ||
      document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute(
      "href",
      typeof window !== "undefined"
        ? window.location.href
        : "https://yourdomain.com/ai-audit"
    );
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }

    // Open Graph tags
    const ogTitle =
      document.querySelector('meta[property="og:title"]') ||
      document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.setAttribute(
      "content",
      "AI Audit for SaaS Companies | Find Hidden Operational Leaks"
    );
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription =
      document.querySelector('meta[property="og:description"]') ||
      document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.setAttribute(
      "content",
      "Discover where your SaaS business is bleeding money with our AI Audit. Get automated ROI audits and proof of concept AI agents in 2 weeks."
    );
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    const ogType =
      document.querySelector('meta[property="og:type"]') ||
      document.createElement("meta");
    ogType.setAttribute("property", "og:type");
    ogType.setAttribute("content", "website");
    if (!document.querySelector('meta[property="og:type"]')) {
      document.head.appendChild(ogType);
    }

    const ogUrl =
      document.querySelector('meta[property="og:url"]') ||
      document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    ogUrl.setAttribute(
      "content",
      typeof window !== "undefined"
        ? window.location.href
        : "https://yourdomain.com/ai-audit"
    );
    if (!document.querySelector('meta[property="og:url"]')) {
      document.head.appendChild(ogUrl);
    }

    // Twitter Card tags
    const twitterCard =
      document.querySelector('meta[name="twitter:card"]') ||
      document.createElement("meta");
    twitterCard.setAttribute("name", "twitter:card");
    twitterCard.setAttribute("content", "summary_large_image");
    if (!document.querySelector('meta[name="twitter:card"]')) {
      document.head.appendChild(twitterCard);
    }

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id":
            typeof window !== "undefined"
              ? `${window.location.origin}#organization`
              : "https://yourdomain.com/#organization",
          name: "Creative Script",
          url:
            typeof window !== "undefined"
              ? window.location.origin
              : "https://yourdomain.com",
          description:
            "AI Audit specialists helping SaaS companies find operational leaks and implement AI solutions",
        },
        {
          "@type": "Service",
          "@id":
            typeof window !== "undefined"
              ? `${window.location.href}#service`
              : "https://yourdomain.com/ai-audit#service",
          name: "AI Audit for SaaS Companies",
          description:
            "Comprehensive AI audit service that identifies operational waste through artificial intelligence auditing, AI process mapping, and proof of concept AI agents for business optimization",
          provider: {
            "@id":
              typeof window !== "undefined"
                ? `${window.location.origin}#organization`
                : "https://yourdomain.com/#organization",
          },
          serviceType:
            "AI audit, artificial intelligence auditing, ai for auditing, ai process mapping service, proof of concept ai agent",
          areaServed: "Global",
          audience: {
            "@type": "BusinessAudience",
            audienceType: "SaaS founders and operations teams",
          },
          offers: {
            "@type": "Offer",
            name: "Clarity Audit",
            price: "4999",
            priceCurrency: "USD",
            description:
              "2-week AI audit for SaaS teams with 200-1000 employees",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What's an AI Audit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A business-focused internal audit powered by AI that identifies where you're losing time and money in daily operations.",
              },
            },
            {
              "@type": "Question",
              name: "What do I get from the free clarity call?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A 20-minute diagnostic — we pinpoint potential leaks and estimate their cost. No pitch, just clarity.",
              },
            },
            {
              "@type": "Question",
              name: "How long does it take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Around 2 weeks from kickoff to results.",
              },
            },
          ],
        },
      ],
    };

    const existingScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Analytics event tracking for CTA clicks
    const handleCTAClick = () => {
      // Track with analytics (replace with your analytics implementation)
      if (
        typeof window !== "undefined" &&
        typeof (window as any).gtag !== "undefined"
      ) {
        (window as any).gtag("event", "ai_audit_cta_click", {
          event_category: "engagement",
          event_label: "book_clarity_call",
        });
      }
    };

    // Add event listeners to CTA buttons
    const ctaButtons = document.querySelectorAll("button");
    ctaButtons.forEach((button) => {
      if (
        button.textContent?.includes("Book") ||
        button.textContent?.includes("Start")
      ) {
        button.addEventListener("click", handleCTAClick);
      }
    });

    // Cleanup
    return () => {
      ctaButtons.forEach((button) => {
        button.removeEventListener("click", handleCTAClick);
      });
    };
  }, [skipSEO]);

  return (
    <div className="min-h-screen bg-background">
      {/* {showNavigation && <Navigation />} */}
      <main>
        <Hero />
        <SocialProof />
        <Deliverables />
        <HowItWorks />
        <WhyThisWorks />
        <TeamCredibility />
        <WhoItsFor />
        <FAQ />
        <Testimonials />
        <FinalCTA />
      </main>
      {/* {showFooter && <Footer />} */}
    </div>
  );
}
