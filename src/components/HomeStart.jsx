import React from "react";
import HomeBG from "../assets/HomeBG.jpeg";

function HomeStart() {
  return (
    <div
      className="relative w-full h-[797px] bg-cover bg-center flex items-center text-white pl-[80px]"
      style={{ backgroundImage: `url(${HomeBG})` }}
    >
      {/* Overlay for Opacity */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <p className="relative text-3xl md:text-5xl font-bold text-center bg-gradient-to-b from-[#FFFFFF] to-[#999999]/50 bg-clip-text text-transparent">
        Stronger Every Day,
        <br /> Inside and Out
      </p>
    </div>
  );
}

export default HomeStart;
