import { imgFrame, imgFrame1, imgFrame2, imgFrame3, imgFrame4 } from "./svg-42gje";

function Frame() {
  return (
    <div className="h-6 relative shrink-0 w-[27px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame} />
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute content-stretch flex h-6 items-center justify-center left-0 top-[3px] w-[27px]" data-name="svg">
      <Frame />
    </div>
  );
}

function I() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-8 left-[26.5px] top-6 w-[27px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg />
    </div>
  );
}

function Div() {
  return (
    <div className="absolute bg-blue-500 left-[131px] rounded-[16px] size-20 top-0" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <I />
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-44 left-6 top-16 w-[342px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div />
      <div className="absolute font-['Inter:Bold',_sans-serif] font-bold h-9 leading-[0] left-[173.61px] not-italic text-[30px] text-center text-gray-900 top-[104px] translate-x-[-50%] w-[243px]">
        <p className="leading-[36px]">Tourist Digital ID</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-7 leading-[0] left-[173.92px] not-italic text-[18px] text-center text-gray-600 top-[148px] translate-x-[-50%] w-[295px]">
        <p className="leading-[28px]">Secure access to your travel identity</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[272px] left-0 top-[-24px] w-[390px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div1 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-0 w-[278px]" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-5 leading-[0] left-0 not-italic text-[14px] text-gray-700 top-0.5 w-[123px]">
        <p className="leading-[normal]">Digital ID Number</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-gray-50 h-14 left-0 rounded-[16px] top-0 w-[278px]" data-name="input">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-14 justify-center leading-[0] left-4 not-italic text-[#adaebc] text-[18px] top-7 translate-y-[-50%] w-[278px]">
        <p className="leading-[28px]">Enter your Digital ID</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-4 relative shrink-0 w-3.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame1} />
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute content-stretch flex h-4 items-center justify-center left-0 top-0 w-3.5" data-name="svg">
      <Frame1 />
    </div>
  );
}

function I1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[17px] left-0 top-[3px] w-3.5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg1 />
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[248px] top-4 w-3.5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I1 />
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-14 left-0 top-8 w-[278px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Input />
      <Div3 />
    </div>
  );
}

function Div5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[88px] left-0 top-0 w-[278px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Label />
      <Div4 />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-0 top-0 w-[278px]" data-name="label">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-5 leading-[0] left-0 not-italic text-[14px] text-gray-700 top-0.5 w-[140px]">
        <p className="leading-[normal]">One-Time Password</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-gray-50 h-14 left-0 rounded-[16px] top-0 w-[278px]" data-name="input">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-14 justify-center leading-[0] left-[155px] not-italic text-[#adaebc] text-[18px] text-center top-7 tracking-[1.8px] translate-x-[-50%] translate-y-[-50%] w-[278px]">
        <p className="leading-[28px]">Enter OTP</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-4 relative shrink-0 w-3.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame2} />
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute content-stretch flex h-4 items-center justify-center left-0 top-0 w-3.5" data-name="svg">
      <Frame2 />
    </div>
  );
}

function I2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[17px] left-0 top-[3px] w-3.5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg2 />
    </div>
  );
}

function Div6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-[248px] top-4 w-3.5" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I2 />
    </div>
  );
}

function Div7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-14 left-0 top-8 w-[278px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Input1 />
      <Div6 />
    </div>
  );
}

function Div8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[88px] left-0 top-28 w-[278px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Label1 />
      <Div7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame3} />
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[18px] top-[0.25px]" data-name="svg">
      <Frame3 />
    </div>
  );
}

function I3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-[61.47px] top-[18px] w-[18px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg3 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-blue-500 h-14 left-0 rounded-[16px] top-4 w-[278px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1)]" />
      <I3 />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold h-7 leading-[0] left-[154.97px] not-italic text-[18px] text-center text-white top-[18px] translate-x-[-50%] w-[135px]">
        <p className="leading-[normal]">Login Securely</p>
      </div>
    </div>
  );
}

function Div9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[72px] left-0 top-56 w-[278px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[296px] left-8 top-8 w-[278px]" data-name="form">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div5 />
      <Div8 />
      <Div9 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Frame">
      <img className="block max-w-none size-full" src={imgFrame4} />
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-3.5 top-[0.75px]" data-name="svg">
      <Frame4 />
    </div>
  );
}

function I4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-4 left-[1.95px] top-0.5 w-3.5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg4 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-[73.58px] top-0.5 w-[130.828px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I4 />
    </div>
  );
}

function Div10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-6 left-0 top-9 w-[278px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal h-6 leading-[0] left-[141.92px] not-italic text-[16px] text-center text-gray-400 top-[3px] translate-x-[-50%] w-2.5">
        <p className="leading-[normal]">|</p>
      </div>
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-5 leading-[0] left-[150px] not-italic text-[14px] text-blue-500 text-center top-2.5 translate-x-[-50%] w-[114px]">
        <p className="leading-[normal]">Forgot Digital ID?</p>
      </div>
    </div>
  );
}

function I5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-4 left-[1.95px] top-0.5 w-3.5" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-5 left-[87.58px] top-[72px] w-[102.828px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I5 />
    </div>
  );
}

function Div11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[94px] left-8 top-[360px] w-[278px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button1 />
      <Div10 />
      <Button2 />
    </div>
  );
}

function Div12() {
  return (
    <div className="absolute bg-white h-[486px] left-6 rounded-[24px] top-0 w-[342px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1)]" />
      <Form />
      <Div11 />
    </div>
  );
}

function Div13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[486px] left-0 top-64 w-[390px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div12 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[846px] left-0 top-0 w-[390px]" data-name="main">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Div2 />
      <Div13 />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-gray-50 h-[846px] relative shrink-0 w-[390px]" data-name="body">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Main />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative size-full">
        <Body />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#ced4da] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}