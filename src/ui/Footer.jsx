import React from "react";
import { IoLogoTiktok, IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import { PiXLogoLight } from "react-icons/pi";

function Footer() {
  return (
    <div className="border-t-1 bg-[#4D4D4D] text-[#C4C4C4];">
      <div className="flex">
        <p className="bg-gradient-to-b from-[#D7FD44] to-[#5C6B20] bg-clip-text text-transparent">
          TRANSFORM WITH TUNA
        </p>
        <img src="" alt="logo" />
      </div>
      <div className="flex flex-col">
        <ul className="flex">
          <li>Home</li>
          <li>About Me</li>
          <li>Success Story</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <p>© 2024 Transform with Tuna. All rights reserved.</p>
      </div>
      <div className="flex">
        <IoLogoFacebook />
        <IoLogoInstagram />
        <IoLogoTiktok />
        <PiXLogoLight />
      </div>
    </div>
  );
}

export default Footer;
