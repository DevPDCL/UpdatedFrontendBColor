import React, { useState, useEffect } from "react";
import video from "../assets/heroVideo.mp4";
import { motion } from "framer-motion";

const contentSets = [
  { text: "A Well equipped Cutting-edge solution provider ", buttonText: "Explore more" },
  {
    text: "High quality, Appropriate and Accessible medical care",
    buttonText: "Learn more",
  },
  {
    text: "The art of our medical service  amuses the patient",
    buttonText: "Know more",
  },
  {
    text: "The trusted and friendly medical professionals",
    buttonText: "Discover more",
  },
];

const textVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const buttonVariants = {
  hidden: { xim : 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === contentSets.length - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative">
        <video
          className="h-[500px] sm:h-[500px] w-full object-cover object-center top-0 left-0 pb-[1px]"
          src={video}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white flex justify-center items-center backdrop-blur-sm p-10">
          <div className="mt-0 sm:mt-[10px]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 1.5 }}
              key={activeIndex}
              className="text-center">
              <h1 className="text-[35px] md:text-[50px] text-gray-800 font-bold">
                {contentSets[activeIndex].text}
              </h1>
              <motion.button
                initial="hidden"
                animate="visible"
                variants={buttonVariants}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-4 bg-[#00984a] text-white py-2 px-4 rounded">
                {contentSets[activeIndex].buttonText}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
