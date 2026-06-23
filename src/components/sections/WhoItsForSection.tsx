import Image from "next/image";
import BracketButton from "src/components/BracketButton";

const WhoItsForSection = () => {
  const whoItsForItems = [
    "<strong>Founders</strong> exploring AI-driven growth",
    "<strong>Agency operators</strong> scaling without adding headcount",
    "<strong>Business executives</strong> who want automation that actually works",
  ];

  return (
    <section className="section">
      <h2 className="section_title text-[#0A1128] font-alte font-normal leading-[1.2] tracking-[-0.04em]">Who It&apos;s For</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 w-full">
        <Image
          src="/images/contactus/whoisitfor.png"
          alt="Who It's For Image"
          width={360}
          height={292}
          className="w-full h-auto max-w-96"
        />

        <div className="flex flex-col items-start">
          <ul className="flex flex-col items-start gap-3 md:gap-8 mb-8">
            {whoItsForItems.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="block w-5 h-5 bg-[#0062FF] shrink-0 mt-1 "></div>
                <div
                  className="font-alte text-[15px] font-normal text-[#0A1128] leading-[1.5] tracking-[-0.04em] [&_strong]:font-normal"
                  dangerouslySetInnerHTML={{ __html: item }}
                ></div>
              </li>
            ))}
          </ul>

          <BracketButton
            label="Book My Free Roadmap Call"
            href="https://cal.com/ai-aditya/30min"
            variant="secondary"
            external
          />
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
