import styled from "@emotion/styled";
import Link from "next/link";
import { TPost } from "../../types";
import Image from "next/image";
import Category from "../../components/Category";
import AgentTag from "../../components/AgentTag";

type Props = {
  data: TPost;
};

const AgentCard: React.FC<Props> = ({ data }) => {
  const category = (data.category && data.category?.[0]) || undefined;

  // Function to determine tag variant based on tag content
  // const getTagVariant = (tag: string): "primary" | "secondary" | "accent" => {
  //   const lowerTag = tag.toLowerCase();
  //   if (lowerTag.includes("analytics") || lowerTag.includes("productivity")) {
  //     return "accent";
  //   }
  //   if (
  //     lowerTag.includes("development") ||
  //     lowerTag.includes("in development")
  //   ) {
  //     return "secondary";
  //   }
  //   return "primary";
  // };

  return (
    <StyledWrapper href={`/agents/${data.slug}`}>
      lkajskdljf
      {/* <article>
        {category && (
          <div className="category">
            <Category>{category}</Category>
          </div>
        )}
        {data.thumbnail && (
          <div className="thumbnail">
            <Image
              src={data.thumbnail}
              fill
              alt={data.title}
              css={{ objectFit: "cover" }}
            />
          </div>
        )}
        <div
          data-thumb={!!data.thumbnail}
          data-category={!!category}
          className="content"
        >
          <header className="top">
            <h2>{data.title}</h2>
          </header>
          <div className="summary">
            <p>{data.summary}</p>
          </div>
          <div className="tags">
            {data.tags &&
              data.tags.map((tag: string, idx: number) => (
                <AgentTag key={idx} variant={getTagVariant(tag)}>
                  {tag}
                </AgentTag>
              ))}
          </div>
          <div className="status">
            {category && <span className="status-badge">Active</span>}
          </div>
        </div>
      </article> */}
    </StyledWrapper>
  );
};

export default AgentCard;

const StyledWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  article {
    overflow: hidden;
    position: relative;
    margin-bottom: 1.5rem;
    border-radius: 1rem;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.gray4};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    border: 1px solid ${({ theme }) => theme.colors.gray6};

    @media (min-width: 768px) {
      margin-bottom: 2rem;
    }

    :hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
      transform: translateY(-2px);
      border-color: ${({ theme }) => theme.colors.gray8};
    }

    > .category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      z-index: 10;
    }

    > .thumbnail {
      position: relative;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.gray2};
      padding-bottom: 60%;

      @media (min-width: 1024px) {
        padding-bottom: 45%;
      }
    }

    > .content {
      padding: 1.5rem;

      &[data-thumb="false"] {
        padding-top: 3.5rem;
      }
      &[data-category="false"] {
        padding-top: 1.5rem;
      }

      > .top {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 1rem;

        h2 {
          margin-bottom: 0;
          font-size: 1.25rem;
          line-height: 1.75rem;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.gray12};

          @media (min-width: 768px) {
            font-size: 1.375rem;
            line-height: 1.875rem;
          }
        }
      }

      > .summary {
        margin-bottom: 1.5rem;

        p {
          line-height: 1.625rem;
          color: ${({ theme }) => theme.colors.gray11};
          font-size: 0.875rem;

          @media (min-width: 768px) {
            font-size: 0.9375rem;
            line-height: 1.75rem;
          }
        }
      }

      > .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }

      > .status {
        display: flex;
        justify-content: flex-end;

        .status-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          background-color: ${({ theme }) =>
            theme.scheme === "light" ? "#dcfce7" : "#052e16"};
          color: ${({ theme }) =>
            theme.scheme === "light" ? "#166534" : "#86efac"};
          border: 1px solid
            ${({ theme }) => (theme.scheme === "light" ? "#16a34a" : "#22c55e")};
        }
      }
    }
  }
`;
