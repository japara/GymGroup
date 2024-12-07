import React from "react";
import HomeStart from "../components/Home/HomeStart";
import HomeCustomerData from "../components/Home/HomeCustomerData";
import FitnessJourney from "../components/Home/FitnessJourney";
import SuccessStory from "../components/Home/SuccessStory";
import HomeAboutMe from "../components/Home/HomeAboutMe";
import HomeContact from "../components/Home/HomeContact";

function Home() {
  return (
    <div className="w-full h-fit">
      <HomeStart />
      <HomeCustomerData />
      <FitnessJourney />
      <HomeAboutMe />
      <SuccessStory />
      <HomeContact />
    </div>
  );
}

export default Home;
