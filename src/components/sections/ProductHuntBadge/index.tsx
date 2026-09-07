/* Product Hunt launch badge. Pre-launch it shows the "find us on Product Hunt"
 * state and auto-updates to the live rank on launch day (15 Sep 2026). The
 * official Product Hunt embed SVG is loaded as a plain img (no next/image
 * domain config needed). post_id 1243414 = the AI Visibility Checker launch. */
const ProductHuntBadge = ({
  note = "We are launching on Product Hunt on 15 September. Follow to get notified.",
}: {
  note?: string;
}) => (
  <section className="bg-[#F9F6F4] py-10 sm:py-12 border-b border-[#e7e6e4]">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
      <p className="font-geist text-[12px] uppercase tracking-[0.02em] text-slate-500">
        {note}
      </p>
      <a
        href="https://www.producthunt.com/posts/ai-visibility-checker-7"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="AI Visibility Checker on Product Hunt"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1243414&theme=light"
          alt="AI Visibility Checker on Product Hunt"
          width={250}
          height={54}
          style={{ width: 250, height: 54 }}
          loading="lazy"
        />
      </a>
    </div>
  </section>
);

export default ProductHuntBadge;
