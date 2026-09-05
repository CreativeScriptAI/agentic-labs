import React from "react";
import PostHeader from "./PostHeader";
import Footer from "./PostFooter";
// import CommentBox from "./CommentBox";
import Category from "src/components/Category";
import styled from "@emotion/styled";
import NotionRenderer from "../components/NotionRenderer";
import usePostQuery from "src/hooks/usePostQuery";
import RelatedServices from "src/components/blog/RelatedServices";
import RelatedPosts from "src/components/blog/RelatedPosts";
import ReelEmbed from "src/components/blog/ReelEmbed";

type Props = Record<string, never>;

// Posts that show the author's original Instagram reel alongside the article.
const REELS: Record<string, string> = {
  "seo-playbook-that-actually-works":
    "https://www.instagram.com/reel/Dcy2_C3zbka/",
};

const PostDetail: React.FC<Props> = () => {
  const data = usePostQuery();

  if (!data) return null;

  const category = (data.category && data.category?.[0]) || undefined;
  const reelUrl = data.slug ? REELS[data.slug] : undefined;

  return (
    <StyledWrapper>
      <article>
        {category && (
          <div css={{ marginBottom: "1rem" }}>
            <Category readOnly={data.status?.[0] === "PublicOnDetail"}>
              {category}
            </Category>
          </div>
        )}
        {data.type[0] === "Post" && <PostHeader data={data} />}
        {reelUrl && (
          <div className="mt-8 border border-[#e7e6e4] bg-white rounded-none p-5 sm:p-6">
            <p className="font-geist text-[11px] uppercase tracking-[0.02em] text-red-500 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FCCA07] flex-shrink-0" />
              Watch the reel
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="flex justify-center md:justify-start">
                <ReelEmbed url={reelUrl} />
              </div>
              <div>
                <p className="font-alte text-[18px] sm:text-[20px] leading-[1.3] tracking-[-0.03em] text-[#0A1128]">
                  This post is the full playbook I promised in the reel.
                </p>
                <p className="mt-3 font-alte text-[15px] leading-[1.6] tracking-[-0.02em] text-slate-600">
                  Watch the 60-second version for the context, then keep scrolling
                  for the 5 principles, the infographics, and the exact moves to
                  run on your own site this week.
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="mt-10 pt-8 border-t border-[#e7e6e4]">
          <NotionRenderer recordMap={data.recordMap} />
        </div>
        {data.type[0] === "Post" && (
          <>
            <RelatedServices title={data.title} category={category} />
            <RelatedPosts />
            <Footer />
            {/* <CommentBox data={data} /> */}
          </>
        )}
      </article>
    </StyledWrapper>
  );
};

export default PostDetail;

const StyledWrapper = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  max-width: 46rem;
  background-color: transparent;
  margin: 0 auto;
  > article {
    margin: 0 auto;
    max-width: 42rem;
  }
`;
