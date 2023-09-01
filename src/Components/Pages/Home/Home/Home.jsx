import Header from "@/Components/Shared/Header/Header";
import React from "react";
import Banner from "../Banner/Banner";
import Thrillers from "../Thrillers/Thrillers";

const Home = () => {
  return (
    <div className="bg-[#000000]"> 
      <div className="relative">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header></Header>
        </div>
        <Banner></Banner>
      </div>
      <Thrillers></Thrillers>
    </div>
  );
};

export default Home;
