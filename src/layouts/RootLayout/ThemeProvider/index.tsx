import { ThemeProvider as _ThemeProvider } from "@emotion/react";
import { Global } from "./Global";
import { createTheme } from "src/styles";
import { SchemeType } from "src/types";

type Props = {
  scheme: SchemeType;
  children?: React.ReactNode;
};

export const ThemeProvider = ({ scheme, children }: Props) => {
  // Ensure scheme defaults to light if undefined
  const theme = createTheme({ scheme: scheme || "light" });

  return (
    <_ThemeProvider theme={theme}>
      <Global />
      {children}
    </_ThemeProvider>
  );
};
