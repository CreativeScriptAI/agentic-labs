import React from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────
 * BracketButton — [ LABEL ]
 * Alte Haas 15px, ALL CAPS, +2% tracking, radius 0, no shadow.
 * Fixed container; label always centered. Brackets sit inside and
 * move OUTWARD on hover (transform only, so the container never
 * resizes). Pressed = brackets compress inward.
 * ───────────────────────────────────────────────────────── */

type Props = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

export default function BracketButton({
  label,
  href,
  onClick,
  variant = "primary",
  external,
  className = "",
}: Props) {
  const base =
    "group relative inline-flex items-center justify-center font-alte text-[15px] uppercase tracking-[0.02em] h-[50px] px-[20px] select-none transition-colors duration-200";
  const skin =
    variant === "primary"
      ? "bg-[#FCCA07] text-[#0A1128] hover:bg-[#f0bd00]"
      : "border border-[#e7e6e4] text-[#0A1128] hover:bg-[#0A1128]/[0.04]";

  const inner = (
    <>
      <span className="inline-block transition-transform duration-200 ease-out translate-x-[5px] group-hover:translate-x-0 group-active:translate-x-[9px]">
        [
      </span>
      <span className="px-[10px] whitespace-nowrap">{label}</span>
      <span className="inline-block transition-transform duration-200 ease-out -translate-x-[5px] group-hover:translate-x-0 group-active:-translate-x-[9px]">
        ]
      </span>
    </>
  );

  const cls = `${base} ${skin} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={cls}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
