import React, { useState, useEffect } from "react";
import video from "../assets/video.mp4";
import { motion } from "framer-motion";

const contentSets = [
  { text: "Popular Diagnostic Center Text 1", buttonText: "Button 1" },
  { text: "Popular Diagnostic Center Text 2", buttonText: "Button 2" },
  { text: "Popular Diagnostic Center Text 3", buttonText: "Button 3" },
  { text: "Popular Diagnostic Center Text 4", buttonText: "Button 4" },
];

const textVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const buttonVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === contentSets.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative">
        <video
          className="h-[500px] sm:h-[700px] w-full object-cover object-top top-0 left-0 pb-[1px]"
          src={video}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white flex justify-center items-center p-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1.5 }}
            key={activeIndex}
            className="text-center">
            <h1 className="text-[50px] text-gray-800 font-bold">
              {contentSets[activeIndex].text}
            </h1>
            <motion.button
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-4 bg-[#006642] text-white py-2 px-4 rounded">
              {contentSets[activeIndex].buttonText}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
