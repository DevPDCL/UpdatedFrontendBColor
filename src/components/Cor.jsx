import React from "react";
import { service } from "../constants";
import { technologies } from "../constants";

function Cor() {
  return (
    <>
      <h3 className="text-gray-900/50  text-center text-[28px] font-ubuntu">
        Corporate Partners
      </h3>

      <div className=" flex flex-row flex-wrap mt-10 sm:w-[80%] max-w-screen-xl mx-auto justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <img src={technology.icon} />
          </div>
        ))}
      </div>
      <h3 className="text-gray-900/50  text-center  text-[28px] font-ubuntu">
        Service Partners
      </h3>

      <div className=" flex flex-row flex-wrap  sm:w-[80%] max-w-screen-xl mx-auto justify-center">
        {service.map((technology) => (
          <div className="w-[300px] p-5 h-28" key={technology.name}>
            <img src={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Cor;
