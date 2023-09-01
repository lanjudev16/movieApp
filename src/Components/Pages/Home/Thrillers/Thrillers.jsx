import React from "react";
import ThrillerSlider from "./ThrillerSlider";

const Thrillers = () => {
  return (
    <div className="bg-[#000000]">
      <div className="mx-16">
        <h2 className="text-3xl font-semibold text-white mr-[64px] py-5">
          Thrillers
        </h2>
      </div>
        <ThrillerSlider className="my-5"></ThrillerSlider>
    </div>
  );
};

export default Thrillers;
