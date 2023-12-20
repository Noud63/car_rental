import React from "react";
import Image from "next/image";

const TheseToo = () => {
  return (
    <div className="thesetoo m-auto w-full flex flex-col px-16 mt-28 max-xsm:px-4 max-sm:px-8 max-sm:mt-16">
      <div className="w-full flex justify-center border-b-2 border-amber-800 mb-4">
        <Image
          src="/companylogoextra.png"
          alt="logo"
          width={338}
          height={18}
          className="object-contain w-[300px] pb-2"
        />
      </div>

      <div
        className="w-full flex flex-row justify-between text-lg rounded-2xl 
           max-xl:flex-col max-xl:items-center"
      >
        <div
          className="w-full max-w-1/3 flex flex-col border-dotted border-r border-gray-300 
                        max-xl:border-b pb-10 relative bg-gradient-to-b from-amber-900 via-amber-950 to-black rounded-2xl max-xl:rounded-2xl"
        >
          <div className="w-full flex justify-center pt-12">
            <Image src="/rollsroyce.png" alt="rr" width={50} height={10} />
          </div>
          <div className="w-full flex items-center flex-col mt-8 ">
            <Image src="/rrfront.png" alt="bentley" width={250} height={10} />
            <div className="absolute bottom-0 h-20 w-full flex justify-center items-center before:text-base font-semibold bg-black text-white rounded-2xl">
              Only $98,- p/d
            </div>
          </div>
        </div>

        <div className="w-full max-w-1/3 flex flex-col relative bg-gradient-to-b from-amber-900 via-amber-950 to-black rounded-2xl">
          <div className="w-full flex justify-center items-center mb-16 pt-12">
            <Image src="/bentley.png" alt="bentley" width={150} height={10} />
          </div>
          <div className="w-full flex justify-center max-xl:pb-24">
            <Image
              src="/bentleyfront.png"
              alt="bentley"
              width={180}
              height={10}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-0 h-20 w-full flex justify-center items-center text-base font-semibold bg-black text-white rounded-2xl">
            Only $90,- p/d
          </div>
        </div>

        <div
          className="w-full max-w-1/3 flex flex-col border-dotted border-l border-gray-300 max-xl:border-t relative 
                    bg-gradient-to-b from-amber-900 via-amber-950 to-black rounded-2xl"
        >
          <div className="w-full flex justify-center mb-8 pt-12">
            <Image src="/ferrari.png" alt="bentley" width={60} height={10} />
          </div>
          <div className="w-full flex justify-center max-xl:pb-24 ">
            <Image
              src="/ferrarifront.png"
              alt="ferrari"
              width={280}
              height={10}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-0 h-20 w-full flex justify-center items-center text-base font-semibold bg-black text-white rounded-2xl">
            Only $85,- p/d
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheseToo;
