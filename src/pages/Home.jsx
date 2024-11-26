import React from "react";
import HomeStart from "../components/Home/HomeStart";
import HomeCustomerData from "../components/Home/HomeCustomerData";

function Home() {
  return (
    <div className="w-full h-fit">
      <HomeStart />
      <HomeCustomerData />
    </div>
  );
}

export default Home;
