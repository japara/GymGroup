import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

  // Show the burger menu icon with a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBurger(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Stories", path: "/stories" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`flex justify-between items-center w-full fixed top-0 left-0 px-6 py-4 md:px-20 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#242424] shadow-lg" : "bg-transparent"
      }`}
    >
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
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-[46px] font-bold ${
                isActive
                  ? "bg-[#D7FD44] text-black"
                  : "text-[#C4C4C4] hover:bg-[#D7FD44] hover:text-black"
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </NavLink>
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
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `cursor-pointer px-4 py-2 rounded-[46px] w-full text-center ${
                      isActive
                        ? "bg-[#D7FD44] text-black"
                        : "hover:bg-[#D7FD44] hover:text-black"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
