import React from "react";
import HomeStart from "../components/HomeStart";
import HomeCustomerData from "../components/HomeCustomerData";

function Home() {
  return (
    <div className="w-full h-fit">
      <HomeStart />
      <HomeCustomerData />
    </div>
  );
}

export default Home;
