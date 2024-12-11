import React from "react";
import ErorrDisplay from "../components/erorrs/ErorrDisplay";
import PricesContainer from "../components/service-price/PricesContainer";
import { useGetPrice } from "../hooks/useGetPrice";
import "ldrs/ring"; 
import SkeletonLoader from "../components/loaders/SkeletonLoader";


const Prices = () => {
  const { data, isLoading, isError, error } = useGetPrice();


  if (isLoading) {
    return <SkeletonLoader/>;
  }
  if (isError) {
    return (
      <div className="md:max-w-[1280px] md:mx-auto flex flex-col gap-4 py-10">
        <ErorrDisplay error={error.message} />
      </div>
    );
  }

  if (!data || !Array.isArray(data.services)) {
    console.error("Invalid data structure:", data);
    return (
      <div className="md:max-w-[1280px] md:mx-auto flex flex-col gap-4 py-10">
        <ErorrDisplay error="Invalid data structure." />
      </div>
    );
  }

  return (
    <div className="md:max-w-[1280px] md:mx-auto flex flex-col gap-4 py-10 ">
      <h1 className="text-sm font-bold uppercase leading-normal gradient-main pb-4 md:text-2xl px-[37px] 2xl:px-0">
        Prices
      </h1>
      {data.services.map((service) => (
        <PricesContainer
          key={service.id}
          name={service.name}
          fivePrice={service.sessions_five}
          tenPrice={service.sessions_ten}
          singlePrice={service.sessions_single}
        />
      ))}
    </div>
  );
};

export default Prices;
