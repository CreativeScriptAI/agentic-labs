// True when on-load / looping animations should be disabled: the user prefers
// reduced motion, OR the viewport is mobile (where continuous animation was
// hurting Core Web Vitals, CLS and TBT). Returns false during SSR so the
// initial HTML is deterministic; components read it inside a mount effect and
// render their final static state when it is true.
export const motionOff = (): boolean => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(max-width: 767px)").matches
  );
};
