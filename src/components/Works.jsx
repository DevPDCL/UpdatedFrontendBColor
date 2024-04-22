import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { logo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

function Number({ n }){
   const countRef = useRef(null);
   useEffect(() => {
     const observer = new IntersectionObserver((entries) => {
       const entry = entries[0];
       if (entry.isIntersecting) {
         // Start the animation when the element is visible
         setIsVisible(true);
       }
     });

     if (countRef.current) {
       observer.observe(countRef.current);
     }

     return () => {
       if (observer) {
         observer.disconnect();
       }
     };
   }, [countRef.current]);

   const [isVisible, setIsVisible] = useState(false);
  const { number } = useSpring({
    from: { number: 0},
    number: n,
    delay: 500,
    config: { mass: 1, tension: 10, friction: 10},
  });
  return (
  <div ref={countRef} className="count-section">
    {isVisible && <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>}
  </div>
  )
}


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  video,
  source_code_link,
}) => {
  return (
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="grid md:grid-row-3 items-center sm:w-[379px] w-full justify-center mx-auto  md:gap-0 ">
        <div className="text-black m-2 bg-gray-100/5 shadow rounded  w-auto text-center">
          <div className="relative w-auto h-auto">
            <video
              src={video}
              alt="project_image"
              className="w-full h-[230px] rounded object-cover opacity-90"
              autoPlay
              loop
              muted
            />

            <div className="absolute inset-0 flex justify-end p-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="green-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={logo}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-0 p-5">
            <h3 className="text-gray-900 font-medium p-2 font-ubuntu text-[24px]">
              {name}
            </h3>
            <p className="mt-2 text-gray-500 font-medium font-ubuntu p-2 text-[16px]">
              {description}
            </p>
          </div>
          <div className="flex justify-center items-center pb-5">
            <button
              onClick={() => window.open(link, "_blank")}
              className="text-gray-500 font-ubuntu transition duration-300">
              View More
            </button>
          </div>
          {/* 
          <div className="mt-0 font-medium flex font-ubuntu flex-wrap p-2 gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] p-2 font-ubuntu ${tag.color}`}
              >
                #{tag.name}

              </p>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

const Works = () => {
 
  return (
    <>
      <div className=" absolute top-10 left-[20%] w-[30%] h-72 bg-[#B2D8B2] blur-2xl rounded-full opacity-30 mix-blend-multiply  animate-blob animation-delay-2000">
        {" "}
      </div>
      <div className=" absolute top-5 left-[40%] w-[30%] h-72  bg-[#1b7ced] blur-2xl  rounded-full opacity-15 mix-blend-multiply animate-blob animation-delay-4000">
        {" "}
      </div>
      <div className=" absolute top-10 left-[60%] w-[30%] h-72 bg-[#B2D8B2] blur-2xl  rounded-full opacity-30 mix-blend-multiply animate-blob animation-delay-6000">
        {" "}
      </div>

      <div className="relative fontFamily-ubuntu">
        <div className=" overflow-hidden  mt-[-140px] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-rows-1 rounded shadow bg-gray-100/5 p-5 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-rows-1">
              <div className="lg:pr-8 lg:pt-4">
                <div className="flex flex-wrap items-center justify-center mx-auto ">
                  <div className="flex flex-col items-center  mx-auto">
                    <div className="p-5 items-center mx-auto text-center">
                      <h6 className="text-slate-900  font-bold font-ubuntu text-[60px]">
                        <Number n={22} />
                      </h6>
                      <p className="text-gray-500 font-bold font-ubuntu text-[20px]">
                        BRANCHES
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col mx-auto ml-20">
                    <div className="p-5 items-center mx-auto text-center">
                      <h6 className="text-slate-900 flex flex-row font-bold font-ubuntu text-[60px]">
                        <Number n={7} />
                        <span>k+</span>
                      </h6>
                      <p className="text-gray-500 font-bold font-ubuntu text-[20px]">
                        SERVICES
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center mx-auto ml-20">
                    <div className="p-5 items-center mx-auto text-center">
                      <h6 className="text-slate-900 flex flex-row font-bold font-ubuntu text-[60px]">
                        <Number n={82} />
                        <span>k+</span>
                      </h6>
                      <p className="text-gray-500  font-bold font-ubuntu text-[20px]">
                        REGISTERED PATIENTS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-[50px] mx-auto  max-w-7xl">
          <h2 className="text-gray-500/50 pb-2 text-center pl-2 text-[28px] font-bold font-ubuntu">
            EXPLORE HEALTH PLUS
          </h2>
        </div>

        <div className="flex  mx-auto p-0 justify-center  justify-items-center flex-wrap  gap-0">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <a href="/">
          <p className="text-gray-500 pt-1 text-end pr-20 text-[20px] font-medium font-ubuntu">
            View More.....
          </p>
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
