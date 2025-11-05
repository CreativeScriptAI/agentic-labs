import Image from "next/image";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Regular',_sans-serif] font-normal gap-[8px] items-start relative shrink-0 text-[24px] text-nowrap text-slate-800 w-[480px]">
      <p
        className="leading-[36px] relative shrink-0 whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Regular
      </p>
      <div
        className="leading-[36px] relative shrink-0 whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="mb-0">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p className="mb-0">abcdefghijklmnopqrstuvwxyz</p>
        <p>1234567890</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Medium',_sans-serif] font-[510] gap-[8px] items-start relative shrink-0 text-[24px] text-nowrap text-slate-800 w-[480px]">
      <p
        className="leading-[36px] relative shrink-0 whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Medium
      </p>
      <div
        className="leading-[36px] relative shrink-0 whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="mb-0">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p className="mb-0">abcdefghijklmnopqrstuvwxyz</p>
        <p>1234567890</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro:Semibold',_sans-serif] font-[590] gap-[8px] items-start relative shrink-0 text-[24px] text-nowrap text-slate-800 w-[480px]">
      <p
        className="leading-[36px] relative shrink-0 whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Semibold
      </p>
      <div
        className="leading-[36px] relative shrink-0 whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="mb-0">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p className="mb-0">abcdefghijklmnopqrstuvwxyz</p>
        <p>1234567890</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-['EB_Garamond:Medium',_sans-serif] font-medium gap-[8px] items-start relative shrink-0 text-[24px] text-nowrap text-slate-800 w-[480px]">
      <p className="leading-[36px] relative shrink-0 whitespace-pre">Medium</p>
      <div className="leading-[36px] relative shrink-0 whitespace-pre">
        <p className="mb-0">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p className="mb-0">abcdefghijklmnopqrstuvwxyz</p>
        <p>1234567890</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['EB_Garamond:Medium_Italic',_sans-serif] font-medium gap-[8px] italic items-start relative shrink-0 text-[24px] text-nowrap text-slate-800 w-[480px]">
      <p className="leading-[36px] relative shrink-0 whitespace-pre">
        Medium Italic
      </p>
      <div className="leading-[36px] relative shrink-0 whitespace-pre">
        <p className="mb-0">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p className="mb-0">abcdefghijklmnopqrstuvwxyz</p>
        <p>1234567890</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col font-['EB_Garamond:SemiBold',_sans-serif] font-semibold gap-[8px] items-start relative shrink-0 text-[24px] text-nowrap text-slate-800 w-[480px]">
      <p className="leading-[36px] relative shrink-0 whitespace-pre">
        Semibold
      </p>
      <div className="leading-[36px] relative shrink-0 whitespace-pre">
        <p className="mb-0">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p className="mb-0">abcdefghijklmnopqrstuvwxyz</p>
        <p>1234567890</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] italic items-start relative shrink-0 text-[24px] text-nowrap text-slate-800 w-[480px]">
      <p className="font-['EB_Garamond:Medium_Italic',_sans-serif] font-medium leading-[36px] relative shrink-0 whitespace-pre">
        Semibold Italic
      </p>
      <div className="font-['EB_Garamond:SemiBold_Italic',_sans-serif] font-semibold leading-[36px] relative shrink-0 whitespace-pre">
        <p className="mb-0">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
        <p className="mb-0">abcdefghijklmnopqrstuvwxyz</p>
        <p>1234567890</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <Frame6 />
      <Frame4 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[120px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] items-start left-[720px] top-[90px] w-[1080px]">
      <p
        className="font-['SF_Pro:Semibold',_sans-serif] font-[590] leading-[72px] relative shrink-0 text-[72px] text-nowrap text-slate-800 whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <span>{`SF Pro & `}</span>
        <span className="font-['EB_Garamond:SemiBold',_sans-serif] font-semibold">
          EB Garamond
        </span>
      </p>
      <Frame10 />
    </div>
  );
}

function Frame2147224597() {
  return (
    <div className="content-stretch flex flex-col gap-[17.486px] items-center relative shrink-0 w-[480px]">
      <div
        className="aspect-[1960/1338] relative rounded-[12px] shrink-0 w-full"
        data-name="image 9672134"
      >
        <Image
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full"
          src="/images/audit/1f406cecbbd0c6cc24f6b5cbd827762b5b805fb5.png"
          fill
        />
      </div>
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[27.369px] relative shrink-0 text-[18.246px] text-slate-600 w-full"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Reference heading style
      </p>
    </div>
  );
}

function Frame2147224596() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[103px] top-[90px] w-[480px]">
      <p className="font-['EB_Garamond:Regular',_sans-serif] font-normal leading-[72px] relative shrink-0 text-[56px] text-nowrap text-slate-800 tracking-[-2.24px] whitespace-pre">
        <span
          className="font-['SF_Pro:Regular',_sans-serif]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Brand
        </span>{" "}
        <span className="font-['EB_Garamond:SemiBold_Italic',_sans-serif] font-semibold italic">
          Typography
        </span>
      </p>
      <p
        className="font-['SF_Pro:Bold',_sans-serif] font-bold leading-[normal] relative shrink-0 text-[32px] text-slate-800 tracking-[-1.28px] w-[391px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Header
      </p>
      <p
        className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[36px] min-w-full relative shrink-0 text-[24px] text-slate-600 w-[min-content]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >{`Our heading uses the combination of SF Pro & EB Garamound. Last one to two words in a heading or words to be highlighted will be in EB Garamound in Itallics`}</p>
      <Frame2147224597 />
    </div>
  );
}

export default function BodyTypography() {
  return (
    <div
      className="bg-[#f5f7f8] relative size-full"
      data-name="Body typography"
    >
      <Frame11 />
      <Frame2147224596 />
    </div>
  );
}
