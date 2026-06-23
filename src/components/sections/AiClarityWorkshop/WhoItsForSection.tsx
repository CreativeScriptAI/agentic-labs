import { CheckCircle2, X } from "lucide-react";
const WhoItsForSection = () => {
  const forList = ["Founders scaling without clarity", "Operators stuck in repetitive workflows", "Enterprise leaders exploring AI but unsure where to start", "Anyone serious about using AI practically, not theoretically"];
  const notForList = ["People chasing shiny tools or hype"];
  return <section className="py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-alte font-normal text-[#0A1128] mb-4 text-[28px] sm:text-[36px] md:text-[44px] tracking-[-0.04em]" style={{
          lineHeight: '1.2'
        }}>
            For people who don&apos;t have time but want{" "}
            <span className="relative inline-block">
              <span className="absolute bg-[#FCCA07] h-[26px] sm:h-[34px] md:h-[40px] left-[-4px] sm:left-[-5px] md:left-[-6px] top-[2px] sm:top-[3px] md:top-[4px] right-[-4px] sm:right-[-5px] md:right-[-6px] z-0"></span>
              <span className="relative z-10">results</span>
            </span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Who It's For */}
          <div className="rounded-none p-4 sm:p-6 md:p-8 border border-[#e7e6e4]" style={{
          backgroundColor: '#FFFFFF'
        }}>
            <h3 className="font-alte font-normal text-[#0A1128] mb-6 flex items-center gap-2 text-[20px] sm:text-[22px] md:text-[24px] tracking-[-0.04em]">
              <CheckCircle2 className="text-emerald-600" size={28} />
              Perfect for:
            </h3>
            <ul className="space-y-4">
              {forList.map((item, index) => <li key={index} className="flex items-start gap-3 font-alte font-normal text-[#0A1128]/80 tracking-[-0.04em]" style={{
              fontSize: '16px',
              lineHeight: '1.5'
            }}>
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>)}
            </ul>
          </div>

          {/* Who It's Not For */}
          <div className="rounded-none p-4 sm:p-6 md:p-8 border border-[#e7e6e4]" style={{
          backgroundColor: '#FFFFFF'
        }}>
            <h3 className="font-alte font-normal text-[#0A1128] mb-6 flex items-center gap-2 text-[20px] sm:text-[22px] md:text-[24px] tracking-[-0.04em]">
              <X className="text-red-500" size={28} />
              Not for:
            </h3>
            <ul className="space-y-4">
              {notForList.map((item, index) => <li key={index} className="flex items-start gap-3 font-alte font-normal text-[#0A1128]/60 tracking-[-0.04em]" style={{
              fontSize: '16px',
              lineHeight: '1.5'
            }}>
                  <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Emphasis Box */}
        <div className="mt-8 rounded-none p-6 text-center border border-[#e7e6e4]" style={{
        backgroundColor: '#FFFFFF'
      }}>
          <p className="font-alte font-normal text-[#0A1128] tracking-[-0.04em]" style={{
          fontSize: '18px',
          lineHeight: '1.6'
        }}>
            If you&apos;re ready to stop guessing and start{" "}
            <span className="font-alte font-normal text-blue-600">building with purpose</span>, this workshop is for you.
          </p>
        </div>
      </div>
    </section>;
};
export default WhoItsForSection;