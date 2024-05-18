import React from "react";
import { Sidemenu } from "../components";
import { SardinRahman } from "../assets";

const Dmd = () => {
  return (
    <div className="bg-[#F5FFFA]">
      <Sidemenu />
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 shadow-2xl bg-gray-100/5 p-5 rounded gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="relative lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <div className="me-auto h-auto w-auto">
                  {/* SVG background container */}
                  <div className="relative">
                    {/* SVG positioned absolutely */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 288 288"
                      className="absolute bottom-5 ml-20 h-full w-auto opacity-50"
                      style={{ transform: "scale(1.5)" }}>
                      <linearGradient
                        id="PSgrad_0"
                        x1="70.711%"
                        x2="0%"
                        y1="70.711%"
                        y2="0%">
                        <stop offset="0%" stopColor="#52CC99" stopOpacity="1" />
                        <stop
                          offset="100%"
                          stopColor="#00984a"
                          stopOpacity="1"
                        />
                      </linearGradient>
                      <path fill="url(#PSgrad_0)">
                        <animate
                          repeatCount="indefinite"
                          attributeName="d"
                          dur="5s"
                          values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
                        />
                      </path>
                    </svg>
                    {/* Image with relative positioning */}
                    <img
                      src={SardinRahman}
                      alt="Sardin Rahman"
                      className="relative z-10 h-full mx-auto w-auto rounded-3xl "
                    />
                  </div>
                  <h1 className="text-gray-900 text-center text-[36px] font-bold">
                    Sardin Rahman
                  </h1>
                  <p className="text-[#00984a] text-center text-[20px] font-medium">
                    Deputy Managing Director
                  </p>
                </div>
              </div>
            </div>
            <div className="m-1 p-10 text-start">
              <div className="flex flex-row max-w-7xl">
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
