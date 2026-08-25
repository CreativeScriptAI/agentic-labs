"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { HOW } from "./copy";
import { motionOff } from "src/lib/motionOff";

const FOCAL_INDEX = 3;
const FOCAL_TAG = "The step most systems skip";

type Axis = "x" | "y";

type SegmentProps = {
  className: string;
  axis: Axis;
  origin: string;
  delay: number;
  duration: number;
  inView: boolean;
};

/** One drawn piece of the spine. Scales from 0 to 1 along a single axis. */
const Segment = ({
  className,
  axis,
  origin,
  delay,
  duration,
  inView,
}: SegmentProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const done = axis === "x" ? "scaleX(1)" : "scaleY(1)";
    if (motionOff()) {
      el.style.transform = done;
      return;
    }
    const controls = animate(0, 1, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.transform = axis === "x" ? `scaleX(${v})` : `scaleY(${v})`;
      },
    });
    return () => controls.stop();
  }, [inView, axis, delay, duration]);

  return (
    <div
      aria-hidden
      className={`absolute bg-[#0A1128] ${origin} ${className}`}
      style={{ transform: axis === "x" ? "scaleX(0)" : "scaleY(0)" }}
    />
  );
};

type NodeProps = {
  index: number;
  inView: boolean;
  compact?: boolean;
};

const StepNode = ({ index, inView, compact = false }: NodeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const step = HOW.steps[index];
  const focal = index === FOCAL_INDEX;

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    if (motionOff()) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }
    const delay = index * 0.1;
    const fade = animate(0, 1, {
      duration: 0.45,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.opacity = `${v}`;
      },
    });
    const slide = animate(10, 0, {
      duration: 0.45,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        el.style.transform = `translateY(${v}px)`;
      },
    });
    return () => {
      fade.stop();
      slide.stop();
    };
  }, [inView, index]);

  return (
    <div
      ref={ref}
      className="relative h-full"
      style={{ opacity: 0, transform: "translateY(10px)" }}
    >
      <span
        className={`relative z-10 inline-flex w-10 h-10 items-center justify-center rounded-none bg-[#FCCA07] font-geist text-[13px] uppercase tracking-[0.02em] text-[#0A1128] tabular-nums ${
          focal ? "outline outline-2 outline-offset-2 outline-[#FCCA07]" : ""
        }`}
      >
        {step.n}
      </span>

      <div
        className={`mt-4 h-[calc(100%-3.5rem)] rounded-none border p-4 ${
          focal
            ? "border-[#FCCA07] bg-white"
            : "border-[#e7e6e4] bg-[#F9F6F4]"
        }`}
      >
        {focal && (
          <span className="mb-2 inline-block rounded-none bg-[#FCCA07] px-1.5 py-0.5 font-geist text-[10px] uppercase tracking-[0.02em] text-[#0A1128]">
            {FOCAL_TAG}
          </span>
        )}
        <p
          className={`font-alte tracking-[-0.04em] leading-[1.25] text-[#0A1128] ${
            compact ? "text-[15px]" : "text-[16px] sm:text-[17px]"
          }`}
        >
          {step.title}
        </p>
        <p
          className={`mt-2 font-alte tracking-[-0.04em] leading-[1.5] text-slate-600 ${
            compact ? "text-[13px]" : "text-[14px] sm:text-[15px]"
          }`}
        >
          {step.body}
        </p>
      </div>
    </div>
  );
};

const BookingChainFlow = ({ className = "" }: { className?: string }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, margin: "-40px" });

  const rowOne = [0, 1, 2];
  const rowTwo = [3, 4, 5];

  return (
    <div
      ref={rootRef}
      className={className}
      aria-label="The six step chain between an enquiry arriving and a confirmed booking"
    >
      {/* Desktop: two rows of three, one continuous spine that wraps between them */}
      <div className="hidden lg:block">
        <div className="relative pb-16">
          {/* row one rail */}
          <div className="absolute left-5 right-0 top-5 h-px bg-[#e7e6e4]" />
          <Segment
            className="left-5 right-0 top-5 h-px"
            axis="x"
            origin="origin-left"
            delay={0}
            duration={0.6}
            inView={inView}
          />
          {/* down the right edge */}
          <div className="absolute right-0 top-5 bottom-8 w-px bg-[#e7e6e4]" />
          <Segment
            className="right-0 top-5 bottom-8 w-px"
            axis="y"
            origin="origin-top"
            delay={0.55}
            duration={0.18}
            inView={inView}
          />
          {/* back across, right to left */}
          <div className="absolute left-5 right-0 bottom-8 h-px bg-[#e7e6e4]" />
          <Segment
            className="left-5 right-0 bottom-8 h-px"
            axis="x"
            origin="origin-right"
            delay={0.72}
            duration={0.32}
            inView={inView}
          />
          {/* down into row two */}
          <div className="absolute left-5 bottom-0 h-8 w-px bg-[#e7e6e4]" />
          <Segment
            className="left-5 bottom-0 h-8 w-px"
            axis="y"
            origin="origin-top"
            delay={1.03}
            duration={0.18}
            inView={inView}
          />

          <div className="grid grid-cols-3 gap-6 items-stretch">
            {rowOne.map((i) => (
              <StepNode key={HOW.steps[i].n} index={i} inView={inView} compact />
            ))}
          </div>
        </div>

        <div className="relative">
          {/* stub coming down into the row two rail */}
          <div className="absolute left-5 top-0 h-5 w-px bg-[#e7e6e4]" />
          <Segment
            className="left-5 top-0 h-5 w-px"
            axis="y"
            origin="origin-top"
            delay={1.2}
            duration={0.12}
            inView={inView}
          />
          <div className="absolute left-5 right-0 top-5 h-px bg-[#e7e6e4]" />
          <Segment
            className="left-5 right-0 top-5 h-px"
            axis="x"
            origin="origin-left"
            delay={1.3}
            duration={0.6}
            inView={inView}
          />
          {/* terminal cap */}
          <div className="absolute right-0 top-[15px] h-[11px] w-[3px] bg-[#0A1128]" />

          <div className="grid grid-cols-3 gap-6 items-stretch">
            {rowTwo.map((i) => (
              <StepNode key={HOW.steps[i].n} index={i} inView={inView} compact />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile and tablet: a single vertical spine */}
      <div className="lg:hidden relative pl-14">
        <div className="absolute left-[19px] top-5 bottom-6 w-px bg-[#e7e6e4]" />
        <Segment
          className="left-[19px] top-5 bottom-6 w-px"
          axis="y"
          origin="origin-top"
          delay={0}
          duration={0.9}
          inView={inView}
        />

        <div className="space-y-8">
          {HOW.steps.map((step, i) => (
            <div key={step.n} className="relative">
              <div className="absolute -left-14 top-0">
                <StepBadgeSpacer />
              </div>
              <StepNode index={i} inView={inView} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/** Keeps the mobile badge column reserved without duplicating the badge markup. */
const StepBadgeSpacer = () => <span aria-hidden className="block w-10 h-10" />;

export default BookingChainFlow;
