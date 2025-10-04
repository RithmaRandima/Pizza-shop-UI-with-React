import React from "react";
import { BsGoogle, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaLocationArrow, FaX, FaYoutube } from "react-icons/fa6";
import { PiPaypalLogoThin, PiPhoneFill } from "react-icons/pi";
import CreditCard from "./CreditCard/CreditCard";
import { SiExpress, SiPayoneer, SiVisa } from "react-icons/si";
import { RiMastercardFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="mt-3 bg-gradient-to-r from-orange-300 to-orange-400 pt-12 pb-8 text-white ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-5">
          {/* col 01 */}
          <div className="space-y-[20px]">
            <h1 className="uppercase font-bold text-[20px]">COders Cafe</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab,
              velit laborum voluptatum dignissimos ipsa recusandae quisquam
              incidunt? Adipisci, nam!
            </p>
            <div className="flex items-center gap-3 my-2">
              <PiPhoneFill className="text-[17px]" />
              <p>+123 4567 8912</p>
            </div>
            <div className="flex items-center gap-3 my-2">
              <FaLocationArrow className="text-[17px]" />
              <p>Ahangama, Galle, Sri Lanka.</p>
            </div>
          </div>
          {/* col 02 */}
          <div className="space-y-[20px]">
            <h1 className="capitalize font-extralight text-[20px]">
              Quick Links
            </h1>
            <div>
              <p className="uppercase font-bold my-1">home</p>
              <p className="uppercase font-bold my-1">About</p>
              <p className="uppercase font-bold my-1">Contact</p>
              <p className="uppercase font-bold my-1">Search Pizzas</p>
              <p className="uppercase font-bold my-1">Privacy Policy</p>
            </div>
          </div>
          {/* col 03 */}
          <div className="space-y-[20px]">
            <h1 className="uppercase font-bold text-[20px]">Follow us</h1>

            <div className="flex items-center gap-3 my-2">
              <FaFacebook className="text-[17px]" />
              <BsInstagram className="text-[17px]" />
              <BsLinkedin className="text-[17px]" />
              <BsGoogle className="text-[17px]" />
              <FaX className="text-[17px]" />
              <FaYoutube className="text-[17px]" />
            </div>

            {/* credit card section */}
            <div className="mt-[20px]">
              <p>We accecpt</p>
              <div className="flex gap-2 my-2">
                <CreditCard icon={<SiVisa />} />
                <CreditCard icon={<RiMastercardFill />} />
                <CreditCard icon={<SiExpress />} />
                <CreditCard icon={<PiPaypalLogoThin />} />
                <CreditCard icon={<SiPayoneer />} />
              </div>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="border-t border-white pt-[20px] text-center">
          <p>Copyright &copy; 2025 Name. All rights reserved </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
