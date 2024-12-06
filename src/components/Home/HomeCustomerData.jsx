import React from "react";

export default function HomeCustomerData() {
  return (
    <div className="w-full bg-[#D7FD44] h-[100px] flex flex-row justify-evenly items-center">
      <img
        src="Star 1.png"
        className="w-fit h-fit hidden md:block"
        alt="Star"
      />
      <div className="text-center flex-wrap md:text-left md:block">
        <p className="font-[700] text-[18px] md:text-[32px]">200 +</p>
        <p className="font-[700] text-[18px]">Happy Customers</p>
      </div>
      <div className="text-center flex-wrap md:text-left md:block">
        <p className="font-[800] text-[18px] md:text-[32px]">3 +</p>
        <p className="font-[700] text-[18px]">Years Of Training Experience</p>
      </div>
      <div className="text-center flex-wrap md:text-left md:block">
        <p className="font-[800] text-[18px] md:text-[32px]">98 %</p>
        <p className="font-[700] text-[18px]">Customer Satisfaction</p>
      </div>
      <img
        src="/Star 1.png"
        className="w-fit h-fit hidden md:block"
        alt="Star"
      />
    </div>
  );
}
