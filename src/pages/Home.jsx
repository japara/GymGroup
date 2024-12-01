import React from "react";
import HomeStart from "../components/Home/HomeStart";
import HomeCustomerData from "../components/Home/HomeCustomerData";
import FitnessJourney from "../components/Home/FitnessJourney";
import SuccessStory from "../components/Home/SuccessStory";

function Home() {
  return (
    <div className="w-full h-fit">
      <HomeStart />
      <HomeCustomerData />
      <FitnessJourney />
      <SuccessStory />
    </div>
  );
}

export default Home;
