"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ReelEmbed from "./ReelEmbed";

type Props = {
  // When the reel is live, embed it. Otherwise link to the profile.
  reelUrl?: string;
  profileUrl?: string;
};

// Renders the "Watch the reel" band and relocates it in the DOM to sit
// directly below the TL;DR block (the leading run of Notion quote blocks).
// react-notion-x renders the whole post body as one tree, so we can't split
// it in JSX; instead we portal the band next to the TL;DR after it mounts.
const ReelBand = ({ reelUrl, profileUrl }: Props) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const HOST_ID = "reel-band-host";

    const place = (): boolean => {
      const page = document.querySelector(".notion-page");
      if (!page) return false;
      const kids = Array.from(page.children) as HTMLElement[];
      const firstQuote = kids.findIndex((k) =>
        k.classList.contains("notion-quote")
      );
      if (firstQuote === -1) return false;
      // walk to the end of the contiguous leading run of quote blocks (TL;DR)
      let last = firstQuote;
      while (
        last + 1 < kids.length &&
        kids[last + 1].classList.contains("notion-quote")
      ) {
        last++;
      }
      const anchor = kids[last];
      let host = document.getElementById(HOST_ID);
      if (!host) {
        host = document.createElement("div");
        host.id = HOST_ID;
      }
      if (anchor.nextSibling !== host) anchor.after(host);
      setContainer(host);
      return true;
    };

    if (place()) return;
    // NotionRenderer can hydrate a beat late; retry for a short window.
    let tries = 0;
    const timer = setInterval(() => {
      if (place() || ++tries > 20) clearInterval(timer);
    }, 150);
    return () => {
      clearInterval(timer);
      document.getElementById(HOST_ID)?.remove();
    };
  }, [reelUrl, profileUrl]);

  if (!container) return null;

  const eyebrow = (
    <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-red-500 mb-5 flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07] flex-shrink-0" />
      Watch the reel
    </p>
  );

  // Reel is live: embed it side by side with the context copy.
  if (reelUrl) {
    return createPortal(
      <div className="my-10 border border-[#e7e6e4] bg-white rounded-none p-5 sm:p-6">
        {eyebrow}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center md:justify-start">
            <ReelEmbed url={reelUrl} />
          </div>
          <div className="md:pt-2">
            <p className="font-alte text-[18px] sm:text-[20px] leading-[1.3] tracking-[-0.03em] text-[#0A1128]">
              This post is the full playbook I promised in the reel.
            </p>
            <p className="mt-4 font-alte text-[15px] leading-[1.6] tracking-[-0.02em] text-slate-600">
              Watch the 60-second version for the context, then keep scrolling
              for the 5 principles, the infographics, and the exact moves to run
              on your own site this week.
            </p>
          </div>
        </div>
      </div>,
      container
    );
  }

  // Reel not posted yet: link out to the Instagram profile instead.
  if (profileUrl) {
    return createPortal(
      <div className="my-10 border border-[#e7e6e4] bg-white rounded-none p-5 sm:p-6">
        {eyebrow}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
          <div className="flex-1">
            <p className="font-alte text-[18px] sm:text-[20px] leading-[1.3] tracking-[-0.03em] text-[#0A1128]">
              I broke this down in a reel too.
            </p>
            <p className="mt-3 font-alte text-[15px] leading-[1.6] tracking-[-0.02em] text-slate-600">
              I post the 60-second version of these, founder lessons and building
              with AI in the open, over on Instagram. Follow along there.
            </p>
          </div>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap self-start sm:self-auto rounded-none bg-[#0A1128] px-5 py-3 font-geist text-[13px] uppercase tracking-[0.02em] text-white transition-colors hover:bg-[#2563eb]"
          >
            Follow @adibuildz
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>,
      container
    );
  }

  return null;
};

export default ReelBand;
