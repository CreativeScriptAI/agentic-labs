import localFont from "next/font/local";

export const mondwest = localFont({
  src: [
    {
      path: "./ppmondwest-regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mondwest",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const neuebit = localFont({
  src: [
    {
      path: "./ppneuebit-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neuebit",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});
