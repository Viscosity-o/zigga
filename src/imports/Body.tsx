import { imgFrame, imgFrame1, imgFrame2, imgFrame3, imgFrame4, imgFrame5, imgFrame6, imgFrame7, imgFrame8, imgFrame9, imgFrame10, imgFrame11, imgFrame12 } from "./svg-ulwkl";

function Div() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-0 top-0 w-[178.641px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Bold',_sans-serif] h-[33px] leading-[0] left-0 not-italic text-[24px] text-gray-900 top-0 w-[143px]">
        <p className="leading-[32px]">Dashboard</p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-5 leading-[0] left-0 not-italic text-[14px] text-gray-500 top-8 w-[179px]">
        <p className="leading-[20px]">Stay safe on your journey</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-4 relative shrink-0 w-3.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame} />
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute content-stretch flex h-4 items-center justify-center left-0 top-[3px] w-3.5" data-name="svg">
      <Frame />
    </div>
  );
}

function I() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[13px] top-2 w-3.5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg />
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute bg-gray-100 left-[296px] rounded-[9999px] size-10 top-1.5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I />
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-6 top-12 w-[336px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div />
      <Div1 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white h-[140px] left-0 top-0 w-96" data-name="header">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div2 />
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-12 left-0 top-2 w-[148.641px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] h-7 leading-[0] left-0 not-italic text-[18px] text-white top-0 w-[149px]">
        <p className="leading-[28px]">Tourist Digital ID</p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-5 leading-[0] left-0 not-italic text-[14px] text-blue-100 top-7 w-[133px]">
        <p className="leading-[20px]">ID: TDI-2024-8847</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-5 relative shrink-0 w-[17.5px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame1} />
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute content-stretch flex h-5 items-center justify-center left-0 top-[3.5px] w-[17.5px]" data-name="svg">
      <Frame1 />
    </div>
  );
}

function I1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[15.25px] top-2.5 w-[17.5px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg1 />
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute bg-gray-900 left-2 rounded-[8px] size-12 top-2" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <I1 />
    </div>
  );
}

function Div5() {
  return (
    <div className="absolute bg-white left-56 rounded-[12px] size-16 top-0" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Div4 />
    </div>
  );
}

function Div6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-16 left-6 top-6 w-72" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div3 />
      <Div5 />
    </div>
  );
}

function Div7() {
  return (
    <div className="absolute bg-green-400 left-0 rounded-[9999px] size-2 top-1.5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-6 top-[104px] w-72" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div7 />
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-5 leading-[0] left-4 not-italic text-[14px] text-white top-0 w-28">
        <p className="leading-[20px]">Verified • Active</p>
      </div>
    </div>
  );
}

function Div9() {
  return (
    <div className="absolute bg-gradient-to-r from-[#2563eb] h-[148px] left-0 rounded-[16px] to-[#1d4ed8] top-0 w-[336px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1)]" />
      <Div6 />
      <Div8 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[148px] left-6 top-0 w-[336px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div9 />
    </div>
  );
}

function Div10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-0 top-0 w-[162.266px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] h-7 leading-[0] left-0 not-italic text-[18px] text-gray-900 top-0 w-[120px]">
        <p className="leading-[28px]">Safety Score</p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-5 leading-[0] left-0 not-italic text-[14px] text-gray-500 top-8 w-[163px]">
        <p className="leading-[20px]">Current location status</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame2} />
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-5 top-[3.5px]" data-name="svg">
      <Frame2 />
    </div>
  );
}

function I2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-3.5 top-2.5 w-5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg2 />
    </div>
  );
}

function Div11() {
  return (
    <div className="absolute bg-green-100 left-0 rounded-[9999px] size-12 top-0" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I2 />
    </div>
  );
}

function Div12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-8 left-0 top-0 w-[31.156px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Bold',_sans-serif] h-[33px] leading-[0] left-8 not-italic text-[24px] text-emerald-500 text-right top-[-1px] translate-x-[-100%] w-8">
        <p className="leading-[normal]">85</p>
      </div>
    </div>
  );
}

