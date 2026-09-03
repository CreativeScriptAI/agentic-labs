"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import BracketButton from "src/components/BracketButton";
import FooterSection from "src/components/sections/FooterSection";
import { Container, Eyebrow, FadeUp } from "src/components/sections/AiVisibilityChecker/primitives";

/* ─────────────────────────────────────────────────────────
 * Cost of Lost Leads Calculator
 * Client-side only. Computes revenue lost to slow lead
 * follow-up from the visitor's own numbers.
 * ───────────────────────────────────────────────────────── */

const money = (n: number) =>
  "S$" + Math.round(n).toLocaleString("en-SG");

/* Custom range slider styling: a visible rail, a yellow value fill, and a
 * navy-ringed thumb so the control never reads as a floating dot. */
const RANGE_CSS = `
.cc-range{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:9999px;outline:none;cursor:pointer;}
.cc-range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:9999px;background:#FCCA07;border:2px solid #0A1128;box-shadow:0 1px 3px rgba(10,17,40,.25);cursor:pointer;margin-top:-7px;}
.cc-range::-moz-range-thumb{width:20px;height:20px;border-radius:9999px;background:#FCCA07;border:2px solid #0A1128;box-shadow:0 1px 3px rgba(10,17,40,.25);cursor:pointer;}
.cc-range::-webkit-slider-runnable-track{height:6px;border-radius:9999px;}
.cc-range::-moz-range-track{height:6px;border-radius:9999px;}
.cc-range:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 4px rgba(252,202,7,.35);}
.cc-range:focus-visible::-moz-range-thumb{box-shadow:0 0 0 4px rgba(252,202,7,.35);}
`;

const Range = ({
  value,
  min,
  max,
  step,
  ariaLabel,
  onChange,
}: {
  value: number;
  min: number;
  max: number;
  step: number;
  ariaLabel: string;
  onChange: (n: number) => void;
}) => {
  const pct = max > min ? ((value - min) / (max - min)) * 100 : 0;
  const clamped = Math.max(0, Math.min(100, pct));
  return (
    <input
      type="range"
      aria-label={ariaLabel}
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="cc-range"
      style={{
        background: `linear-gradient(to right, #FCCA07 0%, #FCCA07 ${clamped}%, #e7e6e4 ${clamped}%, #e7e6e4 100%)`,
      }}
    />
  );
};

type FieldProps = {
  id: string;
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (n: number) => void;
};

const Field = ({
  id,
  label,
  hint,
  value,
  min,
  max,
  step,
  prefix,
  suffix,
  onChange,
}: FieldProps) => {
  const clamp = (n: number) => {
    if (Number.isNaN(n)) return min;
    if (n < min) return min;
    if (n > max) return max;
    return n;
  };
  return (
    <div className="border border-[#e7e6e4] bg-white p-5">
      <label
        htmlFor={id}
        className="font-geist text-[12px] uppercase tracking-[0.02em] text-slate-500 block mb-1"
      >
        {label}
      </label>
      <p className="font-geist text-[12px] text-slate-400 mb-3 leading-[1.4]">
        {hint}
      </p>
      <div className="flex items-center border border-[#e7e6e4] bg-[#F9F6F4] focus-within:border-[#0A1128] transition-colors">
        {prefix ? (
          <span className="font-alte text-[15px] text-slate-500 pl-3 pr-1 select-none">
            {prefix}
          </span>
        ) : null}
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(clamp(Number(e.target.value)))}
          className="w-full bg-transparent font-alte text-[18px] text-[#0A1128] tracking-[-0.04em] py-2.5 px-3 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        {suffix ? (
          <span className="font-alte text-[15px] text-slate-500 pr-3 pl-1 select-none">
            {suffix}
          </span>
        ) : null}
      </div>
      <div className="mt-4">
        <Range
          value={value}
          min={min}
          max={max}
          step={step}
          ariaLabel={`${label} slider`}
          onChange={(n) => onChange(clamp(n))}
        />
        <div className="flex justify-between font-geist text-[11px] text-slate-400 mt-2 tabular-nums">
          <span>{prefix ?? ""}{min.toLocaleString("en-SG")}{suffix ?? ""}</span>
          <span>{prefix ?? ""}{max.toLocaleString("en-SG")}{suffix ?? ""}</span>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({
  value,
  label,
  emphasis = false,
}: {
  value: string;
  label: string;
  emphasis?: boolean;
}) => (
  <div
    className={`border p-6 ${
      emphasis
        ? "border-[#FCCA07] bg-[#FCCA07]/10"
        : "border-[#e7e6e4] bg-white"
    }`}
  >
    <div className="font-alte text-[24px] sm:text-[30px] text-[#0A1128] tracking-[-0.04em] leading-[1.1] tabular-nums [overflow-wrap:anywhere]">
      {value}
    </div>
    <p className="font-geist text-[12px] uppercase tracking-[0.02em] text-slate-500 mt-3 leading-[1.4]">
      {label}
    </p>
  </div>
);

