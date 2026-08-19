/*
 * Shared line-icon set for the Lead Generation Agency Singapore page.
 * One consistent style: 24x24 viewBox, stroke = currentColor, 1.6 weight,
 * no fill, round caps/joins, sharp geometry to match the design system.
 * Size + color come from the parent via className (e.g. "w-5 h-5 text-[#0A1128]").
 */

type IconName =
  | "target"
  | "zap"
  | "mail"
  | "chat"
  | "phone"
  | "clock"
  | "shield"
  | "layers"
  | "chart"
  | "search"
  | "repeat"
  | "check"
  | "x"
  | "arrow";

const PATHS: Record<IconName, React.ReactNode> = {
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  zap: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" />
      <path d="M3 6.5l9 6.5 9-6.5" />
    </>
  ),
  chat: <path d="M4 4h16v12H8l-4 4V4z" />,
  phone: (
    <path d="M6 3h3.5l1.8 4.5-2.6 1.7a11 11 0 0 0 4.9 4.9l1.7-2.6L20 15.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 4v16h16" />
      <path d="M7.5 14.5l4-4 3 3 5.5-6.5" />
      <path d="M16.5 7h3.5v3.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  repeat: (
    <>
      <path d="M17 3l4 4-4 4" />
      <path d="M21 7H8a4 4 0 0 0-4 4v1" />
      <path d="M7 21l-4-4 4-4" />
      <path d="M3 17h13a4 4 0 0 0 4-4v-1" />
    </>
  ),
  check: <path d="M5 12l4 4 10-10" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export const Icon = ({
  name,
  className = "w-5 h-5",
}: {
  name: IconName;
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    {PATHS[name]}
  </svg>
);

/* Square icon tile used on cards: keeps every icon in a consistent frame. */
export const IconTile = ({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) => (
  <span
    className={`inline-flex items-center justify-center w-10 h-10 flex-shrink-0 border border-[#e7e6e4] bg-white text-[#0A1128] ${className}`}
  >
    <Icon name={name} className="w-5 h-5" />
  </span>
);

export type { IconName };
