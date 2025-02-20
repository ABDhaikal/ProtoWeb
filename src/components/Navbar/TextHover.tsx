import React from "react";

const TextHover = () => {
  return (
    <div className="h-[92px] px-8 bg-white border-4 border-black justify-center items-center gap-[15px] inline-flex">
      <div className="w-[150px] text-center text-[#0c0c0c] text-2xl font-normal font-['Space Grotesk']">
        About me
      </div>
      <div className="w-[86px] h-2.5 left-[46px] top-[19px] absolute bg-[#ffdc58]" />
    </div>
  );
};

export default TextHover;
