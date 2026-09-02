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

type Props = Record<string, never>;

const PostDetail: React.FC<Props> = () => {
  const data = usePostQuery();

  if (!data) return null;

  const category = (data.category && data.category?.[0]) || undefined;

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
