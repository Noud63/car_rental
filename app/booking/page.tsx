"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { generateCarImageUrl } from "@/utils";
import Image from "next/image";

const BookingDetails = () => {
  const searchParams = useSearchParams();

  const make = searchParams.get("make");
  const model = searchParams.get("model");
  const year = searchParams.get("year");
  const city_mpg = searchParams.get("city_mpg");
  const combination_mpg = searchParams.get("combination_mpg");
  const cylinders = searchParams.get("cylinders");
  const displacement = searchParams.get("displacement");
  const drive = searchParams.get("drive");
  const fuel_type = searchParams.get("fuel_type");
  const highway_mpg = searchParams.get("highway_mpg");
  const transmission = searchParams.get("transmission");
  const rent = searchParams.get("carrent");

  const car = {
    model,
    make,
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    transmission,
    year,
    rent,
  };

  const imgUrl = generateCarImageUrl(car as any);

  return (
    <div className="min-h-screen w-full pt-48 px-16 flex justify-center font-bold text-xl max-sm:px-4">
      <div className="w-full max-w-[1000px]">
        <div className="w-full flex justify-between items-center flex-row border-b border-amber-800 max-sm:flex-col max-sm:items-start">
          <div className="flex justify-center items-start flex-col">
            <span className="bg-gradient-to-r from-black to-amber-700 text-transparent bg-clip-text">
              {car.make?.toUpperCase()}{" "}
              {`${car.model?.charAt(0).toUpperCase()}${car.model?.slice(1)}`}
            </span>
          </div>
          <span
            className="flex justify-center rounded-full text-amber-500 w-[120px] h-[35px] items-center text-base mb-2
          bg-gradient-to-r from-amber-800 via-amber-950 to-black shadow-lg max-sm:w-[100px] max-sm:h-[30px] max-sm:text-sm max-sm:mt-2 max-sm:mb-3"
          >
            ${car.rent},-{" "}
            <span className="text-sm pl-1 pt-1 text-[12px] font-normal">
              p/d
            </span>
          </span>
        </div>
        <div
          className="w-full h-[120px] flex flex-row justify-between mt-4 bg-gradient-to-r from-amber-700 to-black rounded-lg 
        max-sm:flex-col max-sm:h-[220px] max-sm:items-center"
        >
          <div className="relative w-[180px] h-[100px] flex items-center">
            <Image
              src={imgUrl}
              alt="car"
              fill
              sizes="100%"
              priority
              className="object-contain mt-5"
            />
          </div>
          <div className="text-amber-500 text-[14px] w-[210px] max-sm:w-[260px]">
            <div className="flex flex-col justify-between px-4 py-4 leading-5 h-full font-normal">
              <span className="flex justify-between w-full">
                <span>Transmission:</span>
                {transmission === "a" ? "automatic" : ""}
              </span>
              <span className="flex justify-between w-full text-sm">
                <span>Fuel: </span>
                {fuel_type}
              </span>
              <span className="flex justify-between w-full">
                <span>Mpg: </span>
                {highway_mpg}
              </span>
              <span className="flex justify-between w-full">
                <span>Drive: </span>
                {drive}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
