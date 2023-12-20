"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CustomButton } from ".";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

interface menuProps {
  closeMenu: () => void;
  isOpen: boolean;
}

const Menu = ({ isOpen, closeMenu }: menuProps) => {
  const { data: session, status } = useSession();
  // const router = useRouter()

  // const handleSignin = () => {
  //     closeMenu()
  //     router.push("/signin")
  // }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeMenu}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full p-4 justify-center">
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
                  className="w-full max-w-[400px] transform overflow-hidden mt-28 
                 rounded-2xl shadow-lg transition-all pattern-dots pattern-blue-200 pattern-bg-white 
                 pattern-size-2 pattern-opacity-100 modalShadow"
                >
                  <Dialog.Title
                    as="h3"
                    className="flex justify-center items-center text-lg font-medium text-center text-white h-20 bg-gradient-to-r from-amber-700 to-black"
                  >
                    Sign In / Sign Up
                  </Dialog.Title>

                  <div className="flex flex-row w-full mt-8 z-[999]">
                    {!session ? (
                      <div className="w-1/2 flex justify-center">
                        <Link
                          href="/api/auth/signin?callbackUrl=/"
                          className="outline-none"
                        >
                          <CustomButton
                            title="sign in"
                            btnType="button"
                            containerStyles="text-white text-md rounded-full 
                            min-w-[101px] h-10 shadow-md max-sm:w-[80px] 
                            max-sm:text-sm max-sm:h-8 bg-gradient-to-r from-amber-700 to-black"
                            handleClick={closeMenu}
                          />
                        </Link>
                      </div>
                    ) : (
                      <div className="w-1/2 flex justify-center">
                        <Link
                          href="/api/auth/signout?callbackUrl=/"
                          className="outline-none"
                        >
                          <CustomButton
                            title="sign out"
                            btnType="button"
                            containerStyles="text-white text-md rounded-full 
                            min-w-[101px] h-10 shadow-md max-sm:w-[80px] 
                            max-sm:text-sm max-sm:h-8 bg-gradient-to-r from-amber-700 to-black"
                            handleClick={closeMenu}
                          />
                        </Link>
                      </div>
                    )}

                    <div className="w-1/2 flex justify-center">
                      <Link href="/signup" className="outline-none">
                        <CustomButton
                          title="sign up"
                          btnType="button"
                          containerStyles="text-white text-md rounded-full 
                            min-w-[101px] h-10 shadow-md max-sm:w-[80px]
                            max-sm:text-sm max-sm:h-8 bg-gradient-to-r from-amber-700 to-black"
                          handleClick={closeMenu}
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="absolute top-2 right-2">
                    <button
                      type="button"
                      className="w-7 height-2 bg-whitejustify-center rounded-full text-md font-medium text-white border-2 border-white"
                      onClick={closeMenu}
                    >
                      X
                    </button>
                  </div>

                  <div className="w-full flex justify-center mt-10">
                    <Image
                      src="/toyotafrontview.png"
                      alt="toyota"
                      width={300}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <Link
                    href="/"
                    className="w-full flex justify-center items-center mt-2 pr-1 mb-12"
                  >
                    <Image
                      src="/logo.svg"
                      alt="logo"
                      width={118}
                      height={18}
                      className="object-contain"
                      onClick={closeMenu}
                    />
                  </Link>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Menu;
