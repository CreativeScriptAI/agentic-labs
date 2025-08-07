import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const AgentsSection = () => {
  const [selectedAgent, setSelectedAgent] = useState("DOCSY");
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

  const agentsData = {
    ai_agents: [
      {
        name: "DOCSY",
        features_and_benefits: [
          {
            feature: "Always in Sync",
            benefit: "Auto-connects with Google Drive",
          },
          {
            feature: "Instant Answers",
            benefit: "Real-time replies from your Drive",
          },
          {
            feature: "All Files Supported",
            benefit: "Proposals, SOPs — even .docx",
          },
        ],
      },
      {
        name: "NAITIK",
        features_and_benefits: [
          {
            feature: "Personalized Cold Outreach",
            benefit: "Sends custom intro messages based on campaign",
          },
          {
            feature: "Auto Follow-Up",
            benefit: "3-day follow-up flow (soft check, value add, CTA)",
          },
          {
            feature: "24x7 Availability",
            benefit: "No delay, no off-hours, always-on",
          },
        ],
      },
      {
        name: "VC NOTEBOT",
        features_and_benefits: [
          {
            feature: "Auto Meeting Summary",
            benefit: "Turns your calls into action-ready notes",
          },
          {
            feature: "Real-Time CRM Updates",
            benefit: "Instantly updates CRM with key highlights",
          },
          {
            feature: "Team-Wide Memory Sync",
            benefit: "Everyone stays aligned, no extra effort",
          },
        ],
      },
      {
        name: "VOICE LEAD AGENT",
        features_and_benefits: [
          {
            feature: "24x7 Auto Calling",
            benefit: "Engages prospects anytime without delay",
          },
          {
            feature: "Real Time Slot Booking",
            benefit: "Checks slot availability & books instantly",
          },
          {
            feature: "All Files Supported",
            benefit: "Logs every appointment into your CRM",
          },
        ],
      },
      {
        name: "FEDFORWARD",
        features_and_benefits: [
          {
            feature: "Smart Role Matching",
            benefit:
              "Maps your experience to best-fit roles with match scores.",
          },
          {
            feature: "Targeted Courses",
            benefit: "Suggests courses that are close to your skill gaps.",
          },
          {
            feature: "Personal Transition Plan",
            benefit: "Clear blueprint, gap analysis, and resume tips.",
          },
        ],
      },
      {
        name: "LANDING PILL",
        features_and_benefits: [
          {
            feature: "AI Landing Page Audit",
            benefit: "Scans your landing page and finds hidden issues.",
          },
          {
            feature: "Section-by-Section Analysis",
            benefit: "Pinpoints what's missing in each key section.",
          },
          {
            feature: "UX & Conversion Tests",
            benefit:
              "Runs key tests to find find friction points on landing page",
          },
        ],
      },
      {
        name: "APERIO BOT",
        features_and_benefits: [
          {
            feature: "Monthly Updates",
            benefit: "Clear, summarized updates",
          },
          {
            feature: "Goal Tracking",
            benefit: "See real-time progress of all goals in one place.",
          },
          {
            feature: "Risk Spotting",
            benefit: "AI flags goals or updates that need more focus.",
          },
        ],
      },
      {
        name: "FUZZIE",
        features_and_benefits: [
          {
            feature: "Smart NLP Logging",
            benefit: "Log meals in seconds by typing a simple sentence",
          },
          {
            feature: "Photo Meal Logging",
            benefit: "Snap a photo, get instant meal breakdowns",
          },
          {
            feature: "Seamless Tracking",
            benefit: "Track diet plans and health goals in one place",
          },
        ],
      },
    ],
  };

  const agents = [
    "DOCSY",
    "NAITIK",
    "VCBOT",
    "VOICE LEAD AGENT",
    "FEDFORWARD",
    "LANDING PILL",
    "APERIO",
    "FUZZIE",
  ];

  // Helper function to get agent data
  const getAgentData = (agentName: string) => {
    // Handle special case mappings
    let searchName = agentName;
    if (agentName === "VCBOT") searchName = "VC NOTEBOT";
    if (agentName === "APERIO") searchName = "APERIO BOT";

    return agentsData.ai_agents.find((agent) => agent.name === searchName);
  };

  const currentAgentData = getAgentData(selectedAgent);

  return (
    <div
      className="py-16 -mx-4 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"
      style={{ backgroundColor: "#F9F6F4" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-red-500 font-medium text-sm tracking-wider uppercase mb-4">
            AGENTS WE'VE SHIPPED
          </p>
          <h2 className="text-2xl text-slate-800 text-center font-normal font-sfpro leading-normal">
            Recruit enterprise-grade AI agents
          </h2>
          <h3 className="text-2xl text-slate-800 text-center font-normal font-sfpro leading-normal">
            today, fully customizable
          </h3>
        </div>

        {/* Agent Navigation */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {agents.map((agent) => (
            <button
              key={agent}
              onClick={() => setSelectedAgent(agent)}
              className={`text-lg font-medium transition-colors duration-200 pb-3 border-b-4 ${
                selectedAgent === agent
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-600 border-transparent hover:text-blue-600 hover:border-blue-600"
              }`}
            >
              {agent}
            </button>
          ))}
        </div>

        {/* Selected Agent Display */}
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl shadow-lg border border-gray-200 p-8"
            style={{ backgroundColor: "#F9F6F4" }}
          >
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-lg bg-red-500 flex px-3 py-1 justify-center items-center text-gray-50 font-sfpro text-base font-medium leading-normal">
                    NEW
                  </span>
                </div>
                <h3 className="font-mondwest text-4xl font-normal text-blue-600 mb-4">
                  {selectedAgent}
                </h3>
                <h4 className="text-slate-800 font-sfpro text-xl font-medium leading-normal mb-4">
                  {selectedAgent === "DOCSY" &&
                    "Your WhatsApp Assistant for Instant File Answers"}
                  {selectedAgent === "NAITIK" &&
                    "Intelligent Customer Service Agent"}
                  {selectedAgent === "VCBOT" && "Your Meeting Summarizer "}
                  {selectedAgent === "VOICE LEAD AGENT" &&
                    "Your AI Calling Assistant for Instant Appointment Booking"}
                  {selectedAgent === "FEDFORWARD" &&
                    "Your Career Transition AI"}
                  {selectedAgent === "LANDING PILL" &&
                    "Your AI Landing Page Doctor"}
                  {selectedAgent === "APERIO" && "Your Executive Insights AI"}
                  {selectedAgent === "FUZZIE" && "Your Executive Insights AI"}
                </h4>
                <p className="text-slate-600 font-sfpro text-sm font-normal leading-normal mb-6">
                  {selectedAgent === "DOCSY" &&
                    "Meet Docsy — your smart, WhatsApp-native assistant that analyse anything you sync to Google Drive and gives you instant answers like a pro.No tabs, no digging, no switching tools."}
                  {selectedAgent === "NAITIK" &&
                    "AI-powered WhatsApp sales assistant designed to automate cold outreach, follow-ups, and lead qualification for real estate sales teams."}
                  {selectedAgent === "VCBOT" &&
                    "Meet VC Notebot — your automated assistant that listens to meetings, summarizes key points, updates your CRM, and keeps your entire team in sync. No manual notes, no missed details."}
                  {selectedAgent === "VOICE LEAD AGENT" &&
                    "Meet VoiceLead — your AI-powered calling agent that engages with prospects, collects key details, checks calendar availability, and books appointments, all on autopilot."}
                  {selectedAgent === "FEDFORWARD" &&
                    "Meet FedForward — your AI career transition assistant for federal employees ready to move into the private sector, helping them find best-fit roles and recommends only the courses they truly need."}
                  {selectedAgent === "LANDING PILL" &&
                    "Meet Landing Pill — your expert AI guide for diagnosing and fixing landing page problems. It shows you exactly what's stopping visitors from converting, so you can communicate value, build trust, and drive action that grows your business."}
                  {selectedAgent === "APERIO" &&
                    "Meet Aperio — your AI assistant that summarizes team updates, tracks goals, spots risks, and gives smart, actionable insights for executives. It saves hours digging through reports and helps leaders focus on what matters most."}
                  {selectedAgent === "FUZZIE" &&
                    "Fuzzy logic decision-making agent that handles uncertain and complex business scenarios with intelligent reasoning."}
                </p>
                <button className="bg-blue-600 rounded-lg text-gray-50 font-sfpro text-sm font-medium leading-5 hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 px-6 py-3">
                  <span>📁</span>
                  Try {selectedAgent}
                </button>
              </div>
              <div className="flex-shrink-0">
                <div className="w-48 h-48  rounded-full flex items-center justify-center">
                  <Image
                    src="/images/robot.png"
                    alt="Docsy"
                    width={192}
                    height={192}
                  />
                </div>
              </div>
            </div>

            {/* Features & Benefits Section */}
            <div className="mb-4 bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-[20px] font-mondwest font-normal text-[#0A1128] mb-6 uppercase">
                FEATURE & BENEFITS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentAgentData?.features_and_benefits.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-2 rounded-lg p-4"
                    style={{ backgroundColor: "#F9F6F4" }}
                  >
                    <div className="w-6 h-6 bg-blue-600 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M12.3544 11.6481C12.4477 11.7418 12.5001 11.8687 12.5001 12.0009C12.5001 12.1332 12.4477 12.26 12.3544 12.3538C12.2863 12.4206 10.6763 14 8 14C5.66313 14 3.96688 12.6 3 11.5094V13C3 13.1326 2.94732 13.2598 2.85355 13.3536C2.75979 13.4473 2.63261 13.5 2.5 13.5C2.36739 13.5 2.24021 13.4473 2.14645 13.3536C2.05268 13.2598 2 13.1326 2 13V10C2 9.86739 2.05268 9.74021 2.14645 9.64645C2.24021 9.55268 2.36739 9.5 2.5 9.5H5.5C5.63261 9.5 5.75979 9.55268 5.85355 9.64645C5.94732 9.74021 6 9.86739 6 10C6 10.1326 5.94732 10.2598 5.85355 10.3536C5.75979 10.4473 5.63261 10.5 5.5 10.5H3.465C4.235 11.4594 5.8125 13 8 13C10.25 13 11.6337 11.6588 11.6475 11.645C11.7417 11.5517 11.869 11.4996 12.0016 11.5002C12.1341 11.5008 12.261 11.554 12.3544 11.6481ZM13.5 2.5C13.3674 2.5 13.2402 2.55268 13.1464 2.64645C13.0527 2.74021 13 2.86739 13 3V4.49062C12.0331 3.4 10.3369 2 8 2C5.32375 2 3.71375 3.57938 3.64625 3.64625C3.55226 3.7399 3.49933 3.86706 3.4991 3.99974C3.49886 4.13242 3.55135 4.25976 3.645 4.35375C3.73865 4.44774 3.86581 4.50067 3.99849 4.5009C4.13117 4.50114 4.25851 4.44865 4.3525 4.355C4.36625 4.34125 5.75 3 8 3C10.1875 3 11.765 4.54063 12.535 5.5H10.5C10.3674 5.5 10.2402 5.55268 10.1464 5.64645C10.0527 5.74021 10 5.86739 10 6C10 6.13261 10.0527 6.25979 10.1464 6.35355C10.2402 6.44732 10.3674 6.5 10.5 6.5H13.5C13.6326 6.5 13.7598 6.44732 13.8536 6.35355C13.9473 6.25979 14 6.13261 14 6V3C14 2.86739 13.9473 2.74021 13.8536 2.64645C13.7598 2.55268 13.6326 2.5 13.5 2.5Z"
                          fill="#F8F9FA"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="text-[#1E293B] font-sfpro text-[16px] font-[500] leading-normal mb-2">
                        {item.feature}
                      </div>
                      <div className="text-slate-600 font-sfpro text-sm font-normal leading-normal">
                        {item.benefit}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => setIsHowItWorksOpen(!isHowItWorksOpen)}
              >
                <h3 className="text-[20px] font-mondwest font-normal text-[#0A1128] mb-2 uppercase">
                  HOW IT WORKS
                </h3>
                <div
                  className={`transition-transform duration-300 ${
                    isHowItWorksOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isHowItWorksOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col lg:flex-row items-center gap-8 pt-4">
                  <div className="flex-1 text-center">
                    <div
                      className={`transition-all duration-700 ease-out ${
                        isHowItWorksOpen
                          ? "transform scale-100 opacity-100"
                          : "transform scale-95 opacity-0"
                      }`}
                    >
                      <Image
                        src="/images/docsy.png"
                        alt="Docsy How It Works"
                        height={285}
                        width={0}
                        style={{ width: "auto" }}
                        className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentsSection;
