import React from "react";
import { IoLogoTiktok, IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import { PiXLogoLight } from "react-icons/pi";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="flex justify-between items-center px-[5rem] border-t-1 bg-[#242424] text-[#C4C4C4] relative bottom-0 left-0 w-full h-[15.25rem]">
      <div className="flex items-center gap-2">
        <p className="bg-gradient-to-b from-[#D7FD44] to-[#5C6B20] bg-clip-text text-transparent text-[24px] font-[400]">
          TRANSFORM
          <br /> WITH TUNA
        </p>
        <img src={logo} alt="logo" className="w-[3.125rem] h-[3.125rem]" />
      </div>
      <div className="flex flex-col font-[400]">
        <ul className="flex gap-4 text-[20px]">
          <li>Home</li>
          <li>About Me</li>
          <li>Success Story</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <p className="text-[14px] mt-[2rem] mb-[-4rem]">
          © 2024 Transform with Tuna. All rights reserved.
        </p>
      </div>
      <div className="flex gap-2">
        <IoLogoFacebook className="h-[2rem] w-[2rem]" />
        <IoLogoInstagram className="h-[2rem] w-[2rem]" />
        <IoLogoTiktok className="h-[2rem] w-[2rem]" />
        <PiXLogoLight className="h-[2rem] w-[2rem]" />
      </div>
    </div>
  );
}

export default Footer;
