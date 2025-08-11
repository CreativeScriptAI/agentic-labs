import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type ProjectFeature = { title: string; info: string };

type ProjectItem = {
  project_name: string;
  project_heading: string;
  project_description: string;
  project_features: ProjectFeature[];
  project_hiw_image: string;
};

type ProjectsMap = Record<string, ProjectItem>;

type AgentsSectionProps = {};

const AgentsSection: React.FC<AgentsSectionProps> = () => {
  const [selectedAgent, setSelectedAgent] = useState<string>("DOCSY");
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  // Local constant data normalized to requested shape
  const localProjects: ProjectsMap = useMemo(() => {
    const map: ProjectsMap = {
      DOCSY: {
        project_name: "DOCSY",
        project_heading: "Your WhatsApp Assistant for Instant File Answers",
        project_description:
          "Meet Docsy — your smart, WhatsApp-native assistant that analyse anything you sync to Google Drive and gives you instant answers like a pro.No tabs, no digging, no switching tools.",
        project_features: [
          { title: "Always in Sync", info: "Auto-connects with Google Drive" },
          {
            title: "Instant Answers",
            info: "Real-time replies from your Drive",
          },
          {
            title: "All Files Supported",
            info: "Proposals, SOPs — even .docx",
          },
        ],
        project_hiw_image: "/images/docsy.png",
      },
      NAITIK: {
        project_name: "NAITIK",
        project_heading: "Intelligent Customer Service Agent",
        project_description:
          "AI-powered WhatsApp sales assistant designed to automate cold outreach, follow-ups, and lead qualification for real estate sales teams.",
        project_features: [
          {
            title: "Personalized Cold Outreach",
            info: "Sends custom intro messages based on campaign",
          },
          {
            title: "Auto Follow-Up",
            info: "3-day follow-up flow (soft check, value add, CTA)",
          },
          {
            title: "24x7 Availability",
            info: "No delay, no off-hours, always-on",
          },
        ],
        project_hiw_image: "/images/naitik.png",
      },
      VCBOT: {
        project_name: "VC NOTEBOT",
        project_heading: "Your Meeting Summarizer",
        project_description:
          "Meet VC Notebot — your automated assistant that listens to meetings, summarizes key points, updates your CRM, and keeps your entire team in sync. No manual notes, no missed details.",
        project_features: [
          {
            title: "Auto Meeting Summary",
            info: "Turns your calls into action-ready notes",
          },
          {
            title: "Real-Time CRM Updates",
            info: "Instantly updates CRM with key highlights",
          },
          {
            title: "Team-Wide Memory Sync",
            info: "Everyone stays aligned, no extra effort",
          },
        ],
        project_hiw_image: "/images/vcbot.png",
      },
      "VOICE LEAD AGENT": {
        project_name: "VOICE LEAD AGENT",
        project_heading:
          "Your AI Calling Assistant for Instant Appointment Booking",
        project_description:
          "Meet VoiceLead — your AI-powered calling agent that engages with prospects, collects key details, checks calendar availability, and books appointments, all on autopilot.",
        project_features: [
          {
            title: "24x7 Auto Calling",
            info: "Engages prospects anytime without delay",
          },
          {
            title: "Real Time Slot Booking",
            info: "Checks slot availability & books instantly",
          },
          {
            title: "All Files Supported",
            info: "Logs every appointment into your CRM",
          },
        ],
        project_hiw_image: "/images/voice_lead_agent.png",
      },
      FEDFORWARD: {
        project_name: "FEDFORWARD",
        project_heading: "Your Career Transition AI",
        project_description:
          "Meet FedForward — your AI career transition assistant for federal employees ready to move into the private sector, helping them find best-fit roles and recommends only the courses they truly need.",
        project_features: [
          {
            title: "Smart Role Matching",
            info: "Maps your experience to best-fit roles with match scores.",
          },
          {
            title: "Targeted Courses",
            info: "Suggests courses that are close to your skill gaps.",
          },
          {
            title: "Personal Transition Plan",
            info: "Clear blueprint, gap analysis, and resume tips.",
          },
        ],
        project_hiw_image: "/images/fedforward.png",
      },
      "LANDING PILL": {
        project_name: "LANDING PILL",
        project_heading: "Your AI Landing Page Doctor",
        project_description:
          "Meet Landing Pill — your expert AI guide for diagnosing and fixing landing page problems. It shows you exactly what's stopping visitors from converting, so you can communicate value, build trust, and drive action that grows your business.",
        project_features: [
          {
            title: "AI Landing Page Audit",
            info: "Scans your landing page and finds hidden issues.",
          },
          {
            title: "Section-by-Section Analysis",
            info: "Pinpoints what's missing in each key section.",
          },
          {
            title: "UX & Conversion Tests",
            info: "Runs key tests to find find friction points on landing page",
          },
        ],
        project_hiw_image: "/images/landing-pill.png",
      },
      APERIO: {
        project_name: "APERIO",
        project_heading: "Your Executive Insights AI",
        project_description:
          "Meet Aperio — your AI assistant that summarizes team updates, tracks goals, spots risks, and gives smart, actionable insights for executives. It saves hours digging through reports and helps leaders focus on what matters most.",
        project_features: [
          { title: "Monthly Updates", info: "Clear, summarized updates" },
          {
            title: "Goal Tracking",
            info: "See real-time progress of all goals in one place.",
          },
          {
            title: "Risk Spotting",
            info: "AI flags goals or updates that need more focus.",
          },
        ],
        project_hiw_image: "/images/aperio.png",
      },
      FUZZIE: {
        project_name: "FUZZIE",
        project_heading: "Your Executive Insights AI",
        project_description:
          "Fuzzy logic decision-making agent that handles uncertain and complex business scenarios with intelligent reasoning.",
        project_features: [
          {
            title: "Smart NLP Logging",
            info: "Log meals in seconds by typing a simple sentence",
          },
          {
            title: "Photo Meal Logging",
            info: "Snap a photo, get instant meal breakdowns",
          },
          {
            title: "Seamless Tracking",
            info: "Track diet plans and health goals in one place",
          },
        ],
        project_hiw_image: "/images/fuzzie.png",
      },
    };

    return map;
  }, []);

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

  // Get current project data from local projects
  const currentProject = localProjects[selectedAgent];

  // Helper function to get agent image
  const getAgentImage = (agentName: string) => {
    const imageMap: { [key: string]: string } = {
      DOCSY: "/images/docsy.png",
      NAITIK: "/images/naitik.png",
      VCBOT: "/images/vcbot.png",
      "VOICE LEAD AGENT": "/images/voice_lead_agent.png",
      FEDFORWARD: "/images/fedforward.png",
      "LANDING PILL": "/images/landingpill.png",
      APERIO: "/images/aperio.png",
      FUZZIE: "/images/fuzzie.png",
    };
    return imageMap[agentName] || "/images/robot.png";
  };

  const currentAgentImage = getAgentImage(selectedAgent);

  return (
    <div
      id="agents_section"
      className="py-8 sm:py-16 lg:py-20 overflow-hidden"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-red-500 font-medium text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            AGENTS WE&apos;VE SHIPPED
          </p>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-slate-800 text-center font-normal font-sfpro leading-normal px-4">
            Recruit enterprise-grade AI agents
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl text-slate-800 text-center font-normal font-sfpro leading-normal px-4">
            today, fully customizable
          </h3>
        </div>

        {/* Agent Navigation */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="sm:block md:flex md:justify-center overflow-x-auto w-full -mx-4 no-scrollbar px-8 md:mx-0">
            <div className="flex xl:flex xl:flex-wrap xl:justify-center gap-6">
              {agents.map((agent) => (
                <button
                  key={agent}
                  onClick={() => setSelectedAgent(agent)}
                  className={`agent-tab pb-1 flex-shrink-0 whitespace-nowrap text-xs sm:text-sm lg:text-base xl:text-lg font-medium transition-colors duration-200 text-center ${
                    selectedAgent === agent
                      ? "is-active text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {agent}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Agent Display */}
        <div className="max-w-5xl mx-auto px-4">
          <div
            className="rounded-xl lg:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8"
            style={{ backgroundColor: "#F9F6F4" }}
          >
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-4 sm:mb-6">
              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start items-center gap-3 mb-3 sm:mb-4">
                  <span className="rounded-lg bg-red-500 flex px-2 sm:px-3 py-1 justify-center items-center text-gray-50 font-sfpro text-sm sm:text-base font-medium leading-normal">
                    NEW
                  </span>
                </div>
                <h3 className="font-mondwest text-2xl sm:text-3xl lg:text-4xl font-normal text-blue-600 mb-3 sm:mb-4">
                  {selectedAgent}
                </h3>
                <h4 className="text-slate-800 font-sfpro text-lg sm:text-xl font-medium leading-normal mb-3 sm:mb-4">
                  {currentProject?.project_heading || ""}
                </h4>
                <p className="text-slate-600 font-sfpro text-sm sm:text-base font-normal leading-relaxed mb-4 sm:mb-6">
                  {currentProject?.project_description || ""}
                </p>
                <Link href="/agent/6888739e0e03b447e3158604">
                  <button className="bg-blue-600 rounded-lg text-gray-50 font-sfpro text-sm sm:text-base font-medium leading-5 hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 mx-auto lg:mx-0">
                    <span>📁</span>
                    Try {selectedAgent}
                  </button>
                </Link>
              </div>
              <div className="flex-shrink-0 order-first lg:order-last">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full flex items-center justify-center">
                  <Image
                    src={
                      selectedAgent === "DOCSY"
                        ? "/images/robot.png"
                        : selectedAgent === "NAITIK"
                        ? "/images/robot1.png"
                        : selectedAgent === "VCBOT"
                        ? "/images/robot2.png"
                        : "/images/robot3.png"
                    }
                    alt="Agent Robot"
                    width={192}
                    height={192}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Features & Benefits Section */}
            <div className="mb-4 sm:mb-6 bg-white rounded-lg border border-slate-200 p-4 sm:p-6">
              <div
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
              >
                <h3 className="text-base sm:text-lg lg:text-[20px] font-mondwest font-normal text-[#0A1128] mb-2 uppercase">
                  FEATURE & BENEFITS
                </h3>
                <div
                  className={`transition-transform duration-300 ${
                    isFeaturesOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200 sm:w-6 sm:h-6"
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
                  isFeaturesOpen
                    ? "max-h-[800px] sm:max-h-[700px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 pt-4">
                  {currentProject?.project_features.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row gap-3 rounded-lg p-3 sm:p-4"
                      style={{ backgroundColor: "#F9F6F4" }}
                    >
                      <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
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
                      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <div className="text-[#1E293B] font-sfpro text-sm sm:text-[16px] font-[500] leading-normal mb-2">
                          {item.title}
                        </div>
                        <div className="text-slate-600 font-sfpro text-xs sm:text-sm font-normal leading-normal">
                          {item.info}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6">
              <div
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => setIsHowItWorksOpen(!isHowItWorksOpen)}
              >
                <h3 className="text-base sm:text-lg lg:text-[20px] font-mondwest font-normal text-[#0A1128] mb-2 uppercase">
                  HOW IT WORKS
                </h3>
                <div
                  className={`transition-transform duration-300 ${
                    isHowItWorksOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-600 group-hover:text-blue-600 transition-colors duration-200 sm:w-6 sm:h-6"
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
                    ? "max-h-[500px] sm:max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col items-center gap-4 sm:gap-8 pt-4">
                  <div className="flex-1 text-center">
                    <div
                      className={`transition-all duration-700 ease-out ${
                        isHowItWorksOpen
                          ? "transform scale-100 opacity-100"
                          : "transform scale-95 opacity-0"
                      }`}
                    >
                      <Image
                        src={currentAgentImage}
                        alt={`${selectedAgent} How It Works`}
                        height={285}
                        width={0}
                        style={{
                          width: "auto",
                          maxWidth: "100%",
                          height: "auto",
                        }}
                        className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto"
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
