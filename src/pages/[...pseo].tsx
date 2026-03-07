import type { GetStaticPaths, GetStaticProps } from "next";
import type { NextPageWithLayout } from "src/types";
import ProgrammaticPageTemplate from "src/components/programmatic/ProgrammaticPageTemplate";
import {
  PROGRAMMATIC_SEO_PAGES,
  findProgrammaticPageByPath,
  ProgrammaticPageData,
} from "src/data/programmaticSeoPages";

type StaticProps = {
  page: ProgrammaticPageData;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PROGRAMMATIC_SEO_PAGES.map((page) => ({
    params: { pseo: page.pathSegments },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<StaticProps> = async (ctx) => {
  const slugParts = Array.isArray(ctx.params?.pseo)
    ? (ctx.params?.pseo as string[])
    : [];

  const page = findProgrammaticPageByPath(slugParts);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
  };
};

const ProgrammaticSeoPage: NextPageWithLayout<StaticProps> = ({
  page,
}: StaticProps) => {
  return <ProgrammaticPageTemplate page={page} />;
};

export default ProgrammaticSeoPage;