function Div13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-4 left-0 top-8 w-[31.156px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[17px] leading-[0] left-[32.06px] not-italic text-[12px] text-gray-500 text-right top-[-1px] translate-x-[-100%] w-[29px]">
        <p className="leading-[normal]">SAFE</p>
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-12 left-[60px] top-0 w-[31.156px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div12 />
      <Div13 />
    </div>
  );
}

function Div15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-12 left-[194.84px] top-0.5 w-[91.156px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div11 />
      <Div14 />
    </div>
  );
}

function Div16() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[52px] left-[25px] top-[25px] w-[286px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div10 />
      <Div15 />
    </div>
  );
}

function Div17() {
  return (
    <div className="absolute bg-white h-[102px] left-0 rounded-[16px] top-0 w-[336px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Div16 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[102px] left-6 top-[180px] w-[336px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div17 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[30px] relative shrink-0 w-[3.75px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame3} />
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-center left-0 top-[5.75px] w-[3.75px]" data-name="svg">
      <Frame3 />
    </div>
  );
}

function I3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[43px] left-[16.27px] top-[-4px] w-[3.75px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg3 />
    </div>
  );
}

function Div18() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-0 top-9 w-[36.297px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Bold',_sans-serif] h-7 leading-[0] left-[18.5px] not-italic text-[18px] text-center text-white top-px translate-x-[-50%] w-[37px]">
        <p className="leading-[normal]">SOS</p>
      </div>
    </div>
  );
}

function Div19() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-16 left-[45.84px] top-8 w-[36.297px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I3 />
      <Div18 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-red-500 left-[104px] rounded-[9999px] size-32 top-0" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]" />
      <Div19 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-32 left-6 top-[314px] w-[336px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-5 relative shrink-0 w-[15px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame4} />
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute content-stretch flex h-5 items-center justify-center left-0 top-[3.5px] w-[15px]" data-name="svg">
      <Frame4 />
    </div>
  );
}

function I4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[16.5px] top-2.5 w-[15px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg4 />
    </div>
  );
}

function Div20() {
  return (
    <div className="absolute bg-blue-100 left-[26.66px] rounded-[9999px] size-12 top-[17px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I4 />
    </div>
  );
}

function H4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-10 left-[17px] top-[77px] w-[67.328px]" data-name="h4">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-5 leading-[0] left-[36.63px] not-italic text-[14px] text-center text-gray-900 top-0 translate-x-[-50%] w-[47px]">
        <p className="leading-[normal]">Share</p>
      </div>
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-5 leading-[0] left-[36.34px] not-italic text-[14px] text-center text-gray-900 top-5 translate-x-[-50%] w-8">
        <p className="leading-[normal]">Live</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-4 left-[17px] top-[121px] w-[67.328px]" data-name="p">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[17px] leading-[0] left-[36.45px] not-italic text-[12px] text-center text-gray-500 top-[-1px] translate-x-[-50%] w-[57px]">
        <p className="leading-[normal]">Location</p>
      </div>
    </div>
  );
}

function Div21() {
  return (
    <div className="absolute bg-white h-[154px] left-0 rounded-[16px] top-0 w-[101.328px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Div20 />
      <H4 />
      <P />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-5 relative shrink-0 w-[17.5px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame5} />
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute content-stretch flex h-5 items-center justify-center left-0 top-[3.5px] w-[17.5px]" data-name="svg">
      <Frame5 />
    </div>
  );
}

function I5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[15.25px] top-2.5 w-[17.5px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg5 />
    </div>
  );
}

function Div22() {
  return (
    <div className="absolute bg-orange-100 left-[26.66px] rounded-[9999px] size-12 top-[17px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I5 />
    </div>
  );
}

function H5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-[17px] top-[77px] w-[67.328px]" data-name="h4">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-5 leading-[0] left-[36.41px] not-italic text-[14px] text-center text-gray-900 top-0 translate-x-[-50%] w-[52px]">
        <p className="leading-[normal]">Report</p>
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-4 left-[17px] top-[101px] w-[67.328px]" data-name="p">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[17px] leading-[0] left-[36.56px] not-italic text-[12px] text-center text-gray-500 top-[-1px] translate-x-[-50%] w-[37px]">
        <p className="leading-[normal]">Issue</p>
      </div>
    </div>
  );
}

