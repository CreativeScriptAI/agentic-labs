import Link from "next/link";
import Image from "next/image";
import React from "react";

const AgentsRepoFooterSection = () => {
  return (
    <footer
      className=""
      style={{
        backgroundColor: "#F9F6F4",
        width: "calc(100% + 2rem)",
        marginLeft: "-1rem",
        marginRight: "-1rem",
      }}
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-10 pt-[60px] pb-10 sm:pb-[120px]">
        <div className="w-full max-w-[300px] mx-auto space-y-4 text-center">
          <div>
            <h4 className="font-mondwest text-[34px] leading-none text-blue-600 mb-4">Agentic AI Labs</h4>
            <p className="text-[14px] text-slate-600">The home of the AI Workforce</p>
          </div>

          <div className="flex items-center justify-center gap-6 text-slate-600">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex h-6 w-6 items-center justify-center">
              <Image src="/icons/conversational-ai/GithubLogo.svg" alt="GitHub" width={24} height={24} className="h-6 w-6" />
            </Link>
            <Link href="https://x.com/tryagentikai" target="_blank" rel="noopener noreferrer" aria-label="X" className="inline-flex h-6 w-6 items-center justify-center">
              <Image src="/icons/conversational-ai/XLogo.svg" alt="X" width={24} height={24} className="h-6 w-6" />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="inline-flex h-6 w-6 items-center justify-center">
              <Image src="/icons/conversational-ai/YoutubeLogo.svg" alt="YouTube" width={24} height={24} className="h-6 w-6" />
            </Link>
            <Link href="https://www.linkedin.com/company/agentic-ai-labs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-6 w-6 items-center justify-center">
              <Image src="/icons/conversational-ai/LinkedinLogo.svg" alt="LinkedIn" width={24} height={24} className="h-6 w-6" />
            </Link>
          </div>

          <p className="text-[14px] text-[#868A97] leading-6">
            Crafted by {" "}
            <Link
              href="https://creativescript.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              creativescript.org
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AgentsRepoFooterSection;
