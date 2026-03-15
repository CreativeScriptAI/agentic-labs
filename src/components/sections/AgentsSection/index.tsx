import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import AgentInfoModal from "src/components/sections/AgentInfoModal";

type AgentsSectionProps = {
  agents: any;
};

const agentNameCategoryMap: Record<string, string> = {
  "m2.ai": "Voice",
  fuzzie: "NLP & Content",
  "landing pill": "Vision",
  docsy: "NLP & Content",
  naitik: "Voice Lead Agent",
  fedforward: "Research",
  "vc notebot": "Automation",
  "aperio bot": "SaaS",
  "patientlyai - your ai voice caller": "Voice",
};

const inferAgentCategory = (name: string, title: string, description: string) => {
  const normalizedName = String(name || "").trim().toLowerCase();
  const exactMapped = agentNameCategoryMap[normalizedName];
  if (exactMapped) return exactMapped;

  const text = `${name} ${title} ${description}`.toLowerCase();

  if (/(voice|caller|call|calling|interview|lead)/.test(text)) {
    return "Voice";
  }
  if (/(image|photo|visual|vision|landing page|diagnos)/.test(text)) {
    return "Vision";
  }
  if (/(nlp|content|summar|notes|semantic|answer|document|file)/.test(text)) {
    return "NLP & Content";
  }
  if (/(crm|pipeline|workflow|automate|follow-up|assistant)/.test(text)) {
    return "Automation";
  }
  if (/(executive|insight|analytics|dashboard|mongo|saas)/.test(text)) {
    return "SaaS";
  }
  if (/(research|analysis|qualif|risk|screening)/.test(text)) {
    return "Research";
  }

  return "Automation";
};

