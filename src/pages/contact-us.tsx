import React from "react";
import RootLayout from "src/layouts/RootLayout";
import { NextSeo } from "next-seo";

const ContactUsPage = () => {
  return (
    <RootLayout>
      <NextSeo
        title="Contact Us - Get Clarity in 30 Minutes | Agentic AI Labs"
        description="Schedule a FREE 30-minute guided session with our Agentic AI Labs team. Get a clear roadmap for your custom AI agent."
        openGraph={{
          title: "Contact Us - Get Clarity in 30 Minutes",
          description:
            "Schedule a FREE 30-minute guided session with our Agentic AI Labs team. Get a clear roadmap for your custom AI agent.",
          type: "website",
        }}
      />

      <section className="min-h-screen py-8 bg-gray-50 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-start">
            {/* Left Side - Text Content */}
            <div className="pt-8">
              <p className="text-violet-500 text-lg font-medium mb-6 md:text-xl">
                Get Clarity in 30 Minutes
              </p>

              <h1 className="text-4xl md:text-6xl font-normal leading-tight text-gray-900 mb-6 font-['SF_Pro_Display']">
                Got an idea for a<br />
                custom AI agent?
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
                Schedule a quick,{" "}
                <strong className="text-gray-900 font-semibold">
                  FREE 30 min
                </strong>{" "}
                guided
                <br />
                session by Agentic AI Labs team.
              </p>

              <div className="mt-8">
                <h3 className="text-violet-500 text-sm font-semibold tracking-wider mb-6 uppercase">
                  WHAT TO EXPECT (in a 25 min session)
                </h3>

                <div className="flex items-start mb-6 gap-4">
                  <div className="bg-blue-500 rounded-lg p-2 flex items-center justify-center min-w-[2.5rem] h-10 mt-0.5">
                    <span className="text-lg">🗺️</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-[0.95rem] m-0 flex-1">
                    A clear roadmap, tailored to your business needs.
                  </p>
                </div>

                <div className="flex items-start mb-6 gap-4">
                  <div className="bg-blue-500 rounded-lg p-2 flex items-center justify-center min-w-[2.5rem] h-10 mt-0.5">
                    <span className="text-lg">💰</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-[0.95rem] m-0 flex-1">
                    Time & cost estimate, no hidden surprises, you&apos;ll know
                    upfront.
                  </p>
                </div>

                <div className="flex items-start mb-6 gap-4">
                  <div className="bg-blue-500 rounded-lg p-2 flex items-center justify-center min-w-[2.5rem] h-10 mt-0.5">
                    <span className="text-lg">🔧</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-[0.95rem] m-0 flex-1">
                    Technical feasibility check, find out if your idea can
                    actually work.
                  </p>
                </div>

                <div className="flex items-start mb-6 gap-4">
                  <div className="bg-blue-500 rounded-lg p-2 flex items-center justify-center min-w-[2.5rem] h-10 mt-0.5">
                    <span className="text-lg">🔗</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-[0.95rem] m-0 flex-1">
                    Integration plan — how your AI agent fits into your current
                    tools (CRM, WhatsApp, Twilio, GHL, Slack, website, etc.).
                  </p>
                </div>

                <div className="flex items-start mb-6 gap-4">
                  <div className="bg-blue-500 rounded-lg p-2 flex items-center justify-center min-w-[2.5rem] h-10 mt-0.5">
                    <span className="text-lg">📋</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-[0.95rem] m-0 flex-1">
                    Next steps — you can either build it yourself with our
                    guide, or have us ship it for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Calendly Widget */}
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden lg:mt-0 mt-8">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/creative-script/30min"
                  style={{ minWidth: "320px", height: "700px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Load Calendly Script */}
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </RootLayout>
  );
};

export default ContactUsPage;
