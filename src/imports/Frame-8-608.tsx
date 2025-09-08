import imgImg from "figma:asset/4c8e7e643f9f13c1c81387fbc2ab0c99f4ab1020.png";
import { imgFrame, imgFrame1, imgFrame2, imgFrame3, imgFrame4, imgFrame5, imgFrame6, imgFrame7, imgFrame8, imgFrame9, imgFrame10, imgFrame11, imgFrame12, imgFrame13 } from "./svg-8fbof";

function Img() {
  return (
    <div className="absolute bg-center bg-cover bg-no-repeat left-0 rounded-[16px] size-20 top-0" data-name="img" style={{ backgroundImage: `url('${imgImg}')` }}>
      <div aria-hidden="true" className="absolute border-2 border-blue-500 border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-3 relative shrink-0 w-[10.5px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame} />
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute content-stretch flex h-3 items-center justify-center left-0 top-[1.5px] w-[10.5px]" data-name="svg">
      <Frame />
    </div>
  );
}

function I() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-4 left-[6.75px] top-1 w-[10.5px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg />
    </div>
  );
}

function Div() {
  return (
    <div className="absolute bg-emerald-500 left-[60px] rounded-[9999px] size-6 top-[60px]" data-name="div">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <I />
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] left-0 size-20 top-0.5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Img />
      <Div />
    </div>
  );
}

function Span() {
  return (
    <div className="absolute bg-[rgba(16,185,129,0.1)] h-6 left-0 rounded-[9999px] top-0 w-[114.188px]" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-[17px] leading-[0] left-3 not-italic text-[12px] text-emerald-500 top-[3px] w-24">
        <p className="leading-[normal]">Verified Tourist</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-[60px] w-[212px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Span />
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[84px] left-24 top-0 w-[212px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] h-7 leading-[0] left-0 not-italic text-[20px] text-gray-900 top-0 w-[148px]">
        <p className="leading-[28px]">Rajesh Kumar</p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-5 leading-[0] left-0 not-italic text-[14px] text-gray-500 top-8 w-[175px]">
        <p className="leading-[20px]">Tourist ID: TID-2024-789</p>
      </div>
      <Div2 />
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[84px] left-[25px] top-[25px] w-[308px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div1 />
      <Div3 />
    </div>
  );
}

function Div5() {
  return (
    <div className="absolute bg-white h-[134px] left-0 rounded-[16px] top-0 w-[358px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Div4 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[134px] left-4 top-0 w-[358px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15.75px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame1} />
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-0 top-[3.25px] w-[15.75px]" data-name="svg">
      <Frame1 />
    </div>
  );
}

function I1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[25px] left-2 top-[9px] w-[15.75px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg1 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(59,130,246,0.1)] h-11 left-[276.25px] rounded-[12px] top-0 w-[31.75px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <I1 />
    </div>
  );
}

function Div6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[25px] top-[25px] w-[308px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] h-7 leading-[0] left-0 not-italic text-[18px] text-gray-900 top-2 w-[132px]">
        <p className="leading-[28px]">Digital ID Card</p>
      </div>
      <Button />
    </div>
  );
}

function Div7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-[244px] rounded-[9999px] size-32 top-[-64px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-[-48px] rounded-[9999px] size-24 top-28" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-12 left-0 top-0 w-[126.188px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-5 leading-[0] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-0 w-[70px]">
        <p className="leading-[20px]">Tourist ID</p>
      </div>
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] h-7 leading-[0] left-0 not-italic text-[18px] text-white top-5 w-[127px]">
        <p className="leading-[28px]">TID-2024-789</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15.75px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame2} />
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-0 top-[4.25px] w-[15.75px]" data-name="svg">
      <Frame2 />
    </div>
  );
}

function I2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[16.13px] top-2.5 w-[15.75px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg2 />
    </div>
  );
}

function Div10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] left-[212px] rounded-[12px] size-12 top-0" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <I2 />
    </div>
  );
}

function Div11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-12 left-0 top-0 w-[260px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div9 />
      <Div10 />
    </div>
  );
}

function Div12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-10 left-0 top-0 w-[122px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[17px] leading-[0] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.8)] top-0 w-[42px]">
        <p className="leading-[16px]">Name</p>
      </div>
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-6 leading-[0] left-0 not-italic text-[16px] text-white top-4 w-[118px]">
        <p className="leading-[24px]">Rajesh Kumar</p>
      </div>
    </div>
  );
}

function Div13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-10 left-[138px] top-0 w-[122px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[17px] leading-[0] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.8)] top-0 w-[66px]">
        <p className="leading-[16px]">Valid Until</p>
      </div>
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-6 leading-[0] left-0 not-italic text-[16px] text-white top-4 w-20">
        <p className="leading-[24px]">Dec 2024</p>
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-10 left-0 top-[72px] w-[260px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div12 />
      <Div13 />
    </div>
  );
}

