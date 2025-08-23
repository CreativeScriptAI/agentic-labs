import localFont from "next/font/local";

export const mondwest = localFont({
  src: [
    {
      path: "./ppmondwest-regular.otf",
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
      path: "./ppneuebit-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neuebit",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});
