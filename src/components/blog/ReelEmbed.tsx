"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    instgrm?: any;
  }
}

// Renders an Instagram reel/post via Instagram's official embed script.
// Loaded only where this component is used (currently one blog post).
const ReelEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const process = () => window.instgrm?.Embeds?.process();
    if (window.instgrm) {
      process();
      return;
    }
    const id = "instagram-embed-js";
    const existing = document.getElementById(id) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", process);
      process();
      return;
    }
    const s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.src = "https://www.instagram.com/embed.js";
    s.onload = process;
    document.body.appendChild(s);
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        margin: 0,
        width: "100%",
        minWidth: "0",
        maxWidth: "420px",
        background: "#fff",
        border: "1px solid #e7e6e4",
        borderRadius: 0,
      }}
    />
  );
};

export default ReelEmbed;
