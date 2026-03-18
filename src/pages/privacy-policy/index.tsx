import React from "react";
import RootLayout from "src/layouts/RootLayout";
import { NextSeo } from "next-seo";
import EllipseBackground from "src/assets/images/EllipseBackground";
import FooterSection from "src/components/sections/FooterSection";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: (
      <>
        <p className="mb-4">
          We collect information you provide directly to us, information we
          collect automatically, and information from third-party sources.
        </p>
        <h3 className="text-lg font-semibold text-slate-800 mb-2">
          Information You Provide
        </h3>
        <ul className="list-disc pl-6 space-y-1 mb-4 text-slate-600">
          <li>
            <strong>Account details:</strong> name, email address, phone number,
            company name, and job title when you register or contact us.
          </li>
          <li>
            <strong>Communications:</strong> messages, enquiries, and feedback
            you send us via forms, email, or chat.
          </li>
          <li>
            <strong>Payment information:</strong> billing address and payment
            method details processed securely through our payment providers.
          </li>
          <li>
            <strong>Business information:</strong> details about your
            organisation, use cases, and requirements you share during
            onboarding or discovery calls.
          </li>
        </ul>
        <h3 className="text-lg font-semibold text-slate-800 mb-2">
          Information Collected Automatically
        </h3>
        <ul className="list-disc pl-6 space-y-1 mb-4 text-slate-600">
          <li>
            <strong>Usage data:</strong> pages visited, features used, session
            duration, clicks, and navigation paths.
          </li>
          <li>
            <strong>Device &amp; technical data:</strong> IP address, browser
            type and version, operating system, device identifiers, and screen
            resolution.
          </li>
          <li>
            <strong>Cookies &amp; tracking technologies:</strong> see our
            Cookies section below.
          </li>
          <li>
            <strong>Log data:</strong> server logs, error reports, and
            performance data.
          </li>
        </ul>
        <h3 className="text-lg font-semibold text-slate-800 mb-2">
          Information from Third Parties
        </h3>
        <ul className="list-disc pl-6 space-y-1 text-slate-600">
          <li>
            Analytics providers (Google Analytics, Hotjar) that help us
            understand site behaviour.
          </li>
          <li>
            Advertising partners (Meta / Facebook, Google Ads) that may share
            aggregated audience insights with us.
          </li>
          <li>
            Calendar and scheduling tools (Cal.com) when you book a call.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Your Information",
    content: (
      <>
        <p className="mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>
            <strong>Service delivery:</strong> to build, operate, and improve
            our AI agent products and services, and to fulfil our contractual
            obligations to you.
          </li>
          <li>
            <strong>Account management:</strong> to create and manage your
            account, authenticate your identity, and process payments.
          </li>
          <li>
            <strong>Communications:</strong> to respond to your enquiries, send
            product updates, onboarding guidance, and support messages.
          </li>
          <li>
            <strong>Marketing:</strong> to send you information about our
            services, case studies, and events where you have opted in or where
            we have a legitimate interest. You may opt out at any time.
          </li>
          <li>
            <strong>Analytics &amp; improvement:</strong> to understand how
            people use our website and services so we can improve them. We do
            not use your content to train AI models without explicit consent.
          </li>
          <li>
            <strong>Security &amp; fraud prevention:</strong> to detect,
            investigate, and prevent fraudulent transactions, abuse, and other
            harmful activity.
          </li>
          <li>
            <strong>Legal compliance:</strong> to meet our obligations under
            applicable laws and regulations.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "3. Legal Basis for Processing (GDPR)",
    content: (
      <>
        <p className="mb-4">
          Where the General Data Protection Regulation (GDPR) or UK GDPR
          applies, we process your personal data under the following legal
          bases:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>
            <strong>Contract:</strong> processing is necessary to perform the
            contract we have with you or to take steps at your request before
            entering into a contract.
          </li>
          <li>
            <strong>Legitimate interests:</strong> processing is necessary for
            our legitimate business interests (e.g. analytics, security,
            marketing to existing customers), provided those interests are not
            overridden by your rights.
          </li>
          <li>
            <strong>Consent:</strong> where you have given us clear, freely
            given consent — for example, for certain marketing communications or
            cookies.
          </li>
          <li>
            <strong>Legal obligation:</strong> processing is necessary for
            compliance with a legal obligation to which we are subject.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "4. How We Share Your Information",
    content: (
      <>
        <p className="mb-4">
          We do not sell your personal data. We may share your information only
          in the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>
            <strong>Service providers:</strong> trusted third-party vendors who
            help us operate our business (e.g. cloud hosting, payment
            processing, email delivery, analytics). They are contractually bound
            to protect your data.
          </li>
          <li>
            <strong>Business transfers:</strong> if we merge with, are acquired
            by, or sell assets to another company, your information may be
            transferred as part of that transaction.
          </li>
          <li>
            <strong>Legal requirements:</strong> when required by law,
            regulation, court order, or government authority.
          </li>
          <li>
            <strong>Protection of rights:</strong> when necessary to protect the
            rights, property, or safety of Agentic AI Labs, our clients, or the
            public.
          </li>
          <li>
            <strong>With your consent:</strong> in any other case where you have
            given explicit permission.
          </li>
        </ul>
        <p className="mt-4 text-slate-600">
          Our key sub-processors include: Google (analytics, ads, workspace),
          Meta (advertising), Hotjar (session recording), Cal.com (scheduling),
          and our cloud infrastructure provider. A full and current list is
          available upon request.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "5. Cookies & Tracking Technologies",
    content: (
      <>
        <p className="mb-4">
          We use cookies and similar tracking technologies to operate our
          website and to understand how visitors interact with it.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li>
            <strong>Essential cookies:</strong> required for the website to
            function. They cannot be disabled.
          </li>
          <li>
            <strong>Analytics cookies:</strong> help us count visits and
            understand traffic sources (e.g. Google Analytics, Hotjar).
          </li>
          <li>
            <strong>Advertising cookies:</strong> used to deliver relevant ads
            and measure ad campaign effectiveness (e.g. Meta Pixel, Google Ads
            conversion tracking).
          </li>
          <li>
            <strong>Functional cookies:</strong> remember your preferences to
            enhance your experience.
          </li>
        </ul>
        <p className="text-slate-600">
          You can control cookies through your browser settings or, where
          applicable, through our cookie consent banner. Disabling certain
          cookies may affect website functionality.
        </p>
      </>
    ),
  },
  {
    id: "data-storage-security",
    title: "6. Data Storage & Security",
    content: (
      <>
        <p className="mb-4">
          We take reasonable technical and organisational measures to protect
          your personal data against unauthorised access, loss, or disclosure.
          These include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li>Encryption of data in transit (TLS) and at rest (AES-256).</li>
          <li>
            Access controls limiting who can view personal data within our team.
          </li>
          <li>Regular security assessments and monitoring.</li>
          <li>
            Secure cloud infrastructure hosted by reputable providers with
            industry-standard certifications.
          </li>
        </ul>
        <p className="text-slate-600">
          No method of transmission over the internet is 100% secure. While we
          strive to protect your data, we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    content: (
      <>
        <p className="mb-4">
          We retain your personal data only for as long as necessary to fulfil
          the purposes described in this policy, or as required by law.
          Specifically:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>
            <strong>Account data</strong> is retained for the duration of your
            relationship with us and for a reasonable period afterwards (up to
            2 years) for legitimate business purposes such as dispute
            resolution.
          </li>
          <li>
            <strong>Customer content and workspace data</strong> is deleted
            within 30 days of contract termination or upon your written request,
            unless we are required by law to retain it.
          </li>
          <li>
            <strong>Financial records</strong> (invoices, payment history) are
            retained for up to 7 years as required by applicable accounting and
            tax laws.
          </li>
          <li>
            <strong>Marketing opt-out records</strong> are retained indefinitely
            to honour your preferences.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "8. Your Privacy Rights",
    content: (
      <>
        <p className="mb-4">
          Depending on your location, you may have the following rights
          regarding your personal data:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li>
            <strong>Access:</strong> request a copy of the personal data we
            hold about you.
          </li>
          <li>
            <strong>Correction:</strong> request that inaccurate or incomplete
            data is corrected.
          </li>
          <li>
            <strong>Deletion:</strong> request that we delete your personal
            data (&ldquo;right to be forgotten&rdquo;) where there is no
            overriding legal basis for us to retain it.
          </li>
          <li>
            <strong>Portability:</strong> receive your data in a structured,
            machine-readable format.
          </li>
          <li>
            <strong>Objection:</strong> object to processing based on legitimate
            interests, including for direct marketing.
          </li>
          <li>
            <strong>Restriction:</strong> request that we restrict the
            processing of your data in certain circumstances.
          </li>
          <li>
            <strong>Withdraw consent:</strong> where processing is based on
            your consent, withdraw it at any time without affecting the
            lawfulness of prior processing.
          </li>
        </ul>
        <p className="text-slate-600">
          To exercise any of these rights, contact us at{" "}
          <a
            href="mailto:aditya@tryagentikai.com"
            className="text-blue-600 hover:underline"
          >
            aditya@tryagentikai.com
          </a>
          . We will respond within 30 days. We may need to verify your identity
          before acting on your request.
        </p>
        <p className="mt-3 text-slate-600">
          <strong>California residents (CCPA):</strong> You have the right to
          know what personal information we collect, disclose, and sell (we do
          not sell personal data), and the right to non-discrimination for
          exercising your privacy rights.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "9. International Data Transfers",
    content: (
      <p className="text-slate-600">
        Agentic AI Labs operates globally. Your data may be transferred to and
        processed in countries other than your own, including countries whose
        data protection laws may differ from those in your jurisdiction. Where
        we transfer data outside the European Economic Area (EEA) or UK, we
        ensure appropriate safeguards are in place — such as Standard
        Contractual Clauses approved by the European Commission, or equivalent
        mechanisms — to protect your personal data.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    title: "10. Children's Privacy",
    content: (
      <p className="text-slate-600">
        Our services are not directed to children under the age of 13 (or 16
        where applicable under local law). We do not knowingly collect personal
        data from children. If you believe we have inadvertently collected
        information from a child, please contact us immediately and we will
        delete it.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "11. Third-Party Links",
    content: (
      <p className="text-slate-600">
        Our website may contain links to third-party websites, products, or
        services. We are not responsible for the privacy practices of those
        third parties. We encourage you to review the privacy policies of any
        third-party site you visit.
      </p>
    ),
  },
  {
    id: "ai-disclaimer",
    title: "12. AI & Automated Processing",
    content: (
      <>
        <p className="mb-3 text-slate-600">
          Our products use artificial intelligence and automated processing to
          perform tasks on your behalf (e.g. voice responses, scheduling,
          follow-ups). Please note:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>
            AI-generated outputs are provided as-is and may not always be
            accurate. They should be reviewed before being relied upon for
            important decisions.
          </li>
          <li>
            We do not use your customer conversations or content to train or
            improve our underlying AI models without your explicit written
            consent.
          </li>
          <li>
            Where automated decision-making has legal or similarly significant
            effects on individuals, you have the right to request human review.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "changes",
    title: "13. Changes to This Policy",
    content: (
      <p className="text-slate-600">
        We may update this Privacy Policy from time to time. When we make
        material changes, we will notify you by updating the &ldquo;Effective
        Date&rdquo; at the top of this page and, where appropriate, by sending
        you an email notification. Your continued use of our services after any
        changes constitutes your acceptance of the revised policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "14. Contact Us",
    content: (
      <>
        <p className="mb-3 text-slate-600">
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or the way we handle your personal data, please contact
          us:
        </p>
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-slate-700 space-y-1">
          <p className="font-semibold text-slate-900">Agentic AI Labs</p>
          <p>
            Email:{" "}
            <a
              href="mailto:aditya@tryagentikai.com"
              className="text-blue-600 hover:underline"
            >
              aditya@tryagentikai.com
            </a>
          </p>
          <p>
            Website:{" "}
            <a
              href="https://www.tryagentikai.com"
              className="text-blue-600 hover:underline"
            >
              www.tryagentikai.com
            </a>
          </p>
        </div>
        <p className="mt-4 text-slate-600">
          If you are located in the EEA or UK and are not satisfied with our
          response, you have the right to lodge a complaint with your local data
          protection authority.
        </p>
      </>
    ),
  },
];

const PrivacyPolicyPage = () => {
  return (
    <RootLayout>
      <NextSeo
        title="Privacy Policy | Agentic AI Labs"
        description="Agentic AI Labs Privacy Policy — how we collect, use, and protect your personal data."
        openGraph={{
          title: "Privacy Policy | Agentic AI Labs",
          description:
            "Agentic AI Labs Privacy Policy — how we collect, use, and protect your personal data.",
          type: "website",
          url: "https://www.tryagentikai.com/privacy-policy",
        }}
        noindex={false}
      />

      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundColor: "#F9F6F4",
          width: "calc(100% + 2rem)",
          marginLeft: "-1rem",
          marginRight: "-1rem",
          paddingTop: "160px",
          paddingBottom: "64px",
        }}
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1600px] max-w-none pointer-events-none select-none opacity-60">
          <EllipseBackground />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-600 font-medium text-sm uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="font-mondwest text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm sm:text-base">
            Effective Date: <strong>18 March 2026</strong>
          </p>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            At <strong>Agentic AI Labs</strong>, we take your privacy seriously.
            This policy explains what data we collect, how we use it, and the
            choices you have.
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-12">
          <h2 className="font-semibold text-slate-900 mb-4 text-base">
            Contents
          </h2>
          <ol className="space-y-1 text-sm text-blue-700">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:underline">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Policy Sections */}
        <div className="space-y-12">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="font-mondwest text-2xl sm:text-3xl text-slate-900 mb-5 pb-3 border-b border-gray-200">
                {s.title}
              </h2>
              <div className="text-slate-600 leading-relaxed">{s.content}</div>
            </section>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 mb-8 text-center text-sm text-slate-400">
          Last updated: 18 March 2026 &nbsp;·&nbsp; Agentic AI Labs &nbsp;·&nbsp;{" "}
          <a
            href="mailto:aditya@tryagentikai.com"
            className="text-blue-500 hover:underline"
          >
            aditya@tryagentikai.com
          </a>
        </div>
      </div>

      <FooterSection />
    </RootLayout>
  );
};

export default PrivacyPolicyPage;
