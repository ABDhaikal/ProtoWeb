import Image from "next/image";
import React from "react";

const NavbarHome = () => {
  return (
    <div className="w-[313.82px] h-[78px] px-8 bg-white border-2 border-black justify-center items-center gap-[15px] inline-flex">
      <Image src="/NavbarIcon/SmileLogo.svg" alt="smile" width={66} height={12}/>
      <div className="text-[#0c0c0c] text-4xl font-normal font-mono">
        Haikal
      </div>
    </div>
  );
};

export default NavbarHome;
