"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ReelEmbed from "./ReelEmbed";

// Renders the "Watch the reel" band and relocates it in the DOM to sit
// directly below the TL;DR block (the leading run of Notion quote blocks).
// react-notion-x renders the whole post body as one tree, so we can't split
// it in JSX; instead we portal the band next to the TL;DR after it mounts.
const ReelBand = ({ url }: { url: string }) => {
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
  }, [url]);

  if (!container) return null;

  return createPortal(
    <div className="my-10 border border-[#e7e6e4] bg-white rounded-none p-5 sm:p-6">
      <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-red-500 mb-5 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07] flex-shrink-0" />
        Watch the reel
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center md:justify-start">
          <ReelEmbed url={url} />
        </div>
        <div className="md:pt-2">
          <p className="font-alte text-[18px] sm:text-[20px] leading-[1.3] tracking-[-0.03em] text-[#0A1128]">
            This post is the full playbook I promised in the reel.
          </p>
          <p className="mt-4 font-alte text-[15px] leading-[1.6] tracking-[-0.02em] text-slate-600">
            Watch the 60-second version for the context, then keep scrolling for
            the 5 principles, the infographics, and the exact moves to run on
            your own site this week.
          </p>
        </div>
      </div>
    </div>,
    container
  );
};

export default ReelBand;