function Div15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-28 left-6 top-6 w-[260px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div11 />
      <Div14 />
    </div>
  );
}

function Div16() {
  return (
    <div className="absolute bg-gradient-to-r from-[#3b82f6] h-40 left-[25px] rounded-[16px] to-[#2563eb] top-[85px] w-[308px]" data-name="div">
      <div className="h-40 overflow-clip relative w-[308px]">
        <Div7 />
        <Div8 />
        <Div15 />
      </div>
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Div17() {
  return (
    <div className="absolute bg-white h-[270px] left-0 rounded-[16px] top-0 w-[358px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Div6 />
      <Div16 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[270px] left-4 top-[158px] w-[358px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div17 />
    </div>
  );
}

function H3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[25px] top-[25px] w-[308px]" data-name="h3">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] h-7 leading-[0] left-0 not-italic text-[18px] text-gray-900 top-px w-[210px]">
        <p className="leading-[normal]">Language Preferences</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame3} />
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-4 top-[3px]" data-name="svg">
      <Frame3 />
    </div>
  );
}

function I3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-0 w-4" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg3 />
    </div>
  );
}

function Div18() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[17px] top-[17px] w-[85px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I3 />
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-6 leading-[0] left-7 not-italic text-[16px] text-gray-900 top-0 w-[57px]">
        <p className="leading-[24px]">English</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-4 relative shrink-0 w-3.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame4} />
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute content-stretch flex h-4 items-center justify-center left-0 top-[3px] w-3.5" data-name="svg">
      <Frame4 />
    </div>
  );
}

function I4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[277px] top-[17px] w-3.5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg4 />
    </div>
  );
}

function Div19() {
  return (
    <div className="absolute bg-[rgba(59,130,246,0.05)] h-[58px] left-0 rounded-[12px] top-0 w-[308px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-[rgba(59,130,246,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Div18 />
      <I4 />
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-4 top-4 w-[89.641px]" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-6 leading-[0] left-[45px] not-italic text-[16px] text-center text-gray-700 top-0 translate-x-[-50%] w-[90px]">
        <p className="leading-[normal]">हिंदी (Hindi)</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-4 relative shrink-0 w-2.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame5} />
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute content-stretch flex h-4 items-center justify-center left-0 top-[3px] w-2.5" data-name="svg">
      <Frame5 />
    </div>
  );
}

function I5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[282px] top-4 w-2.5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg5 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-gray-50 h-14 left-0 rounded-[12px] top-[70px] w-[308px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Span1 />
      <I5 />
    </div>
  );
}

function Span2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-4 top-4 w-[105.844px]" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Regular',_'Noto_Sans_Bengali:Regular',_sans-serif] h-6 leading-[0] left-[59.5px] text-[16px] text-center text-gray-700 top-0 translate-x-[-50%] w-[119px]" style={{ fontVariationSettings: "'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">বাংলা (Bengali)</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-4 relative shrink-0 w-2.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame5} />
    </div>
  );
}

function Svg6() {
  return (
    <div className="absolute content-stretch flex h-4 items-center justify-center left-0 top-[3px] w-2.5" data-name="svg">
      <Frame6 />
    </div>
  );
}

function I6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[282px] top-4 w-2.5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg6 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-gray-50 h-14 left-0 rounded-[12px] top-[138px] w-[308px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Span2 />
      <I6 />
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-4 top-4 w-[99.453px]" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Regular',_'Noto_Sans_Tamil:Regular',_sans-serif] h-6 leading-[0] left-[51.5px] text-[16px] text-center text-gray-700 top-0 translate-x-[-50%] w-[103px]" style={{ fontVariationSettings: "'wdth' 100, 'wght' 400" }}>
        <p className="leading-[normal]">தமிழ் (Tamil)</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-4 relative shrink-0 w-2.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame5} />
    </div>
  );
}

function Svg7() {
  return (
    <div className="absolute content-stretch flex h-4 items-center justify-center left-0 top-[3px] w-2.5" data-name="svg">
      <Frame7 />
    </div>
  );
}

function I7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[282px] top-4 w-2.5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg7 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-gray-50 h-14 left-0 rounded-[12px] top-[206px] w-[308px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Span3 />
      <I7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-4 relative shrink-0 w-3.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame6} />
    </div>
  );
}

function Svg8() {
  return (
    <div className="absolute content-stretch flex h-4 items-center justify-center left-0 top-[3px] w-3.5" data-name="svg">
      <Frame8 />
    </div>
  );
}

