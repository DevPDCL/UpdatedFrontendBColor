import React, { useState } from "react";
import { Nav, Navbar, Sidemenu, Bottommenu, Tech } from "../components";
import { motion } from "framer-motion";
import { notice } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

const ProjectCard = (
  { index, noticeID, noticeImage, noticeHead, noticeDetail },
  { content, initiallyExpanded = false }
) => {
  const [expanded, setExpanded] = useState(initiallyExpanded);

  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div className="bg-gradient-to-b from--[#F5FFFA]/20 to-[#f0fff0]/90 shadow-2xl rounded-2xl h-auto sm:w-[299px] w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
          <Popover placement="center">
            <PopoverHandler>
              <div
                className="relative w-full h-[150px]"
                data-modal-target="default-modal"
                data-modal-toggle="default-modal">
                <img
                  src={noticeImage}
                  alt="project_image"
                  className="w-full h-[150px] rounded-md object-cover sm:w-[299px] opacity-95"
                />
              </div>
            </PopoverHandler>
            <PopoverContent>
              <div className="flex flex-wrap w-[299px] h-auto">
                <div
                  className="relative w-auto h-auto"
                  data-modal-target="default-modal"
                  data-modal-toggle="default-modal">
                  <img
                    src={noticeImage}
                    alt="project_image"
                    className="w-auto h-auto rounded-md object-cover sm:w-[299px] opacity-95"
                  />
                </div>

                <div>
                  <p className="text-[#006642] font-ubuntu font-bold text-[15px]">
                    {noticeHead}
                  </p>
                  <p className="text-gray-900">{noticeDetail}</p>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <div className="mt-0 p-5">
            <p className="text-[#006642] font-ubuntu text-[15px]">
              {noticeHead}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

function Notice({ imageSrc, altText, content }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <div className="bg-[#F5FFFA]">
      <div className=" fixed top-[10%] left-[80%] w-[50%] h-[50%] bg-[#B2D8B2] blur-3xl rounded-full opacity-30 mix-blend-multiply  animate-blob animation-delay-2000">
        {" "}
      </div>
      <div className=" fixed top-[50%] left-[85%] w-[40%] h-[50%] bg-[#1b7ced] blur-3xl rounded-full opacity-15 mix-blend-multiply animate-blob animation-delay-4000">
        {" "}
      </div>
      <div className=" fixed top-[25%] left-[85%] w-[30%] h-[50%] bg-[#B2D8B2] blur-3xl rounded-full opacity-30 mix-blend-multiply animate-blob animation-delay-6000">
        {" "}
      </div>
      <Nav />

      <Navbar />
      <Sidemenu />
      <Bottommenu />
      <motion.div variants={textVariant()}>
        <div className="flex flex-col pt-[150px] mx-auto max-w-7xl">
          <h2 className="text-gray-900/50 pb-10 text-center pl-2 text-[28px] font-bold font-ubuntu">
            KEEPING YOU INFORMED
          </h2>
        </div>
      </motion.div>

      <div className=" flex mx-auto pb-10 pt-2 p-3 sm:w-[80%] max-w-7xl justify-center flex-wrap gap-7">
        {notice.map((project, noticeID) => (
          <ProjectCard
            key={`noticeID-${noticeID}`}
            noticeID={noticeID}
            {...project}
          />
        ))}
      </div>
      <Tech />
    </div>
  );
}

export default Notice;
