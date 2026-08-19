"use client";

// Real brand marks for the six AI answer engines. Inline SVG (no external
// requests, CSP-safe). Marks are brand-accurate where a clean path is
// well-known (OpenAI, Google, Gemini) and brand-colored geometric glyphs
// otherwise (Claude, Perplexity, Grok); each always sits next to its wordmark,
// so the logo plus the name reads unambiguously.

type LogoProps = { className?: string };

const ChatGPTLogo = ({ className = "w-5 h-5" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="#0A1128" aria-hidden>
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.6069 1.4997-2.602-1.4997z" />
  </svg>
);

const GoogleAILogo = ({ className = "w-5 h-5" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden>
    <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
    <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z" />
    <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z" />
    <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
  </svg>
);

const PerplexityLogo = ({ className = "w-5 h-5" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#20808D" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3.2v17.6" />
    <path d="M12 7.2 5.2 3.6v7.2L12 7.2l6.8-3.6v7.2L12 7.2" />
    <path d="M5.2 10.8v6.8h3.4M18.8 10.8v6.8h-3.4" />
  </svg>
);

const GeminiLogo = ({ className = "w-5 h-5" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden>
    <defs>
      <linearGradient id="gemini-spark" x1="2" y1="20" x2="22" y2="4" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4285F4" />
        <stop offset="0.52" stopColor="#8A5CF6" />
        <stop offset="1" stopColor="#D96570" />
      </linearGradient>
    </defs>
    <path fill="url(#gemini-spark)" d="M12 0c.6 6 5.4 10.8 11.4 11.4v.6C17.4 12.6 12.6 17.4 12 23.4h-.6C10.8 17.4 6 12.6 0 12v-.6C6 10.8 10.8 6 11.4 0h.6z" />
  </svg>
);

const ClaudeLogo = ({ className = "w-5 h-5" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden>
    <g stroke="#D97757" strokeWidth="2.1" strokeLinecap="round">
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4M12 4.2 9.6 12l2.4 7.8M12 4.2l2.4 7.8L12 19.8M4.2 12l7.8-2.4 7.8 2.4M4.2 12l7.8 2.4 7.8-2.4" />
    </g>
  </svg>
);

const GrokLogo = ({ className = "w-5 h-5" }: LogoProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="#0A1128" aria-hidden>
    <path d="M6.5 3.5h3.2L18 15.1V3.5h2.4v17H17.2L8.9 8.9v11.6H6.5v-17z" />
    <path d="M3.6 20.5 13.2 8.2l1.6 1.9-9.6 12.3-1.6-1.9z" opacity="0.55" />
  </svg>
);

const LOGOS: Record<string, (p: LogoProps) => React.ReactElement> = {
  ChatGPT: ChatGPTLogo,
  "Google AI": GoogleAILogo,
  Perplexity: PerplexityLogo,
  Gemini: GeminiLogo,
  Claude: ClaudeLogo,
  Grok: GrokLogo,
};

export const EngineLogo = ({
  name,
  className = "w-5 h-5",
}: {
  name: string;
  className?: string;
}) => {
  const Logo = LOGOS[name];
  if (!Logo) {
    return (
      <span className="font-geist text-[11px] tracking-[0.04em] text-[#0A1128]">
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }
  return <Logo className={className} />;
};

// A logo on a light tile, sized to drop in where the old text mark sat.
export const EngineBadge = ({
  name,
  className = "",
  logoClassName = "w-5 h-5",
}: {
  name: string;
  className?: string;
  logoClassName?: string;
}) => (
  <span
    aria-hidden
    className={`flex items-center justify-center flex-shrink-0 bg-white border border-[#e7e6e4] ${className}`}
  >
    <EngineLogo name={name} className={logoClassName} />
  </span>
);

export default EngineLogo;
