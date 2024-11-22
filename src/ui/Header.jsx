import React, { useState } from "react";
import logo from "../assets/logo.png";

function Header() {
  // State to track the currently selected menu item
  const [activeItem, setActiveItem] = useState("Home");

  // Menu items array for dynamic rendering
  const menuItems = ["Home", "Stories", "Service", "Contact"];

  return (
    <div className="flex justify-between items-center w-full bg-transparent fixed top-[40px] left-0 px-[5rem]">
      <div className="flex items-center gap-2">
        <p className="bg-gradient-to-b from-[#D7FD44] to-[#5C6B20] bg-clip-text text-transparent text-[24px] font-[400]">
          TRANSFORM<br /> WITH TUNA
        </p>
        <img src={logo} alt="logo" className="w-[3.125rem] h-[3.125rem]" />
      </div>
      <ul className="flex justify-center items-center h-[4.25rem] w-[38rem] p-[0.6rem] text-white text-[1rem] font-[700] list-none bg-[#4D4D4D] border-1 rounded-[200px]">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`flex items-center justify-center rounded-[46px] w-[146px] h-[48px] cursor-pointer ${
              activeItem === item ? "bg-[#D7FD44] text-black" : "bg-none"
            }`}
            onClick={() => setActiveItem(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