const Calculator = () => {
  const [leads, setLeads] = useState(100);
  const [dealValue, setDealValue] = useState(2000);
  const [closeRate, setCloseRate] = useState(20);
  const [fastReplyPct, setFastReplyPct] = useState(30);
  // Adjustable, clearly-labelled assumption: how well a slowly-replied lead
  // converts compared with one replied to within the hour, as a percentage
  // of the fast rate. Defaulted modestly (slow leads convert at half).
  const [slowConversionPct, setSlowConversionPct] = useState(50);

  const results = useMemo(() => {
    const fastCloseRate = closeRate / 100;
    const slowFactor = slowConversionPct / 100;
    const fastCount = leads * (fastReplyPct / 100);
    const slowCount = leads - fastCount;

    const currentDeals =
      fastCount * fastCloseRate + slowCount * fastCloseRate * slowFactor;
    const potentialDeals = leads * fastCloseRate;
    const extraDeals = potentialDeals - currentDeals;

    const extraRevenueMonth = extraDeals * dealValue;
    const extraRevenueYear = extraRevenueMonth * 12;

    return {
      slowCount,
      extraDeals,
      extraRevenueMonth,
      extraRevenueYear,
    };
  }, [leads, dealValue, closeRate, fastReplyPct, slowConversionPct]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6">
      {/* Inputs */}
      <div className="space-y-4">
        <Field
          id="leads"
          label="Enquiries or leads per month"
          hint="Every new enquiry, call, form fill or message you get in a month."
          value={leads}
          min={0}
          max={2000}
          step={5}
          onChange={setLeads}
        />
        <Field
          id="dealValue"
          label="Average deal or job value"
          hint="What one won customer is worth on average, in Singapore dollars."
          value={dealValue}
          min={0}
          max={100000}
          step={100}
          prefix="S$"
          onChange={setDealValue}
        />
        <Field
          id="closeRate"
          label="Close rate on leads you reach"
          hint="Of the leads you actually get to and speak with, what percent become customers."
          value={closeRate}
          min={0}
          max={100}
          step={1}
          suffix="%"
          onChange={setCloseRate}
        />
        <Field
          id="fastReplyPct"
          label="Leads you reply to within an hour"
          hint="Of all your leads today, what percent get a reply inside the first hour."
          value={fastReplyPct}
          min={0}
          max={100}
          step={1}
          suffix="%"
          onChange={setFastReplyPct}
        />
      </div>

      {/* Outputs */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <StatCard
            value={money(results.extraRevenueYear)}
            label="Extra revenue per year if you replied fast to every lead"
            emphasis
          />
          <StatCard
            value={money(results.extraRevenueMonth)}
            label="Extra revenue per month"
          />
          <StatCard
            value={Math.round(results.slowCount).toLocaleString("en-SG")}
            label="Leads a month you do not reply to fast today"
          />
          <StatCard
            value={
              results.extraDeals >= 10
                ? Math.round(results.extraDeals).toLocaleString("en-SG")
                : results.extraDeals.toFixed(1)
            }
            label="Extra deals a month winnable with fast follow-up"
          />
        </div>

        {/* Assumption control */}
        <div className="border border-[#e7e6e4] bg-white p-5">
          <label
            htmlFor="slowFactor"
            className="font-geist text-[12px] uppercase tracking-[0.02em] text-slate-500 block mb-1"
          >
            The assumption you can adjust
          </label>
          <p className="font-geist text-[12px] text-slate-400 mb-3 leading-[1.4]">
            A lead replied to slowly still converts at{" "}
            <span className="text-[#0A1128] font-semibold">
              {slowConversionPct}%
            </span>{" "}
            of the rate of one replied to within the hour. Drag to match your
            own experience. Lower means slow replies cost you more.
          </p>
          <Range
            value={slowConversionPct}
            min={0}
            max={100}
            step={5}
            ariaLabel="Slow-reply conversion factor slider"
            onChange={setSlowConversionPct}
          />
          <div className="flex justify-between font-geist text-[11px] text-slate-400 mt-2">
            <span>0% (slow leads never convert)</span>
            <span>100% (speed makes no difference)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => (
  <section className="bg-[#F9F6F4] pt-16 pb-10 sm:pt-24 sm:pb-14" id="calculator">
    <Container size="lg">
      <FadeUp>
        <Eyebrow text="FREE TOOL" />
        <h1 className="font-alte text-[32px] sm:text-[46px] text-[#0A1128] tracking-[-0.04em] leading-[1.08] max-w-3xl">
          What are slow lead replies costing you?
        </h1>
        <p className="font-alte text-[17px] sm:text-[19px] text-slate-600 tracking-[-0.04em] leading-[1.5] mt-5 max-w-2xl">
          Put in your own numbers and see, live, the revenue your Singapore
          business is leaving on the table every month because leads wait too
          long for a reply.
        </p>
      </FadeUp>
    </Container>
  </section>
);

const CalculatorSection = () => (
  <section className="bg-[#F9F6F4] pb-16 sm:pb-24">
    <Container size="lg">
      <Calculator />
    </Container>
  </section>
);

const HowCalculated = () => (
  <section className="bg-white py-16 sm:py-24">
    <Container size="sm">
      <FadeUp>
        <Eyebrow text="HOW THIS IS CALCULATED" />
        <div className="space-y-6">
          <p className="font-alte text-[17px] sm:text-[19px] text-[#0A1128] tracking-[-0.04em] leading-[1.5]">
            The maths is deliberately simple, and you can see every input. We
            split your leads into the ones you reply to within the hour and the
            ones you do not. The fast ones close at the rate you gave us. The
            slow ones close at a fraction of that rate, which is the one
            assumption you control on the slider.
          </p>
          <p className="font-alte text-[17px] sm:text-[19px] text-[#0A1128] tracking-[-0.04em] leading-[1.5]">
            The gap between what those slow leads bring in today and what they
            would bring in if they were all replied to fast is the extra deals,
            and multiplying by your average deal value gives the revenue per
            month and per year.
          </p>
          <p className="font-alte text-[16px] text-slate-600 tracking-[-0.04em] leading-[1.5]">
            An honest note on the assumption. The idea that replying faster wins
            more of your leads is directional, and the best known write up is the
            Harvard Business Review piece &quot;The Short Life of Online Sales
            Leads&quot; from 2011. That is US business to business data, not a
            Singapore benchmark, and it is not a promise about your business. The
            conversion factor here is an estimate you set yourself, which is why
            it is a slider and not a fixed number we picked for you.
          </p>
        </div>
      </FadeUp>
    </Container>
  </section>
);

const WhatToDo = () => (
  <section className="bg-[#F9F6F4] py-16 sm:py-24">
    <Container size="sm">
      <FadeUp>
        <Eyebrow text="WHAT TO DO ABOUT IT" />
        <div className="space-y-6 mb-8">
          <p className="font-alte text-[17px] sm:text-[19px] text-[#0A1128] tracking-[-0.04em] leading-[1.5]">
            The number above is not fixed. The reason most businesses reply
            slowly is not that they do not care, it is that a human cannot watch
            every channel at every hour. The fix is to close the gap between a
            lead arriving and a lead getting a real reply, the thing we call{" "}
            <Link
              href="/glossary/what-is-speed-to-lead/"
              className="underline decoration-[#FCCA07] decoration-2 underline-offset-2 hover:text-blue-600"
            >
              speed to lead
            </Link>
            .
          </p>
          <p className="font-alte text-[17px] sm:text-[19px] text-[#0A1128] tracking-[-0.04em] leading-[1.5]">
            You can do this with{" "}
            <Link
              href="/follow-up-automation/"
              className="underline decoration-[#FCCA07] decoration-2 underline-offset-2 hover:text-blue-600"
            >
              follow up automation
            </Link>{" "}
            that replies to every enquiry in seconds, qualifies it, and books
            the meeting before your competitor has opened their inbox. If you
            also need more of the right leads coming in first, that is where a{" "}
            <Link
              href="/lead-generation-agency-singapore/"
              className="underline decoration-[#FCCA07] decoration-2 underline-offset-2 hover:text-blue-600"
            >
              lead generation agency in Singapore
            </Link>{" "}
            fits, so the leads and the fast follow up work as one system rather
            than two.
          </p>
          <p className="font-alte text-[16px] text-slate-600 tracking-[-0.04em] leading-[1.5]">
            We are a forward deployed engineering team. We do not hand you a tool
            and wish you luck. We build the follow up into your own stack and
            stand it up for you.
          </p>
        </div>
        <BracketButton
          label="Book an AI clarity workshop"
          href="/ai-clarity-workshop/"
        />
        <p className="font-alte text-[13px] text-slate-500 tracking-[-0.04em] mt-3">
          A working session on where fast follow up pays off first for you.
        </p>
      </FadeUp>
    </Container>
  </section>
);

const CostCalculatorPage = () => (
  <div className="min-h-screen bg-[#F9F6F4] [&_*]:box-border">
    <style dangerouslySetInnerHTML={{ __html: RANGE_CSS }} />
    <Hero />
    <CalculatorSection />
    <HowCalculated />
    <WhatToDo />
    <FooterSection />
  </div>
);

export default CostCalculatorPage;
