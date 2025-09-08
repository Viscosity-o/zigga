import { imgFrame, imgFrame1, imgFrame2, imgFrame3, imgFrame4, imgFrame5, imgFrame6, imgFrame7, imgFrame8, imgFrame9, imgFrame10, imgFrame11 } from "./svg-ttvy8";

function Div() {
  return (
    <div className="absolute bg-green-500 left-0 rounded-[9999px] size-2 top-1.5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-6 top-3 w-[43.781px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div />
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-5 leading-[0] left-4 text-[14px] text-gray-600 top-0 w-7">
        <p className="leading-[20px]">9:41</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-3.5 relative shrink-0 w-[17.5px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame} />
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute content-stretch flex h-3.5 items-center justify-center left-0 top-[1.75px] w-[17.5px]" data-name="svg">
      <Frame />
    </div>
  );
}

function I() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-0 w-[17.5px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-3.5 relative shrink-0 w-[17.5px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame1} />
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute content-stretch flex h-3.5 items-center justify-center left-0 top-[1.75px] w-[17.5px]" data-name="svg">
      <Frame1 />
    </div>
  );
}

function I1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-[21.5px] top-0 w-[17.5px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-3.5 relative shrink-0 w-[15.75px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame2} />
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute content-stretch flex h-3.5 items-center justify-center left-0 top-[1.75px] w-[15.75px]" data-name="svg">
      <Frame2 />
    </div>
  );
}

function I2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-[43px] top-0 w-[15.75px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg2 />
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-[307.25px] top-3 w-[58.75px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I />
      <I1 />
      <I2 />
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute bg-white h-11 left-0 top-0 w-[390px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div1 />
      <Div2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-5 relative shrink-0 w-[17.5px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame3} />
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute content-stretch flex h-5 items-center justify-center left-0 top-[1.5px] w-[17.5px]" data-name="svg">
      <Frame3 />
    </div>
  );
}

function I3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-2 top-2.5 w-[17.5px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg3 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[-8px] top-0 w-[33.5px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I3 />
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-px left-[310px] top-[22px] w-8" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Div5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-6 top-4 w-[342px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button />
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-7 leading-[0] left-[87.98px] text-[18px] text-gray-900 top-2 w-40">
        <p className="leading-[28px]">Emergency Active</p>
      </div>
      <Div4 />
    </div>
  );
}

function Div6() {
  return (
    <div className="absolute bg-white h-[76px] left-0 top-11 w-[390px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Div5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-9" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame4} />
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[0.36px] size-9 top-[4.3px]" data-name="svg">
      <Frame4 />
    </div>
  );
}

function I4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[43.86px] left-[123.42px] top-[-2.04px] w-[36.72px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg4 />
    </div>
  );
}

function Div7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[40.8px] left-[32.64px] top-[32.64px] w-[283.56px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I4 />
    </div>
  );
}

function H2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-8 left-[35.42px] top-[90.4px] w-[278px]" data-name="h2">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-8 leading-[0] left-[141.52px] text-[24px] text-center text-white top-0.5 translate-x-[-50%] w-[147px]">
        <p className="leading-[normal]">SOS ACTIVE</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[35.42px] top-[130.4px] w-[278px]" data-name="p">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-6 leading-[0] left-[139.19px] text-[16px] text-center text-red-100 top-0.5 translate-x-[-50%] w-[276px]">
        <p className="leading-[normal]">Emergency alert has been triggered</p>
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[17px] left-4 top-3 w-[138.75px]" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-5 leading-[0] left-[69.5px] text-[14px] text-center text-white top-0 translate-x-[-50%] w-[139px]">
        <p className="leading-[normal]">Alert sent at 9:41 AM</p>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-10 left-[89.05px] rounded-[12px] top-[170.4px] w-[170.75px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Span />
    </div>
  );
}

function Div9() {
  return (
    <div className="absolute bg-red-500 h-[244.8px] left-0 rounded-[16px] top-0 w-[348.84px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1)]" />
      <Div7 />
      <H2 />
      <P />
      <Div8 />
    </div>
  );
}

function Div10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[244.8px] left-[20.58px] top-[149.6px] w-[348.84px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div9 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame5} />
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[18px] top-[4.25px]" data-name="svg">
      <Frame5 />
    </div>
  );
}

function I5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[11px] top-1.5 w-[18px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg5 />
    </div>
  );
}

