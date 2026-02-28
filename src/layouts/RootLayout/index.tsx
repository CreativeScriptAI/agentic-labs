import React, { ReactNode, useEffect } from "react";
import { ThemeProvider } from "./ThemeProvider";
import useScheme from "src/hooks/useScheme";
import Header from "./Header";
import Scripts from "src/layouts/RootLayout/Scripts";
import { useRouter } from "next/router";
// COMMENTED OUT: Language pages redirection disabled
// import { useAutoCountryDetection } from "src/hooks/useAutoCountryDetection";
// import useGtagEffect from "./useGtagEffect"
import * as Prism from "prismjs";
import "prismjs/components/prism-markup-templating.js";
import "prismjs/components/prism-markup.js";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-c.js";
import "prismjs/components/prism-cpp.js";
import "prismjs/components/prism-csharp.js";
import "prismjs/components/prism-docker.js";
import "prismjs/components/prism-java.js";
import "prismjs/components/prism-js-templates.js";
import "prismjs/components/prism-coffeescript.js";
import "prismjs/components/prism-diff.js";
import "prismjs/components/prism-git.js";
import "prismjs/components/prism-go.js";
import "prismjs/components/prism-kotlin.js";
import "prismjs/components/prism-graphql.js";
import "prismjs/components/prism-handlebars.js";
import "prismjs/components/prism-less.js";
import "prismjs/components/prism-makefile.js";
import "prismjs/components/prism-markdown.js";
import "prismjs/components/prism-objectivec.js";
import "prismjs/components/prism-ocaml.js";
import "prismjs/components/prism-python.js";
import "prismjs/components/prism-reason.js";
import "prismjs/components/prism-rust.js";
import "prismjs/components/prism-sass.js";
import "prismjs/components/prism-scss.js";
import "prismjs/components/prism-solidity.js";
import "prismjs/components/prism-sql.js";
import "prismjs/components/prism-stylus.js";
import "prismjs/components/prism-swift.js";
import "prismjs/components/prism-wasm.js";
import "prismjs/components/prism-yaml.js";
import "prismjs/components/prism-go.js";

type Props = {
  children: ReactNode;
  containerClassName?: string;
};

const RootLayout = ({
  children,
  containerClassName = "max-w-[1120px]",
}: Props) => {
  const [scheme] = useScheme();
  const router = useRouter();

  // COMMENTED OUT: Auto-detect and redirect to language/locale pages disabled
  // useAutoCountryDetection();

  // useGtagEffect()
  useEffect(() => {
    // Skip Prism on pages that don't have code blocks (e.g. thankyou) — saves CPU
    if (router.pathname === "/thankyou") return;
    Prism.highlightAll();
  }, [router.pathname]);

  // Pages that manage their own layout (no global nav needed)
  const NO_NAV_ROUTES = ["/thankyou"];
  const hideNav = NO_NAV_ROUTES.includes(router.pathname);

  return (
    <ThemeProvider scheme={scheme || "light"}>
      {/* <Scripts /> */}
      {!hideNav && <Header fullWidth={false} />}
      <main
        className={`mx-auto w-full overflow-x-hidden ${hideNav ? "p-0" : `${containerClassName} ${router.pathname === "/contact" ? "px-0" : "px-4"}`
          }`}
      >
        {children}
      </main>
    </ThemeProvider>
  );
};

export default RootLayout;
