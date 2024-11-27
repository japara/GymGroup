import { useGetAllServices } from "../../hooks/useGetAllServices";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function FitnessJourney() {
  const { data, isLoading, isError, error } = useGetAllServices();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong: {error?.message || "Unknown error"}</p>;
  }

  return (
    <div className="p-[80px]">
      <p className="text-[32px]  mb-[24px] font-[700] text-left  text-transparent bg-gradient-to-b from-[#C4C4C4] to-[#7E7E7E] bg-clip-text">
        Your Fitness Journey Starts Here
      </p>
      <Swiper spaceBetween={20} slidesPerView="auto" className="w-full h-full">
        {data.services.map((el) => (
          <SwiperSlide key={el.id} className="!w-[305px] flex-shrink-0 gap-4">
            <div className="group w-full h-[335px] flex flex-col text-left transition-all duration-300 p-2 border rounded-[14px] border-[#4d4d4d]">
              {/* Image */}
              <img
                src={el.image}
                alt={el.name || "Service image"}
                className="w-full h-[90%] rounded- object-cover transition-transform duration-300 group-hover:h-[50%]"
              />

              {/* Name */}
              <p className="text-white font-bold text-lg mt-2">{el.name}</p>

              {/* Description */}
              <p className="text-white hidden text-[14px] group-hover:block transition-all duration-300 whitespace-normal overflow-hidden text-ellipsis">
                {el.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FitnessJourney;
