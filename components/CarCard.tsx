"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import CarDetails from "./CarDetails";
import Link from "next/link";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  //Convert object to query string params
  function objectToQueryString(obj: any) {
    const keys = Object.keys(obj);
    const keyValuePairs = keys.map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
    });
    return keyValuePairs.join("&");
  }

  return (
    <div className="car-card bg-gradient-to-b from-white to-black/30">
      <div className="car-card__content bg-gradient-to-b from-amber-800 via-amber-950 to-black">
        <h2 className="car-card__content-title">
          {make} {model.split(" ").slice(0, 2).join(" ")}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold pl-3">$</span>
        {carRent},-
        <span className="self-end text-[14px] font-medium">&nbsp;/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          sizes="100%"
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2 p-3 bg-white group">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image
              src="/gas.svg"
              alt="gas"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-[14px] ">{city_mpg}mpg</p>
          </div>
        </div>

        <div className="car-card__btn-container hidden group-hover:flex transition duration-1000">
          <CustomButton
            title="View More"
            containerStyles="w-full py-16 rounded-full bg-gradient-to-r from-amber-800 via-amber-950 to-black"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <Link
        href={`/booking?${objectToQueryString(car)}&carrent=${carRent}`}
        className="w-full"
      >
        <button
          className="text-[14px] leading-[26px] font-semibold capitalize w-full flex justify-center items-center h-12
                   bg-gradient-to-b from-amber-800 via-amber-950 to-black text-white 
                   cursor-pointer"
        >
          Book now!
        </button>
      </Link>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
