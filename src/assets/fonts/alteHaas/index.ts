import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";

// Alte Haas Grotesk — Regular (400) only. All hierarchy comes from size +
// letter-spacing; never bold/semibold.
export const alteHaas = localFont({
  src: [
    {
      path: "./AlteHaasGroteskRegular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-alte-haas",
  display: "swap",
  preload: true,
  fallback: ["Helvetica Neue", "Arial", "system-ui", "sans-serif"],
});

// Geist Mono — Regular (400) only. ALL CAPS labels / eyebrows / metadata only.
export const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-geist-mono",
  display: "swap",
});
