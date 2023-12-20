"use client";
import React from "react";
import { CarProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, car, closeModal }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="relative w-full max-w-lg max-h-[96vh] overflow-y-auto 
                transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-2 mt-20"
                >
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-[999] w-fit p-2 border-4 border-black bg-white rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-gradient-to-r from-amber-800 via-amber-950 to-black bg-cover bg-center rounded-t-lg">
                      <Image
                        src={generateCarImageUrl(car)}
                        alt="car model"
                        fill
                        sizes="100%"
                        priority
                        className="object-contain mt-3"
                      />
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          alt="car model"
                          fill
                          sizes="100%"
                          priority
                          className="object-contain pt-3"
                        />
                      </div>

                      <div className="flex-1 relative w-full h-24 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          alt="car model"
                          fill
                          sizes="100%"
                          priority
                          className="object-contain"
                        />
                      </div>

                      <div className="flex-1 relative w-full h-24 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          alt="car model"
                          fill
                          sizes="100%"
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col ">
                    <h2 className="font-semibold flex justify-center text-lg capitalize bg-black text-gray-200 py-2">
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right"
                          key={key}
                        >
                          <h4 className="text-gray capitalize text-gray-500">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="font-semibold text-lime-950">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
