"use client";

import { COMPARE } from "./copy";
import { FadeUp } from "./primitives";

const CompareTable = () => {
  return (
    <FadeUp>
      <div className="mt-8 hidden md:block overflow-hidden border border-[#e7e6e4] rounded-none">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="w-[22%] bg-[#F9F6F4] p-4 text-left font-geist text-[11px] uppercase tracking-[0.02em] text-slate-400 border-b border-[#e7e6e4]" />
              {COMPARE.columns.map((col) => (
                <th
                  key={col.name}
                  className={`p-4 text-left font-alte text-[15px] tracking-[-0.04em] border-b border-l border-[#e7e6e4] ${
                    col.accent
                      ? "bg-[#0A1128] text-white"
                      : "bg-[#F9F6F4] text-[#0A1128]"
                  }`}
                >
                  {col.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARE.rowLabels.map((label, ri) => (
              <tr key={label}>
                <th className="p-4 text-left font-geist text-[11px] uppercase tracking-[0.02em] text-slate-500 border-t border-[#e7e6e4] bg-white align-top">
                  {label}
                </th>
                {COMPARE.columns.map((col) => (
                  <td
                    key={col.name}
                    className={`p-4 font-alte text-[15px] tracking-[-0.04em] leading-[1.4] border-t border-l border-[#e7e6e4] align-top ${
                      col.accent
                        ? "bg-[#FCCA07]/15 text-[#0A1128]"
                        : "bg-white text-slate-600"
                    }`}
                  >
                    {col.rows[ri]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:hidden">
        {COMPARE.columns.map((col) => (
          <div
            key={col.name}
            className={`border rounded-none p-5 ${
              col.accent
                ? "border-[#0A1128] bg-[#0A1128]"
                : "border-[#e7e6e4] bg-white"
            }`}
          >
            <p
              className={`font-alte text-[16px] tracking-[-0.04em] mb-4 ${
                col.accent ? "text-white" : "text-[#0A1128]"
              }`}
            >
              {col.name}
            </p>
            <dl className="space-y-3">
              {COMPARE.rowLabels.map((label, ri) => (
                <div key={label}>
                  <dt
                    className={`font-geist text-[11px] uppercase tracking-[0.02em] mb-1 ${
                      col.accent ? "text-white/50" : "text-slate-400"
                    }`}
                  >
                    {label}
                  </dt>
                  <dd
                    className={`font-alte text-[15px] tracking-[-0.04em] leading-[1.4] ${
                      col.accent ? "text-white" : "text-slate-600"
                    }`}
                  >
                    {col.rows[ri]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </FadeUp>
  );
};

export default CompareTable;
