"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {

  return (
    <div className="hero">
      <div className="flex-1 pt-64 padding-x max-xl:pt-40">
        <h1 className="hero__title mb-8 max-sm:mb-4">
          <div
            className="absolute top-40 font-extrabold 2xl:text-[72px] text-[50px] 
          bg-gradient-to-r from-black to-amber-700 text-transparent bg-clip-text 
          max-xl:relative max-xl:top-0 sm:text-[64px] max-xsm:text-[34px]"
          >
            Car Rental Service
          </div>
          Best quality, <br />
          lowest price,<br />
          Excellent service!
        </h1>

        <p className="hero__subtitle py-1">
          Experience car rental like you never did before, <br />
          Effortless and quick!
        </p>
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/bentley2.png"
            alt="hero"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