function Div11() {
  return (
    <div className="absolute bg-blue-100 left-0 rounded-[9999px] size-10 top-0.5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I5 />
    </div>
  );
}

function Div12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[52px] top-0 w-[143.797px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 text-[16px] text-gray-900 top-0 w-36">
        <p className="leading-[24px]">Police Department</p>
      </div>
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 text-[14px] text-gray-500 top-6 w-[143px]">
        <p className="leading-[20px]">Emergency Services</p>
      </div>
    </div>
  );
}

function Div13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-0 top-0 w-[195.797px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div11 />
      <Div12 />
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
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-0 top-0 w-5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg6 />
    </div>
  );
}

function Div14() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-72 top-2 w-5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I6 />
    </div>
  );
}

function Div15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[17px] top-[17px] w-[308px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div13 />
      <Div14 />
    </div>
  );
}

function Div16() {
  return (
    <div className="absolute bg-white h-[78px] left-0 rounded-[16px] top-11 w-[342px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Div15 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[22.5px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame7} />
    </div>
  );
}

function Svg7() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-0 top-[4.25px] w-[22.5px]" data-name="svg">
      <Frame7 />
    </div>
  );
}

function I7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[8.75px] top-1.5 w-[22.5px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg7 />
    </div>
  );
}

function Div17() {
  return (
    <div className="absolute bg-green-100 left-0 rounded-[9999px] size-10 top-0.5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I7 />
    </div>
  );
}

function Div18() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[52px] top-0 w-[127.531px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 text-[16px] text-gray-900 top-0 w-[125px]">
        <p className="leading-[24px]">Family Contacts</p>
      </div>
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 text-[14px] text-gray-500 top-6 w-32">
        <p className="leading-[20px]">3 contacts notified</p>
      </div>
    </div>
  );
}

function Div19() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-0 top-0 w-[179.531px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div17 />
      <Div18 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame6} />
    </div>
  );
}

function Svg8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-5 top-[3.5px]" data-name="svg">
      <Frame8 />
    </div>
  );
}

function I8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-0 top-0 w-5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg8 />
    </div>
  );
}

function Div20() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-72 top-2 w-5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I8 />
    </div>
  );
}

function Div21() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[17px] top-[17px] w-[308px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div19 />
      <Div20 />
    </div>
  );
}

function Div22() {
  return (
    <div className="absolute bg-white h-[78px] left-0 rounded-[16px] top-[134px] w-[342px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Div21 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.5px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame8} />
    </div>
  );
}

function Svg9() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-0 top-[4.25px] w-[13.5px]" data-name="svg">
      <Frame9 />
    </div>
  );
}

function I9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[13.25px] top-1.5 w-[13.5px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg9 />
    </div>
  );
}

function Div23() {
  return (
    <div className="absolute bg-purple-100 left-0 rounded-[9999px] size-10 top-0.5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I9 />
    </div>
  );
}

function Div24() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[52px] top-0 w-[158.516px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 text-[16px] text-gray-900 top-0 w-[159px]">
        <p className="leading-[24px]">Tourism Department</p>
      </div>
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 text-[14px] text-gray-500 top-6 w-[119px]">
        <p className="leading-[20px]">Local authorities</p>
      </div>
    </div>
  );
}

function Div25() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-0 top-0 w-[210.516px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div23 />
      <Div24 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame6} />
    </div>
  );
}

function Svg10() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-5 top-[3.5px]" data-name="svg">
      <Frame10 />
    </div>
  );
}

function I10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-0 top-0 w-5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg10 />
    </div>
  );
}

function Div26() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-72 top-2 w-5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I10 />
    </div>
  );
}

function Div27() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-11 left-[17px] top-[17px] w-[308px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div25 />
      <Div26 />
    </div>
  );
}

function Div28() {
  return (
    <div className="absolute bg-white h-[78px] left-0 rounded-[16px] top-56 w-[342px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Div27 />
    </div>
  );
}

function Div29() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[302px] left-6 top-[416px] w-[342px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-7 leading-[0] left-0 text-[18px] text-gray-900 top-0 w-[134px]">
        <p className="leading-[28px]">Alerts Sent To:</p>
      </div>
      <Div16 />
      <Div22 />
      <Div28 />
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[17px] left-3 top-2 w-[85.047px]" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-5 leading-[0] left-0 text-[14px] text-green-700 top-0 w-[86px]">
        <p className="leading-[normal]">SHARING ON</p>
      </div>
    </div>
  );
}

