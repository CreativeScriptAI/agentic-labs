import React from "react";

// Company marks for the "Any AI tool" cluster. Wordmark chips tinted in each
// brand's colour so they read as logos without risking inaccurate icon traces.
// Drop an official SVG into a `Mark` to upgrade any one of them later.

export type Tool = { name: string; color: string; Mark?: React.FC };

// OpenAI flower (iconic, reproducible) for the ChatGPT chip.
const OpenAIMark: React.FC = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
    <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-3.99 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A5.98 5.98 0 0 0 13.26 22a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zm-9.02 12.6a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.5 4.5zM3.6 18.3a4.47 4.47 0 0 1-.54-3.01l.14.08 4.78 2.76c.24.14.53.14.78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.9a4.5 4.5 0 0 1-6.14-1.6zM2.34 7.9a4.48 4.48 0 0 1 2.34-1.97v5.67a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79A4.5 4.5 0 0 1 2.34 7.9zm16.6 3.86L13.1 8.38l2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.78a4.5 4.5 0 0 1-.68 8.12v-5.67a.79.79 0 0 0-.39-.69zm2.01-3.03l-.14-.09-4.78-2.76a.78.78 0 0 0-.79 0L9.42 9.25V6.92a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.32 12.86l-2.02-1.17a.08.08 0 0 1-.04-.05V6.06a4.5 4.5 0 0 1 7.38-3.45l-.14.08L8.71 5.45a.79.79 0 0 0-.39.68zm1.1-2.36L12 8.99l2.6 1.5v3l-2.6 1.5-2.6-1.5v-3z" />
  </svg>
);

export const TOOLS: Tool[] = [
  { name: "ChatGPT", color: "#10A37F", Mark: OpenAIMark },
  { name: "Claude", color: "#D97757" },
  { name: "Vapi", color: "#12A594" },
  { name: "Retell", color: "#6366F1" },
  { name: "n8n", color: "#EA4B71" },
  { name: "Zapier", color: "#FF4F00" },
  { name: "Gamma", color: "#8B5CF6" },
  { name: "Mem0", color: "#0F172A" },
  { name: "GoHighLevel", color: "#2E7D8C" },
];

export const ToolChip: React.FC<{ tool: Tool }> = ({ tool }) => (
  <span
    className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-2.5 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
    style={{ color: tool.color }}
  >
    {tool.Mark ? (
      <tool.Mark />
    ) : (
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: tool.color }}
      />
    )}
    <span className="font-sfpro text-xs font-semibold">{tool.name}</span>
  </span>
);

// Client context — the "your data" half of the raw input.
export const CONTEXT: string[] = [
  "Your leads",
  "Customer history",
  "Your calendar",
];

export const ContextChip: React.FC<{ label: string }> = ({ label }) => (
  <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 border border-dashed border-slate-300 px-2.5 py-1.5 text-slate-500">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
    <span className="font-sfpro text-xs font-medium">{label}</span>
  </span>
);
