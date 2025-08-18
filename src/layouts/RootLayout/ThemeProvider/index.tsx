import { ThemeProvider as _ThemeProvider } from "@emotion/react";
import { Global } from "./Global";
import { createTheme } from "src/styles";
import { SchemeType } from "src/types";
import React, { useEffect } from "react";

type Props = {
  scheme: SchemeType;
  children?: React.ReactNode;
};

export const ThemeProvider = ({ scheme, children }: Props) => {
  // Ensure scheme defaults to light if undefined
  const theme = createTheme({ scheme: scheme || "light" });

  // Also apply Tailwind dark mode class for converted components
  useEffect(() => {
    const validScheme =
      scheme === "dark" || scheme === "light" ? scheme : "light";

    if (validScheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    document.documentElement.style.colorScheme = validScheme;
  }, [scheme]);

  return (
    <_ThemeProvider theme={theme}>
      <Global />
      {children}
    </_ThemeProvider>
  );
};