function I8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[23px] left-[64.98px] top-3 w-3.5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg8 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-12 left-0 top-[274px] w-[308px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I8 />
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-6 leading-[0] left-[167.98px] not-italic text-[16px] text-blue-500 text-center top-3 translate-x-[-50%] w-[162px]">
        <p className="leading-[normal]">View All Languages</p>
      </div>
    </div>
  );
}

function Div20() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[322px] left-[25px] top-[69px] w-[308px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div19 />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Div21() {
  return (
    <div className="absolute bg-white h-[416px] left-0 rounded-[16px] top-0 w-[358px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <H3 />
      <Div20 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[416px] left-4 top-[452px] w-[358px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div21 />
    </div>
  );
}

function H4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[25px] top-[25px] w-[308px]" data-name="h3">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] h-7 leading-[0] left-0 not-italic text-[18px] text-gray-900 top-px w-[121px]">
        <p className="leading-[normal]">Accessibility</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-4 relative shrink-0 w-3" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame7} />
    </div>
  );
}

function Svg9() {
  return (
    <div className="absolute content-stretch flex h-4 items-center justify-center left-0 top-[3px] w-3" data-name="svg">
      <Frame9 />
    </div>
  );
}

function I9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-3.5 top-2 w-3" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg9 />
    </div>
  );
}

function Div22() {
  return (
    <div className="absolute bg-[rgba(16,185,129,0.1)] left-0 rounded-[12px] size-10 top-0.5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <I9 />
    </div>
  );
}

function Div23() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[52px] top-0 w-[158.719px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-6 leading-[0] left-0 not-italic text-[16px] text-gray-900 top-0 w-[151px]">
        <p className="leading-[24px]">Voice Commands</p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-5 leading-[0] left-0 not-italic text-[14px] text-gray-500 top-6 w-[159px]">
        <p className="leading-[20px]">Control app with voice</p>
      </div>
    </div>
  );
}

function Div24() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-0 top-0 w-[210.719px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div22 />
      <Div23 />
    </div>
  );
}

function After() {
  return (
    <div className="absolute bg-white left-[26px] rounded-[9999px] size-5 top-0.5" data-name="::after">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div25() {
  return (
    <div className="absolute bg-emerald-500 h-6 left-0 rounded-[9999px] top-0 w-12" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <After />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[260px] top-2.5 w-12" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div25 />
    </div>
  );
}

function Div26() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-0 top-0 w-[308px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div24 />
      <Label />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-4 relative shrink-0 w-5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame8} />
    </div>
  );
}

function Svg10() {
  return (
    <div className="absolute content-stretch flex h-4 items-center justify-center left-0 top-[3px] w-5" data-name="svg">
      <Frame10 />
    </div>
  );
}

function I10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-2.5 top-2 w-5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg10 />
    </div>
  );
}

function Div27() {
  return (
    <div className="absolute bg-[rgba(59,130,246,0.1)] left-0 rounded-[12px] size-10 top-0.5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <I10 />
    </div>
  );
}

function Div28() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[52px] top-0 w-[139.016px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-6 leading-[0] left-0 not-italic text-[16px] text-gray-900 top-0 w-[133px]">
        <p className="leading-[24px]">Text-to-Speech</p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-5 leading-[0] left-0 not-italic text-[14px] text-gray-500 top-6 w-[140px]">
        <p className="leading-[20px]">Read content aloud</p>
      </div>
    </div>
  );
}

function Div29() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-0 top-0 w-[191.016px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div27 />
      <Div28 />
    </div>
  );
}

function After1() {
  return (
    <div className="absolute bg-white left-0.5 rounded-[9999px] size-5 top-0.5" data-name="::after">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div30() {
  return (
    <div className="absolute bg-gray-200 h-6 left-0 rounded-[9999px] top-0 w-12" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <After1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[260px] top-2.5 w-12" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div30 />
    </div>
  );
}

function Div31() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-0 top-[60px] w-[308px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div29 />
      <Label1 />
    </div>
  );
}

function Div32() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[104px] left-[25px] top-[69px] w-[308px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div26 />
      <Div31 />
    </div>
  );
}

function Div33() {
  return (
    <div className="absolute bg-white h-[198px] left-0 rounded-[16px] top-0 w-[358px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <H4 />
      <Div32 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[198px] left-4 top-[892px] w-[358px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div33 />
    </div>
  );
}

function H5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[25px] top-[25px] w-[308px]" data-name="h3">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] h-7 leading-[0] left-0 not-italic text-[18px] text-gray-900 top-px w-[171px]">
        <p className="leading-[normal]">{`Privacy & Security`}</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-4 relative shrink-0 w-3" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame9} />
    </div>
  );
}

function Svg11() {
  return (
    <div className="absolute content-stretch flex h-4 items-center justify-center left-0 top-[3px] w-3" data-name="svg">
      <Frame11 />
    </div>
  );
}

