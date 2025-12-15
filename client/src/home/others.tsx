import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";

const OthersSection: React.FC = () => {
  return (
    <section className="w-full h-[336px] md:h-screen flex flex-col justify-between bg-white relative">
      <div className="flex-1 flex items-center justify-start"></div>
      <hr className="border-[0.5px] border-[#333333] m-0" />
       <div className="flex-1 flex items-center justify-between text-[24px] md:text-[48px] ml-5 md:ml-[78px] mr-10 md:mr-[200px] satoshi-bold">
        <span>Explore Marketplace</span>
        <button
          className="w-[54px] h-[54px] md:w-[78px] md:h-[78px] flex items-center justify-center rounded-full bg-white border-[#333333] border-[0.41px]"
          aria-label="Martketplace"
          type="button"
        >
          <LiaArrowRightSolid
            style={{ width: "32.82px", height: "auto" }}
            className="text-[#292D32]"
          />
        </button>
      </div>
      
      <hr className="border-[0.5px] border-[#333333] m-0" />
          <div className="flex-1 flex items-center justify-between text-[24px] md:text-[48px] ml-5 md:ml-[78px] mr-10 md:mr-[200px] satoshi-bold">
        <span>See Auctions</span>
        <button
          className="w-[54px] h-[54px] md:w-[78px] md:h-[78px] flex items-center justify-center rounded-full bg-white border-[#333333] border-[0.41px]"
          aria-label="See auctions"
          type="button"
        >
          <LiaArrowRightSolid
            style={{ width: "32.82px", height: "auto" }}
            className="text-[#292D32]"
          />
        </button>
      </div>

      <hr className="border-[0.5px] border-[#333333] m-0" />
      <div className="flex-1 flex items-center justify-start"></div>
    </section>
  );
};

export default OthersSection;
