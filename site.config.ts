const CONFIG = {
  // profile setting (required)
  profile: {
    name: "agenticlabs",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "",
    bio: "We develop ai-agents",
    email: "contact@creativescript.org",
    linkedin: "",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: `agentic-ai-lab`,
      href: "https://github.com/genticlabs",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Agentic AI Labs",
    description: "welcome to Agentic AI Labs!",
    scheme: "light", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://agentic-ai-lab.vercel.app",
  since: 2025, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: "23fb34d6b4d480c6aa14e4326b1d1725",
    // TEMPORARY: Using the same page ID as posts to test
    agentPageId: "20eb34d6b4d480dfa876f581b273b88d", // Original: "20eb34d6b4d480dfa876f581b273b88d"
  },

  // // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId:
        process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "AW-17453709032",
    },
  },
  // googleSearchConsole: {
  //   enable: false,
  //   config: {
  //     siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  //   },
  // },
  // naverSearchAdvisor: {
  //   enable: false,
  //   config: {
  //     siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
  //   },
  // },
  // utterances: {
  //   enable: true,
  //   config: {
  //     repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
  //     "issue-term": "og:title",
  //     label: "💬 Utterances",
  //   },
  // },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: process.env.NODE_ENV === "development" ? 10 : 60, // 1 minute in dev, 10 minutes in prod
};

export { CONFIG };
