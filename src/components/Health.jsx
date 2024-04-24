import React from "react";
import { Nav, Navbar, Sidemenu, Bottommenu, Tech } from "../components";
import { healthPackages } from "../constants";

const calculateTotalCost = (tests) =>
  tests.reduce((acc, test) => acc + test.testPrice, 0);

const calculateSavings = (totalCost, discountedPrice) =>
  totalCost - discountedPrice;

const PackageCard = ({ packageData }) => {
  const totalCost = calculateTotalCost(packageData.packageIncludes);
  const savings = calculateSavings(totalCost, packageData.discountedPrice);
  return (
    <div className="relative bg-[#f0fff0]/50 z-10 max-w-7xl rounded-2xl overflow-hidden shadow-2xl p-4 m-4">
      <div className="absolute top-8 left-[18%] transform -rotate-45 -translate-x-1/2 translate-y-1/2 bg-[#1b7ced] shadow-xl px-[25%] py-3">
        <p className="text-[#ffffff] text-xl font-bold whitespace-nowrap">
          Save!{" "}
          {savings.toLocaleString("en-IN",)}
        </p>
      </div>
      <div className="pb-6 pt-12 font-bold text-[#36454F] text-2xl text-center mb-2">
        {packageData.packageHeading}
      </div>
      <div className="py-4 font-bold text-[#36454F] text-2xl text-center mb-2">
        {packageData.packageName}
      </div>
      <div className="divide-y divide-gray-200">
        {packageData.packageIncludes.map((test, index) => (
          <div key={index} className="flex justify-between gap-2 py-1 px-3">
            <span className="text-[#36454F]">{test.testName}</span>
            <span className="text-gray-700">
              {test.testPrice.toLocaleString("en-BD", {
                style: "currency",
                currency: "BDT",
              })}
            </span>
          </div>
        ))}
      </div>
      <div className="font-bold border-t-2 border-gray-400 my-3"></div>
      <div className="divide-y divide-gray-200">
        <div className=" flex justify-between gap-2 divide-y divide-gray-200">
          <p className="text-gray-700">Total Cost:</p>
          <p className="text-gray-700">
            {totalCost.toLocaleString("en-BD", {
              style: "currency",
              currency: "BDT",
            })}
          </p>
        </div>
        <div className=" flex justify-between gap-2">
          <p className="text-gray-700">Discounted Price:</p>
          <p className="text-gray-700 text-[20px] font-bold ">
            {" "}
            {packageData.discountedPrice.toLocaleString("en-BD", {
              style: "currency",
              currency: "BDT",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

const Health = () => {
  return (
    <div className="bg-[#F5FFFA]">
      <div className=" fixed top-[10%] left-[0%] w-[50%] h-[50%] bg-[#B2D8B2] blur-3xl rounded-full opacity-50 mix-blend-multiply  animate-blob animation-delay-2000">
        {" "}
      </div>
      <div className=" fixed top-[20%] left-[35%] w-[50%] h-[50%] bg-[#1b7ced] blur-3xl rounded-full opacity-20 mix-blend-multiply animate-blob animation-delay-4000">
        {" "}
      </div>
      <div className=" fixed top-[25%] left-[65%] w-[50%] h-[50%] bg-[#B2D8B2] blur-3xl rounded-full opacity-50 mix-blend-multiply animate-blob animation-delay-6000">
        {" "}
      </div>

      <Nav />
      <Navbar />
      <Sidemenu />
      <Bottommenu />
      <div className="flex mx-auto pb-10 pt-[150px] z-10 max-w-7xl justify-center flex-wrap gap-7">
        {healthPackages.map((packageData) => (
          <PackageCard key={packageData.packageID} packageData={packageData} />
        ))}
      </div>
      <Tech />
    </div>
  );
};

export default Health;
