import Image from "next/image";

const WhatHappensNext = () => {
  const steps = [
    "Pick a slot on Calendly.",
    "Will discuss your idea or existing problem on call.",
    "Then, we'll map roadmap with feasibility, timeline, and next steps.",
  ];

  return (
    <section className="section">
      <h2 className="section_title text-slate-900">What Happens Next</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 w-full">
        <Image
          src="/images/contactus/howitworks.png"
          alt="How It Works Image"
          width={500}
          height={360}
          className="w-full h-auto max-w-[500px] order-1 md:order-2"
        />
        <div className="flex flex-col items-start order-2 md:order-1">
          <ul className="flex flex-col items-start gap-3 md:gap-8 mb-8">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="w-8 h-8 bg-[#0062FF] text-white rounded flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-8 bg-[#0062FF] opacity-30"></div>
                  )}
                </div>
                <p className="text-slate-800 font-sfpro text-base font-normal leading-normal m-0 flex-1">
                  {step}
                </p>
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              window.open(
                "https://calendly.com/creative-script/get-free-ai-clarity?month=2025-11",
                "_blank"
              );
            }}
            className="px-6 py-3 border border-solid border-[#0062FF] text-[#0062FF] rounded-lg font-sfpro text-sm font-medium transition-colors duration-200 flex items-center gap-2"
          >
            Book My Free Roadmap Call
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.6251 5V13.125C15.6251 13.2908 15.5593 13.4497 15.442 13.5669C15.3248 13.6842 15.1659 13.75 15.0001 13.75C14.8343 13.75 14.6754 13.6842 14.5582 13.5669C14.441 13.4497 14.3751 13.2908 14.3751 13.125V6.50859L5.44229 15.4422C5.32502 15.5595 5.16596 15.6253 5.0001 15.6253C4.83425 15.6253 4.67519 15.5595 4.55792 15.4422C4.44064 15.3249 4.37476 15.1659 4.37476 15C4.37476 14.8341 4.44064 14.6751 4.55792 14.5578L13.4915 5.625H6.8751C6.70934 5.625 6.55037 5.55915 6.43316 5.44194C6.31595 5.32473 6.2501 5.16576 6.2501 5C6.2501 4.83424 6.31595 4.67527 6.43316 4.55806C6.55037 4.44085 6.70934 4.375 6.8751 4.375H15.0001C15.1659 4.375 15.3248 4.44085 15.442 4.55806C15.5593 4.67527 15.6251 4.83424 15.6251 5Z"
                fill="#0062FF"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatHappensNext;
