import React, { useState, useEffect } from "react";
import { useGetAllSuccessStories } from "../../hooks/useGetAllSuccesStories";
import Arrow from "./Arrow";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        <Arrow count={4} direction="right" />
      </div>
      <div className=" w-full">
        {isMobile ? (
          // Swiper for smaller screens
          <Swiper
            spaceBetween={2}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            className="w-full"
          >
            {data.successStory.map((el) => (
              <SwiperSlide
                key={el.id}
                className="flex justify-center items-center "
              >
                <img
                  src={el.image}
                  alt={el.name || "Success image"}
                  className="w-full h-auto max-w-[60%] max-h-fit object-cover ml-[20%] mt-[50px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Flex layout for larger screens
          <div className="text-center gap-[92px] flex flex-wrap justify-center">
            {data.successStory.map((el) => (
              <img
                key={el.id}
                src={el.image}
                alt={el.name || "Success image"}
                className="w-[305px] h-[190px] object-cover"
              />
            ))}
          </div>
        )}
      </div>
      <div className="w-full flex justify-end">
        <Arrow count={4} direction="left" />
      </div>
    </div>
  );
}

export default SuccessStory;
