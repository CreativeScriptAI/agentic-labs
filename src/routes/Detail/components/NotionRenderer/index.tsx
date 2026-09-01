import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { ExtendedRecordMap } from "notion-types";
import useScheme from "src/hooks/useScheme";
import { FC } from "react";
import styled from "@emotion/styled";

// Performance: These CSS imports are necessary for NotionRenderer
// Note: Next.js automatically code-splits CSS per route, so blog-specific
// styles won't load on non-blog pages

// core styles shared by all of react-notion-x (required)
import "react-notion-x/src/styles.css";

// used for code syntax highlighting (optional)
import "prismjs/themes/prism-tomorrow.css";

// used for rendering equations (optional)
import "katex/dist/katex.min.css";

const _NotionRenderer = dynamic(
  () => import("react-notion-x").then((m) => m.NotionRenderer),
  { ssr: false }
);

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then(async (m) => m.Code)
);

const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
);
const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((m) => m.Pdf),
  {
    ssr: false,
  }
);
const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
);

const mapPageUrl = (id: string) => {
  return "https://www.notion.so/" + id.replace(/-/g, "");
};

type Props = {
  recordMap: ExtendedRecordMap;
};

const NotionRenderer: FC<Props> = ({ recordMap }) => {
  return (
    <StyledWrapper>
      <_NotionRenderer
        darkMode={false}
        recordMap={recordMap}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          Pdf,
          nextImage: Image,
          nextLink: Link,
        }}
        mapPageUrl={mapPageUrl}
      />
    </StyledWrapper>
  );
};

export default NotionRenderer;

const StyledWrapper = styled.div`
  .notion-collection-page-properties {
    display: none !important;
  }
  .notion-page {
    padding: 0;
    width: 100%;
  }
  .notion-list {
    width: 100%;
  }

  /* Brand typography for the article body (matches the site theme). */
  .notion-text {
    font-size: 1.05rem;
    line-height: 1.75;
    color: #1e293b;
    padding: 0.35rem 0;
  }
  .notion-h1,
  .notion-h2,
  .notion-h3 {
    font-family: var(--font-alte-haas), sans-serif;
    font-weight: 400;
    color: #0a1128;
    letter-spacing: -0.035em;
    line-height: 1.15;
  }
  .notion-h1 {
    font-size: 1.9rem;
    margin-top: 2.4rem;
  }
  .notion-h2 {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
  .notion-h3 {
    font-size: 1.22rem;
    margin-top: 1.6rem;
  }
  .notion-link,
  a.notion-link {
    color: #2563eb;
    border-bottom: 1px solid rgba(37, 99, 235, 0.35);
    opacity: 1;
    transition: border-color 0.15s ease;
  }
  .notion-link:hover {
    border-bottom-color: #2563eb;
  }
  .notion-quote {
    border-left: 3px solid #fcca07;
    background: rgba(252, 202, 7, 0.08);
    color: #0a1128;
    padding: 0.75rem 1.25rem;
    font-size: 1.05rem;
  }
  /* Tables: sharp, thin brand borders, cream header */
  .notion-simple-table,
  .notion-table {
    border: 1px solid #e7e6e4;
    border-radius: 0;
  }
  .notion-simple-table td {
    border: 1px solid #e7e6e4;
    padding: 0.6rem 0.9rem;
    font-size: 0.98rem;
  }
  .notion-simple-table-header td,
  .notion-simple-table tr:first-of-type td {
    background: #f9f6f4;
    font-weight: 500;
    color: #0a1128;
  }
  /* Code blocks: sharp corners + brand border */
  .notion-code,
  pre[class*="language-"] {
    border-radius: 0 !important;
    border: 1px solid #e7e6e4;
  }
  .notion-inline-code {
    color: #0a1128;
    background: #f0eeea;
    border-radius: 0;
    padding: 0.1rem 0.35rem;
  }
  .notion-hr {
    border-color: #e7e6e4;
    margin: 2rem 0;
  }
  .notion-asset-wrapper img,
  .notion-image {
    border-radius: 0;
  }
  .notion-list li {
    line-height: 1.7;
    color: #1e293b;
  }
`;