function Div30() {
  return (
    <div className="absolute bg-green-100 h-8 left-[190.95px] rounded-[9999px] top-0 w-[109.047px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Span1 />
    </div>
  );
}

function Div31() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-8 left-[21px] top-[21px] w-[300px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-7 leading-[0] left-0 text-[18px] text-gray-900 top-0.5 w-[118px]">
        <p className="leading-[28px]">Live Location</p>
      </div>
      <Div30 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-5 relative shrink-0 w-[15px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame9} />
    </div>
  );
}

function Svg11() {
  return (
    <div className="absolute content-stretch flex h-5 items-center justify-center left-0 top-[3.5px] w-[15px]" data-name="svg">
      <Frame11 />
    </div>
  );
}

function I11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[16.5px] top-2.5 w-[15px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg11 />
    </div>
  );
}

function Div32() {
  return (
    <div className="absolute bg-red-100 left-0 rounded-[9999px] size-12 top-2" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <I11 />
    </div>
  );
}

function Div33() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-16 left-[60px] top-0 w-60" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-6 leading-[0] left-0 text-[16px] text-gray-900 top-0 w-[200px]">
        <p className="leading-[24px]">Real-time tracking active</p>
      </div>
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-10 leading-[0] left-0 text-[14px] text-gray-500 top-6 w-[232px]">
        <p className="leading-[20px]">Your location is being shared with emergency contacts</p>
      </div>
    </div>
  );
}

function Div34() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-16 left-[21px] top-[69px] w-[300px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div32 />
      <Div33 />
    </div>
  );
}

function Div35() {
  return (
    <div className="absolute bg-red-500 left-0 opacity-[0.543] rounded-[9999px] size-2 top-1.5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Div36() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-[35.44px] top-0 w-[229.109px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div35 />
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-5 leading-[0] left-4 text-[14px] text-gray-600 top-0 w-[214px]">
        <p className="leading-[20px]">Live updating every 30 seconds</p>
      </div>
    </div>
  );
}

function Div37() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-[21px] top-[149px] w-[300px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div36 />
    </div>
  );
}

function Div38() {
  return (
    <div className="absolute bg-white h-[190px] left-0 rounded-[16px] top-0 w-[342px]" data-name="div">
      <div aria-hidden="true" className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Div31 />
      <Div34 />
      <Div37 />
    </div>
  );
}

function Div39() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[190px] left-6 top-[742px] w-[342px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div38 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame10} />
    </div>
  );
}

function Svg12() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-5 top-[3.5px]" data-name="svg">
      <Frame12 />
    </div>
  );
}

function I12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[48.81px] top-4 w-5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg12 />
    </div>
  );
}

function Span2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[76.81px] top-4 w-[216.359px]" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-7 leading-[0] left-[108.5px] text-[18px] text-center text-white top-[3px] translate-x-[-50%] w-[217px]">
        <p className="leading-[normal]">Call Emergency Services</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-red-500 h-[60px] left-0 rounded-[16px] top-0 w-[342px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1)]" />
      <I12 />
      <Span2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame11} />
    </div>
  );
}

function Svg13() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-5 top-[3.5px]" data-name="svg">
      <Frame13 />
    </div>
  );
}

function I13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[83.05px] top-4 w-5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg13 />
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-7 left-[111.05px] top-4 w-[147.906px]" data-name="span">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Rubik:Regular',_sans-serif] font-normal h-7 leading-[0] left-[74px] text-[18px] text-center text-white top-[3px] translate-x-[-50%] w-[148px]">
        <p className="leading-[normal]">Cancel SOS Alert</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-gray-600 h-[60px] left-0 rounded-[16px] top-[72px] w-[342px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <I13 />
      <Span3 />
    </div>
  );
}

function Div40() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[132px] left-6 top-[956px] w-[342px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Div41() {
  return (
    <div className="absolute bg-gray-50 h-[1120px] left-0 top-0 w-[390px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div3 />
      <Div6 />
      <Div10 />
      <Div29 />
      <Div39 />
      <Div40 />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-gray-50 h-[1120px] relative shrink-0 w-[390px]" data-name="body">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div41 />
    </div>
  );
}

export default function Frame14() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative size-full">
        <Body />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#ced4da] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}