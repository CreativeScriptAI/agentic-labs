import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import AgentInfoModal from "src/components/sections/AgentInfoModal";
import RevealText from "src/components/RevealText";

const FADE_UP = { type: "spring" as const, stiffness: 320, damping: 30 };
const VIEWPORT = { once: true, margin: "-80px" } as const;

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
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={FADE_UP}
            className="text-red-500 font-bold text-xs tracking-[0.18em] uppercase mb-4 font-sfpro px-4"
          >
            Agents we&apos;ve shipped
          </motion.p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mondwest leading-tight px-4">
            <RevealText
              as="span"
              text="Not demos."
              inView
              stagger={0.06}
              className="block text-[#0A1128]"
            />
            <RevealText
              as="span"
              text="Agents already doing the work."
              inView
              delay={0.22}
              stagger={0.05}
              className="block text-blue-600 mt-1"
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ ...FADE_UP, delay: 0.15 }}
            className="text-slate-500 font-sfpro text-base sm:text-lg max-w-xl mx-auto mt-6 leading-relaxed px-4"
          >
            Browse what we&apos;ve built and deployed. Each one is live with a real
            business right now.
          </motion.p>
        </div>

        {/* Agents Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={FADE_UP}
          className="mb-8 sm:mb-12 lg:mb-14 sm:mx-0"
        >
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
        </motion.div>

        {/* Selector (left) + agent card (right) */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* Left: vertical agent selector (horizontal scroll on mobile) */}
          <div className="w-full lg:w-56 flex-shrink-0">
            <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-visible no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
              {tabLabels.map((agentName: string, idx: number) => {
                const active = selectedIndex === idx;
                return (
                  <button
                    key={`${agentName}-${idx}`}
                    onClick={() => goToIndex(idx)}
                    className={`relative flex-shrink-0 text-left whitespace-nowrap rounded-xl px-4 py-2.5 font-sfpro text-sm font-medium transition-colors ${
                      active ? "text-blue-600" : "text-slate-500 hover:text-blue-600"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="agentPill"
                        className="absolute inset-0 rounded-xl bg-white border border-slate-100 shadow-[0_4px_18px_rgba(10,17,40,0.06)]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{agentName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: selected agent card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={FADE_UP}
            className="flex-1 min-w-0 w-full"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_14px_44px_rgba(10,17,40,0.07)] p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-500/[0.06] blur-3xl"
              />
              {/* content swaps with a gentle fade when you change agents */}
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={FADE_UP}
                className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
              >
                <div className="flex-1 text-center sm:text-left order-2 sm:order-1">
                  <div className="mb-4">
                    <span className="inline-flex rounded-full bg-red-500 px-2.5 py-1 text-gray-50 font-sfpro text-[11px] font-bold tracking-wide leading-none">
                      NEW
                    </span>
                  </div>

                  <h3 className="font-mondwest text-[32px] sm:text-[38px] font-normal text-blue-600 mb-3 leading-tight">
                    {selectedLabel}
                  </h3>

                  {selectedOverview?.title && (
                    <h4 className="text-[#0A1128] font-sfpro text-base sm:text-lg font-semibold leading-snug mb-3">
                      {selectedOverview.title}
                    </h4>
                  )}

                  <p className="text-slate-500 font-sfpro text-sm sm:text-[15px] leading-relaxed mb-6">
                    {(selectedOverview?.description || "").replace(/\s*—\s*/g, ", ")}
                  </p>

                  <button
                    onClick={openAgentModal}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-gray-50 font-sfpro text-sm sm:text-base font-semibold shadow-[0_8px_24px_rgba(0,98,255,0.28)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 active:scale-[0.98]"
                  >
                    Try {selectedLabel}
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>

                <div className="flex-shrink-0 order-1 sm:order-2">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full bg-gradient-to-b from-blue-50 to-white ring-1 ring-blue-100/70 flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={botImageSrc || "/images/robot.png"}
                      alt={selectedLabel}
                      width={200}
                      height={200}
                      className="w-[82%] h-[82%] object-contain"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
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
