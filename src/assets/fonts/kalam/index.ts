import localFont from "next/font/local";

export const kalam = localFont({
  src: [
    {
      path: "./Kalam-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Kalam-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Kalam-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kalam",
  display: "swap",
  preload: true,
  fallback: ["cursive", "system-ui", "arial"],
});

