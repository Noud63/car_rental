import React from 'react'
import Image from 'next/image';

import localFont from "next/font/local";

const dance = localFont({
  src: "../fonts/DancingScript-Regular.ttf",
});

const EnjoyTheRide = () => {
  return (
    <div className="w-full max-w-full flex flex-row absolute justify-center m-auto top-0 right-0 left-0 px-0 z-10">
      <Image
        src="/car_wheelgreen.png"
        alt="car wheel"
        width={45}
        height={40}
        className="object-contain w-auto"
      />
      <span
        className={`${dance.className} w-full text-white text-xl py-2
            flex items-center justify-center font-semibold tracking-widest 
           rounded-full max-xsm:text-sm max-xsm:w-full bg-gradient-to-r from-amber-700 to-black shadow-lg`}
      >
        Life's a journey, enjoy your ride
      </span>
      <Image
        src="/car_wheel.png"
        alt="car wheel"
        width={45}
        height={40}
        className="object-contain w-auto"
      />
    </div>
  );
}

export default EnjoyTheRide
