import React from "react";
import { Sidemenu } from "../components";

import { SardinRahman } from "../assets";
const Dmd = () => {
  return (
    <div className="bg-[#F5FFFA]">
      <Sidemenu />
      <div className="overflow-hidden  bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 shadow-2xl bg-gray-100/5 p-5 rounded gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8  lg:pt-4">
              <div className="lg:max-w-lg">
                <div className="me-auto h-auto w-auto">
                  <h1 className="text-gray-900 pt-10 text-[36px] font-bold">
                    Sardin Rahman
                  </h1>
                  <p className="text-[#006642] text-[20px] font-medium">
                    Deputy Managing Director
                  </p>
                  <img src={SardinRahman} className="h-auto  p-5 w-auto" />
                </div>
              </div>
            </div>
            <div className=" m-1 p-10   text-start">
              <div className="flex flex-row  max-w-7xl   ">
                <div className="me-auto h-auto w-auto">
                  <p className="text-gray-500 p-5">
                    **Message will be updated soon**
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dmd;
