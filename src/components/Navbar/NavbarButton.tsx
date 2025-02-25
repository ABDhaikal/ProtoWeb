import React from "react";

interface contentBox {
  content: string;
  clickLink?: string;
}

const NavbarButton = ({content,clickLink}:contentBox) => {
  return (
    <div className="h-[78px] px-8 bg-white border-2 border-black justify-center items-center  flex  container w-max ">
      <div className="w-[150px] h-[31px] relative">
        <div className="w-[86px] h-2.5 left-[46px] top-[19px] absolute bg-[#ffdc58]" />
        <div className="w-[150px] left-0 top-0 absolute text-center text-[#0c0c0c] text-2xl font-normal font-jokerman">
          {content}
        </div>
      </div>
    </div>
  );
};

export default NavbarButton;



