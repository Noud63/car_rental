import React from 'react'
import Image from "next/image"


const InfoBarTop = () => {
  return (
    <div className="w-full fixed top-0 bg-gradient-to-r from-amber-800 via-amber-950 to-black h-[50px] flex justify-between items-center max-sm:justify-end max-lg:pr-16 max-sm:pr-4 z-[999]">
      <div className="text-base text-white pl-16 max-sm:hidden">
        Deluxe Car Rental Service LLC <span className="pl-4">Est. 1997</span>
      </div>

      <div className="w-auto">
        <Image src="/socialsicons.png" alt="icons" width={130} height={10} />
      </div>

      <div className="text-amber-600 pr-16 max-lg:hidden">
        Phone: 00-1-917-765-675-098
      </div>
    </div>
  );
}

export default InfoBarTop
