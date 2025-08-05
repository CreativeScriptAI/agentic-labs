import { NextPageWithLayout } from "../types";
import MetaConfig from "src/components/MetaConfig";
import { CONFIG } from "site.config";

const HomePage: NextPageWithLayout = () => {
  const meta = {
    title: CONFIG.blog.title,
    description: CONFIG.blog.description,
    type: "website",
    url: CONFIG.link,
  };

  return (
    <>
      <MetaConfig {...meta} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        home page
      </div>
    </>
  );
};

export default HomePage;
