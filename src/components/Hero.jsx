import { styles } from "../styles";
import React from "react";
import video from "../assets/video.mp4";



const Hero = () => {
  

  return (
    <>
      <section className="w-full h-screen  relative top-[110px] items-bottom">
        <video
          className=" w-full h-screen sm:object-cover object-cover object-top top-0 left-0"
          src={video}
          autoPlay
          loop
          muted
        />
        <div className="absolute w-full h-screen top-0 left-0 bg-gray-900/50"></div>
      </section>
    </>
  );
};

export default Hero;