function Div23() {
  return (
    <div className="absolute bg-white h-[154px] left-[117.33px] rounded-[16px] top-0 w-[101.328px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Div22 />
      <H5 />
      <P1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame6} />
    </div>
  );
}

function Svg6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-5 top-[3.5px]" data-name="svg">
      <Frame6 />
    </div>
  );
}

function I6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-3.5 top-2.5 w-5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg6 />
    </div>
  );
}

function Div24() {
  return (
    <div className="absolute bg-green-100 left-[26.67px] rounded-[9999px] size-12 top-[17px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I6 />
    </div>
  );
}

function H6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-[17px] top-[77px] w-[67.344px]" data-name="h4">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-5 leading-[0] left-[36.36px] not-italic text-[14px] text-center text-gray-900 top-0 translate-x-[-50%] w-[39px]">
        <p className="leading-[normal]">View</p>
      </div>
    </div>
  );
}

function P2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-4 left-[17px] top-[101px] w-[67.344px]" data-name="p">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[17px] leading-[0] left-[36.5px] not-italic text-[12px] text-center text-gray-500 top-[-1px] translate-x-[-50%] w-14">
        <p className="leading-[normal]">Itinerary</p>
      </div>
    </div>
  );
}

function Div25() {
  return (
    <div className="absolute bg-white h-[154px] left-[234.66px] rounded-[16px] top-0 w-[101.344px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Div24 />
      <H6 />
      <P2 />
    </div>
  );
}

function Div26() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[154px] left-0 top-11 w-[336px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div21 />
      <Div23 />
      <Div25 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[198px] left-6 top-[474px] w-[336px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] h-7 leading-[0] left-0 not-italic text-[18px] text-gray-900 top-0 w-[131px]">
        <p className="leading-[28px]">Quick Actions</p>
      </div>
      <Div26 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-3.5 relative shrink-0 w-[12.25px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame7} />
    </div>
  );
}

function Svg7() {
  return (
    <div className="absolute content-stretch flex h-3.5 items-center justify-center left-0 top-[2.75px] w-[12.25px]" data-name="svg">
      <Frame7 />
    </div>
  );
}

function I7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-[9.88px] top-1.5 w-[12.25px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg7 />
    </div>
  );
}

function Div27() {
  return (
    <div className="absolute bg-green-100 left-0 rounded-[9999px] size-8 top-0.5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I7 />
    </div>
  );
}

function Div28() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-9 left-11 top-0 w-[258px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-5 leading-[0] left-0 not-italic text-[14px] text-gray-900 top-0 w-[152px]">
        <p className="leading-[20px]">Check-in completed</p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[17px] leading-[0] left-0 not-italic text-[12px] text-gray-500 top-5 w-[187px]">
        <p className="leading-[16px]">Downtown Hotel • 2 hours ago</p>
      </div>
    </div>
  );
}

function Div29() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-9 left-[17px] top-[17px] w-[302px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div27 />
      <Div28 />
    </div>
  );
}

function Div30() {
  return (
    <div className="absolute bg-white h-[70px] left-0 rounded-[12px] top-0 w-[336px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Div29 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-3.5 relative shrink-0 w-[10.5px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame8} />
    </div>
  );
}

function Svg8() {
  return (
    <div className="absolute content-stretch flex h-3.5 items-center justify-center left-0 top-[2.75px] w-[10.5px]" data-name="svg">
      <Frame8 />
    </div>
  );
}

function I8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-[10.75px] top-1.5 w-[10.5px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg8 />
    </div>
  );
}

function Div31() {
  return (
    <div className="absolute bg-blue-100 left-0 rounded-[9999px] size-8 top-0.5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I8 />
    </div>
  );
}