function I11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-3.5 top-2 w-3" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg11 />
    </div>
  );
}

function Div34() {
  return (
    <div className="absolute bg-orange-100 left-0 rounded-[12px] size-10 top-0.5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <I11 />
    </div>
  );
}

function Div35() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[52px] top-0 w-[171.984px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-6 leading-[0] left-0 not-italic text-[16px] text-gray-900 top-0 w-[161px]">
        <p className="leading-[24px]">Real-time Tracking</p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-5 leading-[0] left-0 not-italic text-[14px] text-gray-500 top-6 w-[172px]">
        <p className="leading-[20px]">Share location for safety</p>
      </div>
    </div>
  );
}

function Div36() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-0 top-0 w-[223.984px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div34 />
      <Div35 />
    </div>
  );
}

function After2() {
  return (
    <div className="absolute bg-white left-[26px] rounded-[9999px] size-5 top-0.5" data-name="::after">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div37() {
  return (
    <div className="absolute bg-orange-500 h-6 left-0 rounded-[9999px] top-0 w-12" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <After2 />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[260px] top-2.5 w-12" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div37 />
    </div>
  );
}

function Div38() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-0 top-0 w-[308px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div36 />
      <Label2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame10} />
    </div>
  );
}

function Svg12() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-4 top-[3px]" data-name="svg">
      <Frame12 />
    </div>
  );
}

function I12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-3 top-2 w-4" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg12 />
    </div>
  );
}

function Div39() {
  return (
    <div className="absolute bg-gray-100 left-0 rounded-[12px] size-10 top-0" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <I12 />
    </div>
  );
}

function Div40() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-10 left-4 top-4 w-[170.359px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div39 />
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-6 leading-[0] left-[111.5px] not-italic text-[16px] text-center text-gray-900 top-2 translate-x-[-50%] w-[119px]">
        <p className="leading-[24px]">{`Data & Privacy`}</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-4 relative shrink-0 w-2.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame5} />
    </div>
  );
}

function Svg13() {
  return (
    <div className="absolute content-stretch flex h-4 items-center justify-center left-0 top-[3px] w-2.5" data-name="svg">
      <Frame13 />
    </div>
  );
}

function I13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[282px] top-6 w-2.5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg13 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-gray-50 h-[72px] left-0 rounded-[12px] top-[60px] w-[308px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Div40 />
      <I13 />
    </div>
  );
}

function Div41() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[132px] left-[25px] top-[69px] w-[308px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div38 />
      <Button5 />
    </div>
  );
}

function Div42() {
  return (
    <div className="absolute bg-white h-[226px] left-0 rounded-[16px] top-0 w-[358px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <H5 />
      <Div41 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[226px] left-4 top-[1114px] w-[358px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div42 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame11} />
    </div>
  );
}

function Svg14() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-4 top-[3px]" data-name="svg">
      <Frame14 />
    </div>
  );
}

function I14() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[139.3px] top-4 w-4" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg14 />
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[163.3px] top-4 w-[55.406px]" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] h-6 leading-[0] left-7 not-italic text-[16px] text-center text-white top-0 translate-x-[-50%] w-14">
        <p className="leading-[normal]">Logout</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-red-500 h-14 left-0 rounded-[16px] top-0 w-[358px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <I14 />
      <Span4 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-14 left-4 top-[1372px] w-[358px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button6 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[1524px] left-0 top-[100px] w-[390px]" data-name="main">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15.75px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame12} />
    </div>
  );
}

function Svg15() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-0 top-[3.25px] w-[15.75px]" data-name="svg">
      <Frame15 />
    </div>
  );
}

function I15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[25px] left-2 top-[9px] w-[15.75px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg15 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-gray-100 h-11 left-4 rounded-[12px] top-4 w-[31.75px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <I15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[18px] relative shrink-0 w-[4.5px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame13} />
    </div>
  );
}

function Svg16() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-0 top-[3.25px] w-[4.5px]" data-name="svg">
      <Frame16 />
    </div>
  );
}

function I16() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[25px] left-2 top-[9px] w-[4.5px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg16 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-gray-100 h-11 left-[353.5px] rounded-[12px] top-4 w-[20.5px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <I16 />
    </div>
  );
}

function Div43() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[76px] left-0 top-0 w-[390px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button7 />
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] h-7 leading-[0] left-[168.94px] not-italic text-[20px] text-gray-900 top-6 w-16">
        <p className="leading-[28px]">Profile</p>
      </div>
      <Button8 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white h-[76px] left-0 top-0 w-[390px]" data-name="header">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Div43 />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-gray-50 h-[1624px] relative shrink-0 w-[390px]" data-name="body">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Main />
      <Header />
    </div>
  );
}

export default function Frame17() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative size-full">
        <Body />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#ced4da] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}