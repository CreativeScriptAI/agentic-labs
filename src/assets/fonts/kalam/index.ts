import localFont from "next/font/local";

export const kalam = localFont({
  src: [
    {
      path: "./Kalam-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Kalam-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Kalam-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kalam",
  display: "swap",
  preload: true,
  fallback: ["cursive", "system-ui", "arial"],
});

