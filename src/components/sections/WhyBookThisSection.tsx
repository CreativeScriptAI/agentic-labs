import Image from "next/image";

const WhyBookThisSection = () => {
  const reasons = [
    "Walk away with clarity, not guesswork",
    "No sales pitch, just a roadmap you can act on",
    "100% free (value-first, zero risk)",
  ];

  return (
    <section className="section">
      <h2 className="section_title text-slate-900">Why Book This</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 w-full">
        <ul className="flex flex-col items-start gap-3 md:gap-8">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="block w-5 h-5 bg-[#0062FF] shrink-0 mt-1 "></div>
              <p className="text-slate-800 font-sfpro text-base font-normal leading-normal m-0 flex-1">
                {reason}
              </p>
            </li>
          ))}
        </ul>
        <Image
          src="/images/contactus/whybookthis.png"
          alt="Why Book This Image"
          width={360}
          height={292}
          className="w-full h-auto max-w-96"
        />
      </div>
    </section>
  );
};

export default WhyBookThisSection;
