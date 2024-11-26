import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the burger menu

function Header() {
  const [activeItem, setActiveItem] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false); // State for burger menu toggle
  const menuItems = ["Home", "Stories", "Service", "Contact"];
  const [showBurger, setShowBurger] = useState(false); // Track if burger icon is shown

  React.useEffect(() => {
    // Add a small delay before showing the burger icon
    const timer = setTimeout(() => {
      setShowBurger(true);
    }, 300); // Delay in milliseconds (adjust as needed)
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="flex justify-between items-center w-full bg-transparent fixed top-0 left-0 px-6 py-4 md:px-20 z-50">
      {/* Logo and Title */}
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="logo" className="w-12 h-12" />
        <p className="bg-gradient-to-b from-[#D7FD44] to-[#5C6B20] bg-clip-text text-transparent text-lg md:text-2xl font-semibold">
          TRANSFORM
          <br /> WITH TUNA
        </p>
      </div>

      {/* Full Menu for Larger Screens */}
      <nav className="hidden md:flex gap-8 bg-[#222222] p-4 rounded-[46px] border border-[#4D4D4D]">
        {menuItems.map((item) => (
          <button
            key={item}
            className={`px-4 py-2 rounded-[46px] font-bold ${
              activeItem === item
                ? "bg-[#D7FD44] text-black"
                : "text-[#C4C4C4] hover:bg-[#D7FD44] hover:text-black"
            }`}
            onClick={() => setActiveItem(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Burger Menu Icon with Appearance Transition */}
      <div className="flex items-center md:hidden">
        <button
          className={`text-2xl p-2 focus:outline-none transform transition-all duration-800 ${
            showBurger
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <FaTimes className="text-[#D7FD44]" />
          ) : (
            <FaBars className="text-[#D7FD44]" />
          )}
        </button>
      </div>

      {/* Burger Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-[70px] right-0 bg-[#4D4D4D] text-[#D7FD44] w-64 p-4 md:hidden">
          <ul className="flex flex-col gap-4 items-center">
            {menuItems.map((item) => (
              <li
                key={item}
                className={`cursor-pointer px-4 py-2 rounded-[46px] w-full text-center ${
                  activeItem === item
                    ? "bg-[#D7FD44] text-black"
                    : "hover:bg-[#D7FD44] hover:text-black"
                }`}
                onClick={() => {
                  setActiveItem(item);
                  setMenuOpen(false); // Close menu after selecting an item
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
