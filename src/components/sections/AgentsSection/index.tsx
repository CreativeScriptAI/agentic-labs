import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

type AgentsSectionProps = {
  agents: any;
};

const AgentsSection: React.FC<AgentsSectionProps> = ({ agents }) => {
  const router = useRouter();

  const projects: any[] = useMemo(() => {
    return Array.isArray(agents) ? agents.reverse() : [];
  }, [agents]);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Detect locale prefix from current path (e.g., /en-in/, /en-ae/, etc.)
  const localePrefix = useMemo(() => {
    const path = router.asPath;
    const localeMatch = path.match(/^\/(en-(?:in|ae|us|gb|au|ca))\//);
    return localeMatch ? `/${localeMatch[1]}` : "";
  }, [router.asPath]);

  const tabLabels: string[] = useMemo(
    () => projects.map((p) => p?.overview?.name || p?.projectName || "Agent"),
    [projects]
  );

  const selectedProject: any | undefined = projects[selectedIndex];
  const selectedLabel: string = tabLabels[selectedIndex] || "Agent";
  const selectedOverview: any | undefined = selectedProject?.overview;
  const howItWorksSrc: string | undefined = selectedOverview?.howitworks;
  const botImageSrc: string | undefined = selectedOverview?.botImage;
  const isRemoteHowItWorks: boolean =
    typeof howItWorksSrc === "string" && howItWorksSrc.startsWith("http");

  // Build agent URL with locale prefix
  const agentHref = selectedProject?._id
    ? `${localePrefix}/agent/${selectedProject._id}`
    : "#";

  // Navigation functions
  const updateEdgeStates = React.useCallback(
    (index: number) => {
      setIsAtStart(index <= 0);
      setIsAtEnd(index >= projects.length - 1);
    },
    [projects.length]
  );

  const goToIndex = React.useCallback(
    (nextIndex: number) => {
      const clamped = Math.max(0, Math.min(projects.length - 1, nextIndex));
      setSelectedIndex(clamped);
      updateEdgeStates(clamped);
    },
    [projects.length, updateEdgeStates]
  );

  const handleNext = React.useCallback(() => {
    goToIndex(selectedIndex + 1);
  }, [selectedIndex, goToIndex]);

  const handlePrev = React.useCallback(() => {
    goToIndex(selectedIndex - 1);
  }, [selectedIndex, goToIndex]);

  // Update edge states when selectedIndex changes
  React.useEffect(() => {
    updateEdgeStates(selectedIndex);
  }, [selectedIndex, updateEdgeStates]);

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
        <div className="flex flex-col items-center text-left md:text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-red-700 font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 px-4">
            AGENTS WE&apos;VE SHIPPED
          </p>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-slate-800 text-left md:text-center font-normal font-sfpro leading-normal px-4">
            Recruit enterprise-grade AI agents
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl text-slate-800 text-left md:text-center font-normal font-sfpro leading-normal px-4">
            today, fully customizable
          </h3>
        </div>

        {/* Agent Navigation */}
        <div className="mb-4 sm:mb-12 lg:mb-16">
          <div className="sm:block md:flex md:justify-center overflow-x-auto w-full -mx-4 no-scrollbar px-8 md:mx-0">
            <div className="flex xl:flex xl:flex-wrap xl:justify-center gap-6">
              {tabLabels.map((agentName: string, idx: number) => (
                <button
                  key={`${agentName}-${idx}`}
                  onClick={() => goToIndex(idx)}
                  className={`agent-tab pb-1 flex-shrink-0 whitespace-nowrap text-xs sm:text-sm lg:text-base xl:text-lg font-medium transition-colors duration-200 text-center ${
                    selectedIndex === idx
                      ? "is-active text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {agentName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Only visible on mobile (< 768px) */}
        <div className="flex md:hidden justify-center gap-2 mb-4 sm:mb-12 lg:mb-16">
          <button
            onClick={handlePrev}
            className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isAtStart}
            aria-label="Previous agent"
            title="Go to previous agent"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center hover:border-gray-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isAtEnd}
            aria-label="Next agent"
            title="Go to next agent"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Selected Agent Display */}
        <div className="max-w-5xl mx-auto px-4">
          <div
            className="rounded-xl lg:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8"
            style={{ backgroundColor: "#F9F6F4" }}
          >
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-4 sm:mb-6">
              <div className="flex-1 text-left md:text-center lg:text-left">
                <div className="flex justify-start md:justify-center lg:justify-start items-center gap-3 mb-3 sm:mb-4">
                  <span className="rounded-lg bg-red-500 flex px-2 sm:px-3 py-1 justify-center items-center text-gray-50 font-sfpro text-sm sm:text-base font-medium leading-normal hidden md:block">
                    NEW
                  </span>
                </div>
                <h3 className="font-mondwest text-2xl sm:text-3xl lg:text-4xl font-normal text-blue-600 mb-3 sm:mb-4">
                  {selectedLabel}
                </h3>
                <Link href={agentHref}>
                  <button className="bg-blue-600 rounded-lg text-gray-50 font-sfpro text-sm sm:text-base font-medium leading-5 hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 mx-0 md:mx-auto lg:mx-0 mb-4">
                    <span>📁</span>
                    Try {selectedLabel}
                  </button>
                </Link>
                <h4 className="text-slate-800 font-sfpro text-lg sm:text-xl font-medium leading-normal mb-3 sm:mb-4">
                  {selectedOverview?.title || ""}
                </h4>
                <p className="text-slate-600 font-sfpro text-sm sm:text-base font-normal leading-relaxed mb-4 sm:mb-6">
                  {selectedOverview?.description || ""}
                </p>
              </div>
              <div className="flex-shrink-0 order-first lg:order-last">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full flex items-center justify-center">
                  <Image
                    src={botImageSrc || "/images/robot.png"}
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
                  {(selectedOverview?.featuresandbenefits || []).map(
                    (
                      item: {
                        icons?: string;
                        heading?: string;
                        subheading?: string;
                      },
                      index: number
                    ) => (
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
                            {item?.heading || ""}
                          </div>
                          <div className="text-slate-600 font-sfpro text-xs sm:text-sm font-normal leading-normal">
                            {item?.subheading || ""}
                          </div>
                        </div>
                      </div>
                    )
                  )}
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
                      {howItWorksSrc ? (
                        isRemoteHowItWorks ? (
                          <>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={howItWorksSrc}
                              alt={`${selectedLabel} How It Works`}
                              style={{
                                width: "auto",
                                maxWidth: "100%",
                                height: "auto",
                              }}
                              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto"
                            />
                          </>
                        ) : (
                          <Image
                            src={howItWorksSrc}
                            alt={`${selectedLabel} How It Works`}
                            height={285}
                            width={0}
                            style={{
                              width: "auto",
                              maxWidth: "100%",
                              height: "auto",
                            }}
                            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto"
                          />
                        )
                      ) : null}
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
