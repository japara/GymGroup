import React from "react";
import { IoLogoTiktok, IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import { PiXLogoLight } from "react-icons/pi";

function Footer() {
  return (
    <div className="flex flex-col justify- h-fit py-[5rem] md:flex-row md:justify-between md:items-center px-[5rem] border-t-1 bg-[#242424] text-[#C4C4C4] relative bottom-0 left-0 w-full h-[15.25rem]">
      <div className="flex  md:items-center gap-2 mb-[40px] md:my-0 ">
        <p className="bg-gradient-to-b from-[#D7FD44] to-[#5C6B20] bg-clip-text text-transparent text-[24px] font-[400]">
          TRANSFORM
          <br /> WITH TUNA
        </p>
        <img src="/logo.png" alt="logo" className="w-[3.125rem] h-[3.125rem]" />
      </div>
      <div className="flex flex-col font-[400]">
        <ul className="flex flex-col gap-4 text-[20px] md:flex-row">
          <li>Home</li>
          <li>About Me</li>
          <li>Success Story</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <p className="text-[14px] my-[2rem] md:mt-[2rem] md:mb-[-4rem]">
          © 2024 Transform with Tuna. All rights reserved.
        </p>
      </div>
      <div className="flex gap-2 ">
        <IoLogoFacebook className="h-[2rem] w-[2rem]" />
        <IoLogoInstagram className="h-[2rem] w-[2rem]" />
        <IoLogoTiktok className="h-[2rem] w-[2rem]" />
        <PiXLogoLight className="h-[2rem] w-[2rem]" />
      </div>
    </div>
  );
}

export default Footer;
