import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Arrow = ({ count = 1, direction = "right" }) => {
  const isRight = direction === "right";
  const generateOpacity = (index, total) => {
    return 0.2 + (index / (total - 1)) * 0.8; // Scale opacity from 20% to 100%
  };

  return (
    <div
      className={`flex ${
        isRight ? "flex-row" : "flex-row-reverse"
      } items-center justify-center`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <IoIosArrowForward
          key={index}
          className={`text-[80px] mx-[-25px]`}
          style={{
            opacity: generateOpacity(index, count),
            transform: isRight ? "rotate(0deg)" : "rotate(180deg)",
            fill: `url(#gradient)`,
            strokeWidth: 2,
          }}
        />
      ))}

      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#D7FD44", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#737373", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Arrow;
