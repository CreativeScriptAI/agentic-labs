import React, { useState } from "react";

import { FeedHeader } from "./FeedHeader";
import TagList from "./TagList";
import PostList from "./PostList";
import PinnedPosts from "./PostList/PinnedPosts";

type Props = Record<string, never>;

const Feed: React.FC<Props> = () => {
  const [q] = useState("");

  return (
    <div className="min-h-screen bg-[#F9F6F4]">
      {/* Hero */}
      <section className="border-b border-[#e7e6e4] pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-geist text-[12px] uppercase tracking-[0.02em] text-red-500 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07] flex-shrink-0" />
            Agentic AI Labs · Blog
          </p>
          <h1 className="font-alte font-normal text-[2rem] sm:text-4xl lg:text-[2.9rem] leading-[1.08] tracking-[-0.04em] text-[#0A1128] max-w-3xl">
            The Art of Building
          </h1>
          <p className="mt-5 font-alte text-[16px] sm:text-[18px] leading-[1.55] tracking-[-0.02em] text-slate-600 max-w-2xl">
            Field notes on AI voice agents, WebMCP, and getting found in the AI
            era. Written in the open by Aditya Pandey.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left rail: tag filter (desktop sticky) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
              <TagList />
            </div>
          </aside>

          {/* Main column */}
          <div className="lg:col-span-9">
            {/* Mobile tag rail */}
            <div className="lg:hidden mb-6">
              <TagList />
            </div>
            <PinnedPosts q={q} />
            <FeedHeader />
            <PostList q={q} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feed;
