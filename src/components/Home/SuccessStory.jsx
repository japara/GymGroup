import React, { useState, useEffect } from "react";
import { useGetAllSuccessStories } from "../../hooks/useGetAllSuccesStories";
import Arrow from "./Arrow";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";

function SuccessStory() {
  const { data, isLoading, isError, error } = useGetAllSuccessStories();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1008); // Adjust breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong: {error?.message || "Unknown error"}</p>;
  }

  return (
    <div className="border border-[#4D4D4D] flex flex-col items-center p-[80px] m-[80px] rounded-2xl">
      <div className="w-full flex justify-start">
        <Arrow count={isMobile ? 2 : 4} direction="right" />
      </div>
      <div className="w-full ">
        <Swiper
          key={isMobile}
          spaceBetween={20}
          slidesPerView={isMobile ? 1 : 4} // 3 slides per row
          grid={{
            rows: isMobile ? 1 : 3, // 3 rows for the grid
          }}
          loop={true}
          className="w-full"
        >
          {data.successStory.map((el, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center ml-[4%]"
            >
              <img
                src={el.image}
                alt={el.name || "Success image"}
                className="w-[305px] h-[190px] object-cover m-[50px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full flex justify-end">
        <Arrow count={isMobile ? 2 : 4} direction="left" />
      </div>
    </div>
  );
}

export default SuccessStory;
