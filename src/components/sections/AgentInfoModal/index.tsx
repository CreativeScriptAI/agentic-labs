import Image from "next/image";
import React, { useEffect, useState } from "react";

type AgentInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  title: string;
  subtitle: string;
  about: string;
  features: any[];
  categories: string[];
  howItWorksImage: string;
  heroMedia: string;
  agentHref: string;
  runTestLink: string;
};

const arrowLeftIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M12.5 5L7.5 10L12.5 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const arrowRightIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M7.5 5L12.5 10L7.5 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const closeIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M5.175 5.175L14.825 14.825"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.825 5.175L5.175 14.825"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const accordionCaret = (expanded: boolean) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    className={`text-slate-600 transition-transform ${expanded ? "rotate-180" : ""}`}
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AgentInfoModal: React.FC<AgentInfoModalProps> = ({
  isOpen,
  onClose,
  onPrev,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
  title,
  subtitle,
  about,
  features,
  categories,
  howItWorksImage,
  heroMedia,
  agentHref,
  runTestLink,
}) => {
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);
  const [isHowItWorksExpanded, setIsHowItWorksExpanded] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setIsFeaturesExpanded(false);
    setIsHowItWorksExpanded(false);
  }, [isOpen]);

  if (!isOpen) return null;

  const isHeroVideo = /\.mp4(\?|$)/i.test(String(heroMedia || ""));

  const renderActionLink = (href: string, className: string, label: string, closeAfterClick = false) => {
    const safeHref = href || "#";
    const isExternal = /^https?:\/\//i.test(safeHref);

    return (
      <a
        href={safeHref}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={className}
        onClick={(event) => {
          if (safeHref === "#") {
            event.preventDefault();
          }
          if (closeAfterClick) {
            onClose();
          }
        }}
      >
        {label}
      </a>
    );
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-start sm:pt-20 justify-center bg-black/55 p-0 sm:p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full h-[100dvh] sm:h-auto sm:max-h-[calc(100vh-112px)] max-w-[1012px] overflow-hidden rounded-none sm:rounded-lg bg-[#F9F6F4] p-4 sm:p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_6px_25px_0px_rgba(0,0,0,0.08),0px_2px_8px_0px_rgba(0,0,0,0.1)] flex flex-col">
        <div className="flex items-center justify-between mb-5 sm:mb-10">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onPrev}
              disabled={!onPrev || prevDisabled}
              className="h-6 w-6 inline-flex items-center justify-center text-slate-600 disabled:opacity-35"
              aria-label="Previous agent"
            >
              {arrowLeftIcon}
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={!onNext || nextDisabled}
              className="h-6 w-6 inline-flex items-center justify-center text-slate-600 disabled:opacity-35"
              aria-label="Next agent"
            >
              {arrowRightIcon}
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="h-6 w-6 inline-flex items-center justify-center text-slate-600"
            aria-label="Close modal"
          >
            {closeIcon}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="space-y-6 pb-3">
            <h3 className="text-slate-800 text-[34px] sm:text-2xl leading-tight">{title}</h3>

            <div className="space-y-2">
              <div className="rounded-[15px] overflow-hidden bg-slate-100 aspect-[16/9] w-full">
                {isHeroVideo ? (
                  <video
                    src={heroMedia}
                    className="w-full h-full object-contain"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <Image
                    src={heroMedia}
                    alt={title}
                    width={964}
                    height={563}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div className="text-center text-slate-400 text-base">• • •</div>
            </div>

            <p className="text-slate-800 text-[18px] sm:text-[20px] leading-snug font-medium max-w-[762px]">
              {subtitle}
            </p>

            <div>
              <h4 className="text-slate-800 text-base font-medium mb-2">About the agent</h4>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {about}
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <button
                type="button"
                onClick={() => setIsFeaturesExpanded((prev) => !prev)}
                className="w-full flex items-center justify-between"
                aria-expanded={isFeaturesExpanded}
                aria-controls="shared-agent-features-panel"
              >
                <p className="font-mondwest text-[#0A1128] text-[20px] uppercase tracking-wide">
                  Feature & Benefits
                </p>
                {accordionCaret(isFeaturesExpanded)}
              </button>

              {isFeaturesExpanded && (
                <div
                  id="shared-agent-features-panel"
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"
                >
                  {features.slice(0, 3).map((item: any, featureIdx: number) => {
                    const itemTitle = item?.title || item?.heading || item?.text || "Feature";
                    const description =
                      item?.description || item?.subheading || item?.subText || "";

                    return (
                      <div key={`${itemTitle}-${featureIdx}`} className="rounded-lg bg-[#F9F6F4] p-4">
                        <div className="flex items-start gap-2">
                          <div className="w-6 h-6 bg-[#0062FF] rounded-sm text-white inline-flex items-center justify-center text-xs mt-0.5">
                            ✓
                          </div>
                          <div>
                            <p className="text-slate-800 text-base font-medium mb-1">{itemTitle}</p>
                            <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <button
                type="button"
                onClick={() => setIsHowItWorksExpanded((prev) => !prev)}
                className="w-full flex items-center justify-between"
                aria-expanded={isHowItWorksExpanded}
                aria-controls="shared-agent-how-it-works-panel"
              >
                <p className="font-mondwest text-[#0A1128] text-[20px] uppercase tracking-wide">
                  How it Works
                </p>
                {accordionCaret(isHowItWorksExpanded)}
              </button>

              {isHowItWorksExpanded && (
                <div id="shared-agent-how-it-works-panel" className="rounded-lg bg-[#F9F6F4] p-4 mt-4">
                  <div className="rounded-lg overflow-hidden bg-[#FAF2ED]">
                    <Image
                      src={howItWorksImage}
                      alt="How it works"
                      width={900}
                      height={285}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            <div>
              <h4 className="text-slate-800 text-base font-medium mb-3">Category</h4>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 4).map((category: string, categoryIdx: number) => (
                  <span
                    key={`${category}-${categoryIdx}`}
                    className="inline-flex items-center rounded bg-slate-200 px-3 py-1 text-xs font-medium text-[#0A1128]"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-300 mt-2 sm:mt-6 pt-4 sm:pt-6 pb-[calc(env(safe-area-inset-bottom)+0.25rem)] bg-[#F9F6F4] flex flex-row items-stretch justify-center sm:justify-end gap-2">
          {renderActionLink(
            agentHref,
            "inline-flex w-[150px] sm:w-[200px] self-stretch items-center justify-center gap-2 rounded-[8px] border border-[#0062FF] shadow-[inset_0_0_0_1px_#0062FF] bg-white px-3 py-3 text-sm font-medium text-[#0062FF] transition-colors hover:bg-blue-50",
            "Learn more"
          )}
          {renderActionLink(
            runTestLink,
            "inline-flex w-[150px] sm:w-[200px] self-stretch items-center justify-center gap-2 rounded-[8px] bg-[#0062FF] px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700",
            "Run Test",
            true
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentInfoModal;
