import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import AgentInfoModal from "src/components/sections/AgentInfoModal";

type AgentsRepoDesktopSectionProps = {
  agents: any[];
};

type NormalizedAgent = {
  id: string;
  routeId: string;
  name: string;
  subtitle: string;
  image: string;
  features: any[];
  tags: string[];
  raw: any;
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

  if (/(image|photo|visual|vision|landing page|doctor|diagnos)/.test(text)) {
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

const categoryTabs = [
  "All Agents",
  "Voice",
  "Automation",
  "SaaS",
  "Research",
  "NLP & Content",
  "Voice Lead Agent",
  "Vision",
];

const agentThumbnailMap: Record<string, string> = {
  "m2.ai": "/images/agents repo/M2AI - voice agent.svg",
  "vc notebot": "/images/agents repo/VC Notebot.svg",
  fuzzie: "/images/agents repo/Fuzzle.svg",
  "landing pill": "/images/agents repo/Landing Pill.svg",
  naitik: "/images/agents repo/Naitik Thumbnail.png",
  "naitik ai": "/images/agents repo/Naitik Thumbnail.png",
  fedforward: "/images/agents repo/Fedforward.svg",
  docsy: "/images/agents repo/Docsy.svg",
  "aperio bot": "/images/agents repo/Aperio.svg",
  "patientlyai - your ai voice caller": "/images/agents repo/Patiently AI - Medspa voice agent.svg",
  patientlyai: "/images/agents repo/Patiently AI - Medspa voice agent.svg",
};

const getAgentThumbnail = (name: string, fallback: string) => {
  const normalizedName = String(name || "").trim().toLowerCase();
  return agentThumbnailMap[normalizedName] || fallback || "/images/robot.png";
};

const chevronIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M6 4L10 8L6 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const searchIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M17.5 17.5L14.5 14.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AgentsRepoDesktopSection: React.FC<AgentsRepoDesktopSectionProps> = ({
  agents,
}) => {
  const [activeCategory, setActiveCategory] = useState("All Agents");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAgentIndex, setSelectedAgentIndex] = useState<number>(0);
  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);
  const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({});
  const listTopRef = useRef<HTMLDivElement | null>(null);

  const normalizedAgents = useMemo<NormalizedAgent[]>(() => {
    return (Array.isArray(agents) ? agents : []).map((agent: any) => {
      const overview = agent?.overview || {};
      const features =
        overview?.featuresandbenefits || overview?.featureAndBenefits || [];
      const name = overview?.name || agent?.projectName || "AI Agent";
      const title =
        overview?.title ||
        overview?.description ||
        "Production-ready AI workflow agent";
      const description = overview?.description || "";
      const apiCategories = Array.isArray(overview?.categories)
        ? overview.categories.filter(Boolean)
        : [];
      const inferredCategory = inferAgentCategory(name, title, description);
      const resolvedTags =
        apiCategories.length > 0 ? apiCategories : [inferredCategory, "Agents"];
      const resolvedImage = getAgentThumbnail(name, overview?.botImage || "/images/robot.png");

      return {
        id: agent?._id || agent?.id || overview?._id || overview?.id || "",
        routeId:
          agent?._id ||
          agent?.id ||
          agent?.slug ||
          overview?._id ||
          overview?.id ||
          overview?.slug ||
          "",
        name,
        subtitle: title,
        image: resolvedImage,
        features: Array.isArray(features) ? features : [],
        tags: resolvedTags,
        raw: agent,
      };
    });
  }, [agents]);

  const filteredAgents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return normalizedAgents.filter((agent) => {
      if (
        activeCategory !== "All Agents" &&
        !agent.tags.some((tag) => String(tag).toLowerCase() === activeCategory.toLowerCase())
      ) {
        return false;
      }

      if (!query) return true;

      return (
        agent.name.toLowerCase().includes(query) ||
        agent.subtitle.toLowerCase().includes(query) ||
        agent.tags.some((tag) => String(tag).toLowerCase().includes(query))
      );
    });
  }, [normalizedAgents, activeCategory, searchQuery]);

  const groupedAgents = useMemo(() => {
    if (activeCategory === "All Agents") {
      return [["All Agents", filteredAgents] as [string, NormalizedAgent[]]];
    }

    return [[activeCategory, filteredAgents] as [string, NormalizedAgent[]]];
  }, [activeCategory, filteredAgents]);

  const modalAgent = filteredAgents[selectedAgentIndex] || filteredAgents[0];
  const selectedOverview = modalAgent?.raw?.overview || {};

  const modalTitle = selectedOverview?.name || modalAgent?.name || "AI Agent";
  const modalSubtitle =
    selectedOverview?.description ||
    selectedOverview?.title ||
    modalAgent?.subtitle ||
    "";
  const modalAbout =
    selectedOverview?.aboutTheAgent ||
    selectedOverview?.about ||
    selectedOverview?.longDescription ||
    modalSubtitle;

  const modalFeatures = (() => {
    const fromOverview = selectedOverview?.featureAndBenefits;
    if (Array.isArray(fromOverview) && fromOverview.length > 0) {
      return fromOverview;
    }
    const fromOverviewLower = selectedOverview?.featuresandbenefits;
    if (Array.isArray(fromOverviewLower) && fromOverviewLower.length > 0) {
      return fromOverviewLower;
    }
    return modalAgent?.features || [];
  })();

  const modalCategories = (() => {
    const fromOverview = selectedOverview?.categories;
    if (Array.isArray(fromOverview) && fromOverview.length > 0) {
      return fromOverview.filter(Boolean);
    }
    return modalAgent?.tags || ["Automation"];
  })();

  const howItWorksImage =
    selectedOverview?.howitworks ||
    selectedOverview?.workingModelImage ||
    selectedOverview?.howItWorksImage ||
    "/images/all-agents-banner.svg";

  const modalHeroMedia =
    modalAgent?.raw?.hero?.heroImage ||
    selectedOverview?.heroImage ||
    modalAgent?.image ||
    "/images/robot.png";
  const isModalHeroVideo = /\.mp4(\?|$)/i.test(String(modalHeroMedia || ""));

  const agentHref = modalAgent?.routeId ? `/agent/${modalAgent.routeId}` : "#";
  const runTestLink =
    selectedOverview?.runTestLink ||
    selectedOverview?.tryButtonLink ||
    selectedOverview?.projectLink ||
    agentHref;

  const openAgentModalByIndex = (index: number) => {
    setSelectedAgentIndex(index);
    setIsAgentModalOpen(true);
  };

  const closeAgentModal = () => {
    setIsAgentModalOpen(false);
  };

  const goPrevInModal = () => {
    if (filteredAgents.length === 0) return;
    setSelectedAgentIndex((prev) =>
      prev === 0 ? filteredAgents.length - 1 : prev - 1
    );
  };

  const goNextInModal = () => {
    if (filteredAgents.length === 0) return;
    setSelectedAgentIndex((prev) =>
      prev === filteredAgents.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (!isAgentModalOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAgentModal();
      }
      if (event.key === "ArrowLeft") {
        goPrevInModal();
      }
      if (event.key === "ArrowRight") {
        goNextInModal();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isAgentModalOpen, filteredAgents.length]);

  const scrollToElementWithOffset = (element: HTMLElement | null) => {
    if (typeof window === "undefined" || !element) return;

    // Keep category tabs visible after a jump by stopping a bit before the section top.
    const topOffset = window.innerWidth < 640 ? 120 : 160;
    const targetTop = window.scrollY + element.getBoundingClientRect().top - topOffset;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
  };

  const handleCategorySelect = (tab: string) => {
    setActiveCategory(tab);

    if (typeof window === "undefined") return;

    window.requestAnimationFrame(() => {
      if (tab === "All Agents") {
        scrollToElementWithOffset(listTopRef.current);
        return;
      }

      const targetSection = sectionsRef.current[tab];
      scrollToElementWithOffset(targetSection);
    });
  };

  return (
    <section
      className="pt-28 pb-12 sm:pt-24 sm:pb-12"
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h1 className="font-mondwest text-[32px] tracking-[-0.04em] text-[#0A1128] mb-2">
            AI Agents Repo
          </h1>
          <p className="text-slate-600 text-base max-w-[301px] mx-auto leading-snug">
            Live repository of AI agents deployed by Agentic AI Labs.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 px-2 sm:px-6 py-4 mb-8 sm:mb-10">
          <div className="w-[366px] max-w-full relative z-20">
            <label className="flex items-center gap-2 rounded-[12px] border border-slate-200 bg-white px-[17px] py-[17px] text-slate-400 shadow-sm">
              <span className="text-slate-400">{searchIcon}</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search agents..."
                className="w-full bg-transparent text-[14px] text-slate-700 outline-none placeholder:text-slate-400"
              />
            </label>
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-2">
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => handleCategorySelect(tab)}
                className={`shrink-0 rounded-[8px] px-4 py-2 text-[14px] font-normal uppercase transition-all duration-200 ${
                  tab === activeCategory
                    ? "bg-[#E2E8F0] text-[#0A1128]"
                    : "bg-transparent text-slate-600 hover:bg-white/60 hover:text-[#0A1128]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div ref={listTopRef} className="space-y-10 sm:space-y-12">
          {groupedAgents.length === 0 && (
            <div className="rounded-lg border border-slate-200 bg-white p-6 text-center text-slate-500">
              No agents found.
            </div>
          )}

          {groupedAgents.map(([category, categoryAgents]) => (
            <div
              key={category}
              ref={(element) => {
                sectionsRef.current[category] = element;
              }}
            >
              {activeCategory !== "All Agents" && (
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-[20px] leading-none text-[#0A1128] font-normal">
                    {category}
                  </h2>
                  <p className="text-[14px] text-slate-400">
                    {categoryAgents.length} agents
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {categoryAgents.map((agent) => {
                  const idx = filteredAgents.findIndex((item) => item.id === agent.id);

                  return (
                    <article
                      key={agent.id || agent.name}
                      className="w-full rounded-lg bg-white p-3 cursor-pointer"
                      onClick={() => openAgentModalByIndex(Math.max(idx, 0))}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          openAgentModalByIndex(Math.max(idx, 0));
                        }
                      }}
                    >
                      <div className="mb-4 aspect-[241/141] rounded-[6px] bg-slate-100 overflow-hidden flex items-center justify-center">
                        <Image
                          src={agent.image}
                          alt={agent.name}
                          width={964}
                          height={564}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <h3 className="text-slate-800 text-[20px] leading-tight mb-2 font-normal font-sfpro">
                        {agent.name}
                      </h3>

                      <p className="text-slate-600 text-[14px] leading-snug mb-3 line-clamp-2">
                        {agent.subtitle}
                      </p>

                      <ul className="space-y-1.5 mb-3">
                        {(agent.features.length > 0
                          ? agent.features.slice(0, 3)
                          : [
                              { heading: "24x7 Auto Calling" },
                              { heading: "Real Time Slot Booking" },
                              { heading: "All Files Supported" },
                            ]
                        ).map((feature: any, featureIdx: number) => (
                          <li
                            key={`${agent.name}-feature-${featureIdx}`}
                            className="flex items-center gap-1.5 text-[14px] text-slate-600"
                          >
                            <span className="text-[#0062FF]">✓</span>
                            <span>
                              {feature?.heading || feature?.title || "Feature"}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {agent.tags.slice(0, 2).map((tag: string, tagIndex: number) => (
                          <span
                            key={`${agent.name}-tag-${tagIndex}`}
                            className="rounded bg-slate-200 px-2.5 py-1 text-[12px] font-medium text-[#0A1128]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-[#0062FF] text-[14px]"
                        onClick={(event) => {
                          event.stopPropagation();
                          openAgentModalByIndex(Math.max(idx, 0));
                        }}
                      >
                        Test Agent
                        {chevronIcon}
                      </button>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {isAgentModalOpen && modalAgent && (
          <AgentInfoModal
            isOpen={isAgentModalOpen}
            onClose={closeAgentModal}
            onPrev={goPrevInModal}
            onNext={goNextInModal}
            prevDisabled={false}
            nextDisabled={false}
            title={modalTitle}
            subtitle={modalSubtitle}
            about={modalAbout}
            features={modalFeatures}
            categories={modalCategories}
            howItWorksImage={howItWorksImage}
            heroMedia={modalHeroMedia}
            agentHref={agentHref}
            runTestLink={runTestLink}
          />
        )}
      </div>
    </section>
  );
};

export default AgentsRepoDesktopSection;
