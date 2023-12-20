import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

import localFont from "next/font/local";

const dance = localFont({
  src: "../fonts/DancingScript-Regular.ttf",
});

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-20 bg-black" id="footer">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start">
          <Image
            src="/companylogo.png"
            alt="logo"
            width={150}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-400">
            Deluxe Cars 1997 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link, index) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold text-amber-700">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-400"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-600 sm:px-16 px-6 py-10 max-lg:flex-col">
        <div className="w-1/3 text-gray-400 flex justify-center max-lg:w-full">
          @2023 Carhub. All rights reserved
        </div>
        <div
          className={`${dance.className} w-1/3 text-amber-700 text-2xl flex justify-center max-lg:w-full max-lg:mt-4`}
        >
          Life's a journey, enjoy your ride
        </div>
        <div className="footer__copyrights-link w-1/3 flex justify-center max-lg:w-full max-lg:mt-4">
          <Link href="/" className="text-gray-400">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-400">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
