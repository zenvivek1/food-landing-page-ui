// import React from "react";
import foodImg from "../assets/foof1-removebg-preview.png"

const Hero = () => {
  return (
    <div className="min-h-[65vh] bg-orange-400/65 w-full flex justify-center items-center gap-10 flex-wrap lg:text-start text-center py-10">
      <div>
        <div>
          <div className="text-7xl font-bold text-white lg:leading-20 leading-18 mb-4">
            Are you starving?
          </div>
          <div className="text-lg mb-6">
            Within a few clicks, find meals that are accessible near you
          </div>
        </div>

        <div className="bg-white rounded-2xl min-w-4/10 lg:scale-100 scale-80">
          <div className="flex p-4 gap-3">
            <button className="py-1 px-6 font-bold text-orange-600/90 bg-orange-100 rounded cursor-pointer transition ease hover:scale-105">
              <i className="ri-motorbike-fill mr-2"></i>Delivery
            </button>
            <button className="py-1 px-6 font-bold text-zinc-600 cursor-pointer transition ease hover:scale-105">
              <i className="ri-briefcase-line mr-2"></i>Pickup
            </button>
          </div>
          <div className="h-0.5 bg-zinc-200 w-full"></div>
          <div className="flex p-4 gap-2 items-center">
            <div className="relative w-7/10">
              <input
                className="w-full px-4 py-3 pl-10 outline-none bg-zinc-200/40 rounded-lg"
                type="text"
                placeholder="Enter Your Address"
              />
              <i className="ri-map-pin-2-fill absolute left-3 top-1/2 -translate-y-1/2 text-xl text-orange-500"></i>
            </div>
            <button className="py-4 px-8 bg-orange-500 rounded-lg text-white font-bold text-nowrap cursor-pointer transition ease hover:bg-orange-600">
              <i className="ri-search-line font-bold mr-2"></i>Find Food
            </button>
          </div>
        </div>

      </div>
      <div>
        <img className="h-100 lg:scale-100 scale-80 shadow-2xl rotate-2 hover:rotate-6" src={foodImg} alt="foodimg" />
      </div>
    </div>
  );
};

export default Hero;
