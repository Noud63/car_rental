"use client"
import React from 'react'
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation"; 

const HeroButtons = () => {

    const router = useRouter();

    const handleScroll = (action: string) => {

      if(action === "explore"){
          router.push("/#discover");
      }else{
        router.push("/#footer");
      }
     
    };
    
  return (
    <div className="flex flex-row justify-between px-16 max-xl:mt-12 max-md:text-sm max-xsm:px-4 w-full mt-8 max-2xl:mt-0 max-sm:px-8">
      <div className="flex flex-row w-full max-md:justify-between">
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-gradient-to-r from-amber-800 via-amber-950 to-black text-amber-500 rounded-full shadow-md mr-2"
          handleClick={() => handleScroll("explore")}
        />

        <CustomButton
          title="Contact"
          containerStyles="bg-gradient-to-r from-amber-800 via-amber-950 to-black text-amber-500 rounded-full shadow-md w-[140px]"
          handleClick={() => handleScroll("contact")}
        />
      </div>

      {/* <div className="w-[20px] h-[20px] bg-gradient-to-r from-amber-800 via-amber-950 to-black rounded-full border border-red-800">
        
      </div>

      <div className="w-[20px] h-[20px] bg-gradient-to-r from-amber-800 via-amber-950 to-black rounded-full">
        
      </div>

      <div className="w-[20px] h-[20px] bg-gradient-to-r from-amber-800 via-amber-950 to-black rounded-full border border-red-800">
        
      </div>

      <div className="w-[20px] h-[20px] bg-gradient-to-r from-amber-800 via-amber-950 to-black rounded-full">
        
      </div> */}
    </div>
  );
}

export default HeroButtons
