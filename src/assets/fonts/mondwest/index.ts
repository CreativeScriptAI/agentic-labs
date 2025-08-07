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
});