const AgentsSection: React.FC<AgentsSectionProps> = ({ agents }) => {
  const router = useRouter();

  const projects: any[] = useMemo(() => {
    return Array.isArray(agents) ? agents.reverse() : [];
  }, [agents]);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);

  // Detect locale prefix from current path (e.g., /en-in/, /en-ae/, etc.)
  const localePrefix = useMemo(() => {
    // COMMENTED OUT: Auto-detection disabled to enforce global routes.
    // const path = router.asPath;
    // const localeMatch = path.match(/^\/(en-(?:in|ae|us|gb|au|ca))\//);
    // return localeMatch ? `/${localeMatch[1]}` : "";
    return "";
  }, [router.asPath]);

  const tabLabels: string[] = useMemo(
    () =>
      projects.map((p) => {
        const rawName = String(p?.overview?.name || p?.projectName || "Agent");
        if (rawName.trim().toLowerCase() === "patientlyai - your ai voice caller") {
          return "PatientlyAI";
        }
        return rawName;
      }),
    [projects]
  );

  const selectedProject: any | undefined = projects[selectedIndex];
  const selectedLabel: string = tabLabels[selectedIndex] || "Agent";
  const selectedOverview: any | undefined = selectedProject?.overview;
  const botImageSrc: string | undefined = selectedOverview?.botImage;
  const agentsBannerDesktop = "/images/all-agents-banner.svg";
  const agentsBannerMobile = "/images/All Agents Repo Banner - Mobile.svg";
  const agentsRepoHref = `${localePrefix}/agents-repo`;

  const modalTitle: string =
    selectedOverview?.name || selectedProject?.projectName || selectedLabel;
  const modalSubtitle: string =
    selectedOverview?.description || selectedOverview?.title || "";
  const modalAbout: string =
    selectedOverview?.aboutTheAgent ||
    selectedOverview?.about ||
    selectedOverview?.longDescription ||
    modalSubtitle;

  const featureBenefits: Array<any> = useMemo(() => {
    const fromOverview = selectedOverview?.featureAndBenefits;
    if (Array.isArray(fromOverview) && fromOverview.length > 0) {
      return fromOverview;
    }
    const fromOverviewLower = selectedOverview?.featuresandbenefits;
    if (Array.isArray(fromOverviewLower) && fromOverviewLower.length > 0) {
      return fromOverviewLower;
    }
    const fromBenefits = selectedOverview?.benefits;
    if (Array.isArray(fromBenefits) && fromBenefits.length > 0) {
      return fromBenefits;
    }
    return [];
  }, [selectedOverview]);

  const categories: string[] = useMemo(() => {
    const fromOverview = selectedOverview?.categories;
    if (Array.isArray(fromOverview) && fromOverview.length > 0) {
      return fromOverview.filter(Boolean);
    }
    const fromProject = selectedProject?.tags;
    if (Array.isArray(fromProject) && fromProject.length > 0) {
      return fromProject.filter(Boolean);
    }

    const inferred = inferAgentCategory(
      selectedOverview?.name || selectedProject?.projectName || selectedLabel,
      selectedOverview?.title || selectedOverview?.description || "",
      selectedOverview?.description || ""
    );

    return [inferred, "Agents"];
  }, [selectedOverview, selectedProject, selectedLabel]);

  const howItWorksImage: string =
    selectedOverview?.howitworks ||
    selectedOverview?.workingModelImage ||
    selectedOverview?.howItWorksImage ||
    selectedProject?.works?.image ||
    "/images/all-agents-banner.svg";

  const heroMedia: string =
    selectedProject?.hero?.heroImage ||
    selectedOverview?.heroImage ||
    botImageSrc ||
    "/images/robot.png";

  const selectedAgentRouteId: string =
    selectedProject?._id ||
    selectedProject?.id ||
    selectedProject?.slug ||
    selectedOverview?._id ||
    selectedOverview?.id ||
    selectedOverview?.slug ||
    "";

  // Build agent URL with locale prefix
  const agentHref = selectedAgentRouteId
    ? `${localePrefix}/agent/${selectedAgentRouteId}`
    : "#";

  const runTestLink: string =
    selectedOverview?.runTestLink ||
    selectedOverview?.tryButtonLink ||
    selectedOverview?.projectLink ||
    agentHref;

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

  const openAgentModal = React.useCallback(() => {
    setIsAgentModalOpen(true);
  }, []);

  const closeAgentModal = React.useCallback(() => {
    setIsAgentModalOpen(false);
  }, []);

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

        {/* Agents Banner */}
        <div className="mb-8 sm:mb-12 lg:mb-14 sm:mx-0">
          <div className="max-w-6xl mx-auto sm:rounded-xl sm:border sm:border-slate-200 overflow-hidden">
            <div className="block">
              <div className="relative hidden sm:block">
              <Image
                src={agentsBannerDesktop}
                alt="AI Agents Repo banner"
                
                width={930}
                height={248}
                className="w-full h-auto"
                priority={false}
              />
                <Link
                  href={agentsRepoHref}
                  className="absolute inset-x-0 bottom-12 mx-auto inline-flex h-[35px] w-[180px] items-center justify-center rounded-[8px] bg-[#0062FF] px-[16px] py-[12px] text-center font-sfpro text-[16px] leading-[20px] font-medium text-[#F8F9FA]"
                >
                  Try AI Agents for free
                </Link>
              </div>
              <div className="block sm:hidden">
                <div className="relative mx-auto h-[426px] w-[327px] max-w-full overflow-hidden rounded-[8px] bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_6px_25px_0px_rgba(0,0,0,0.08),0px_2px_8px_0px_rgba(0,0,0,0.1)]">
                  <Image
                    src={agentsBannerMobile}
                    alt="AI Agents Repo banner mobile"
                    fill
                    sizes="327px"
                    className="object-cover object-center scale-[1.16]"
                    quality={100}
                    unoptimized
                    priority={false}
                  />

                  <div className="absolute left-1/2 top-[40px] flex w-[258px] -translate-x-1/2 flex-col items-center gap-6 text-center">
                    <div className="flex flex-col items-center gap-2 text-[#0A1128] w-full">
                      <h3 className="font-mondwest text-[36px] leading-none w-[243px]">
                        AI Agents Repo
                      </h3>
                      <p className="text-slate-800 text-[14px] leading-normal w-full">
                        Live repository of AI agents deployed by Agentic AI Labs.
                      </p>
                    </div>
                    <Link
                      href={agentsRepoHref}
                      className="inline-flex h-[40px] w-[197px] items-center justify-center rounded-[8px] bg-[#0062FF] px-[16px] py-[12px] text-center font-sfpro text-[16px] leading-[20px] font-medium text-[#F8F9FA]"
                    >
                      Try AI Agents for free
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Navigation */}
        <div className="mb-6">
          <div className="sm:block md:flex md:justify-center overflow-x-auto w-full -mx-4 no-scrollbar px-8 md:mx-0">
            <div className="flex flex-nowrap justify-start md:justify-center gap-6 min-w-max mx-auto">
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
        <div className="flex md:hidden justify-center gap-2 mb-6">
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
          <div className="rounded-xl lg:rounded-2xl border border-slate-200 bg-white shadow-sm p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
              <div className="flex-1 text-left">
                <div className="mb-3 sm:mb-4">
                  <span className="inline-flex rounded-lg bg-red-500 px-2.5 py-1 text-gray-50 font-sfpro text-xs sm:text-sm font-medium leading-none">
                    NEW
                  </span>
                </div>

                <h3 className="font-mondwest text-[36px] font-normal text-blue-600 mb-3 sm:mb-4 leading-tight">
                  {selectedLabel}
                </h3>

                <h4 className="text-slate-800 font-sfpro text-[20px] font-medium leading-tight mb-3 sm:mb-4 max-w-3xl">
                  {selectedOverview?.title || ""}
                </h4>

                <p className="text-slate-600 font-sfpro text-sm sm:text-base lg:text-lg font-normal leading-relaxed mb-5 sm:mb-6 max-w-3xl">
                  {selectedOverview?.description || ""}
                </p>

                <button
                  onClick={openAgentModal}
                  className="bg-blue-600 rounded-lg text-gray-50 font-sfpro text-sm sm:text-base font-medium hover:bg-blue-700 transition-colors duration-200 inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3"
                >
                  Try {selectedLabel}
                </button>
              </div>

              <div className="flex-shrink-0">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-[214px] lg:h-[214px] rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src={botImageSrc || "/images/robot.png"}
                    alt="Agent"
                    width={214}
                    height={214}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <AgentInfoModal
          isOpen={isAgentModalOpen}
          onClose={closeAgentModal}
          onPrev={handlePrev}
          onNext={handleNext}
          prevDisabled={isAtStart}
          nextDisabled={isAtEnd}
          title={modalTitle}
          subtitle={modalSubtitle}
          about={modalAbout}
          features={featureBenefits}
          categories={categories}
          howItWorksImage={howItWorksImage}
          heroMedia={heroMedia}
          agentHref={agentHref}
          runTestLink={runTestLink}
        />
      </div>
    </div>
  );
};

export default AgentsSection;
