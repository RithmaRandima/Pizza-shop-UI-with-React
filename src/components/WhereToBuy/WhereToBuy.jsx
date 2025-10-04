import React from "react";
import worldMap from "../../assets/world-map.png";

const WhereToBuy = () => {
  return (
    <div className="container my-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* form */}
        <div className="space-y-8">
          <h1>Buy our products from anywhere</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Name"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full input-style"
            />
          </div>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="w-full input-style"
            />
          </div>
          <button className="primary-btn w-full">Order Now</button>
        </div>
        {/* world map */}
        <div className="col-span-2">
          <img src={worldMap} className="w-full sm:w-[500px] mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
