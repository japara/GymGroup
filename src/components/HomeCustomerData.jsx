import React from "react";
import star from "../assets/Star 1.png";

export default function HomeCustomerData() {
  return (
    <div className="w-full bg-[#D7FD44] h-[100px] flex justify-between items-center px-[80px]">
      <img src={star} className="w-fit h-fit"></img>
      <div>
        <p className="font-[800] text-[32px]">200 +</p>
        <p className="font-[500] text-[14px]">Happy Costumers</p>
      </div>
      <div>
        <p className="font-[800] text-[32px]">3 +</p>
        <p className="font-[500] text-[14px]">Years Of Training Experience</p>
      </div>
      <div>
        <p className="font-[800] text-[32px]">98 %</p>
        <p className="font-[500] text-[14px]">Customer Satisfaction</p>
      </div>
      <img src={star} className="w-fit h-fit"></img>
    </div>
  );
}