function Div32() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-9 left-11 top-0 w-[258px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-5 leading-[0] left-0 not-italic text-[14px] text-gray-900 top-0 w-[119px]">
        <p className="leading-[20px]">Location shared</p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[17px] leading-[0] left-0 not-italic text-[12px] text-gray-500 top-5 w-[239px]">
        <p className="leading-[16px]">With emergency contact • 4 hours ago</p>
      </div>
    </div>
  );
}

function Div33() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-9 left-[17px] top-[17px] w-[302px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div31 />
      <Div32 />
    </div>
  );
}

function Div34() {
  return (
    <div className="absolute bg-white h-[70px] left-0 rounded-[12px] top-[82px] w-[336px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Div33 />
    </div>
  );
}

function Div35() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[152px] left-0 top-11 w-[336px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div30 />
      <Div34 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[196px] left-6 top-[696px] w-[336px]" data-name="section">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] h-7 leading-[0] left-0 not-italic text-[18px] text-gray-900 top-0 w-[143px]">
        <p className="leading-[28px]">Recent Activity</p>
      </div>
      <Div35 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[940px] left-0 top-[133px] w-96" data-name="main">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-5 relative shrink-0 w-[22.5px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame9} />
    </div>
  );
}

function Svg9() {
  return (
    <div className="absolute content-stretch flex h-5 items-center justify-center left-0 top-[3.5px] w-[22.5px]" data-name="svg">
      <Frame9 />
    </div>
  );
}

function I9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[6.75px] top-0 w-[22.5px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg9 />
    </div>
  );
}

function Div36() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[23.48px] top-0 w-9" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I9 />
      <div className="absolute font-['Poppins:Medium',_sans-serif] h-[17px] leading-[0] left-[18px] not-italic text-[12px] text-blue-600 text-center top-7 translate-x-[-50%] w-9">
        <p className="leading-[16px]">Home</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-5 relative shrink-0 w-[22.5px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame10} />
    </div>
  );
}

function Svg10() {
  return (
    <div className="absolute content-stretch flex h-5 items-center justify-center left-0 top-[3.5px] w-[22.5px]" data-name="svg">
      <Frame10 />
    </div>
  );
}

function I10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[2.17px] top-0 w-[22.5px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg10 />
    </div>
  );
}

function Div37() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[106.48px] top-0 w-[26.859px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I10 />
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[17px] leading-[0] left-[13.5px] not-italic text-[12px] text-center text-gray-400 top-7 translate-x-[-50%] w-[27px]">
        <p className="leading-[16px]">Map</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame11} />
    </div>
  );
}

function Svg11() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-5 top-[3.5px]" data-name="svg">
      <Frame11 />
    </div>
  );
}

function I11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[14.02px] top-0 w-5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg11 />
    </div>
  );
}

function Div38() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[180.34px] top-0 w-[48.047px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I11 />
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[17px] leading-[0] left-[24.5px] not-italic text-[12px] text-center text-gray-400 top-7 translate-x-[-50%] w-[49px]">
        <p className="leading-[16px]">Support</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-5 relative shrink-0 w-[17.5px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame12} />
    </div>
  );
}

function Svg12() {
  return (
    <div className="absolute content-stretch flex h-5 items-center justify-center left-0 top-[3.5px] w-[17.5px]" data-name="svg">
      <Frame12 />
    </div>
  );
}

function I12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[9.81px] top-0 w-[17.5px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg12 />
    </div>
  );
}

function Div39() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[275.39px] top-0 w-[37.141px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I12 />
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[17px] leading-[0] left-[19px] not-italic text-[12px] text-center text-gray-400 top-7 translate-x-[-50%] w-[38px]">
        <p className="leading-[16px]">Profile</p>
      </div>
    </div>
  );
}

function Div40() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-6 top-[17px] w-[336px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div36 />
      <Div37 />
      <Div38 />
      <Div39 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bg-white h-[77px] left-0 top-[1003px] w-96" data-name="nav">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div40 />
    </div>
  );
}

function Div41() {
  return (
    <div className="absolute bg-white h-[1080px] left-[3px] top-0 w-96" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Header />
      <Main />
      <Nav />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-gray-50 relative size-full" data-name="body">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div41 />
    </div>
  );
}