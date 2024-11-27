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
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {data.services.map((el) => (
        <SwiperSlide key={el.id}>
          <div className="relative group w-[305px] h-[335px] flex flex-col items-center text-left transition-all duration-300">
            {/* Image */}
            <img
              src={el.image}
              alt={el.name || "Service image"}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:h-[50%]"
            />

            {/* Name */}
            <p className="text-white font-bold text-lg mt-2">{el.name}</p>

            {/* Description (hidden by default) */}
            <p className="absolute top-[250px] text-white text-sm hidden group-hover:block transition-all duration-300">
              {el.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default FitnessJourney;
