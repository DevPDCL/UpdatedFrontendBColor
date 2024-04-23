import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-tailwind/react";
import "./tabs.css";

const Sidemenu = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < window.innerHeight / 0.25); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);
  return (
    <>
      <div>
        <div className="hidden md:block">
          <div>
            <Link to="/branch" target="_blank" rel="noopener noreferrer">
              <Tooltip
                className="bg-gray-900/50  p-3  hover:cursor-pointer font-extrabold rounded-none"
                content="Hotline"
                placement="left"
              >
                <a
                  target="_blank"
                  className={`fixed touch-pinch-zoom top-[220px]  right-0   bg-emerald-900/80 shadow-md ${
                    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <hr class="border-[1px]  w-20 border-[#1b7ced]" />
                </a>
              </Tooltip>
            </Link>

            <Link to="/sample" target="_blank" rel="noopener noreferrer">
              <Tooltip
                className="bg-gray-900/50  p-3 hover:cursor-pointer font-extrabold rounded-none"
                content="Sample Collection"
                placement="left"
              >
                <a
                  target="_blank"
                  className={`fixed top-[270px]  right-0 bg-emerald-900/80 shadow-md ${
                    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <hr class="border-[1px]  w-20 border-[#1b7ced]" />
                </a>
              </Tooltip>
            </Link>

            <Tooltip
              className="bg-gray-900/50  p-3 hover:cursor-pointer font-extrabold rounded-none"
              content="Video Consultancy"
              placement="left"
            >
              <a
                target="_blank"
                className={`fixed top-[320px] right-0 bg-emerald-900/80  shadow-md ${
                  isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <hr class="border-[1px]  w-20 border-[#1b7ced]" />
              </a>
            </Tooltip>

            <Link to="/patient" target="_blank" rel="noopener noreferrer">
              <Tooltip
                className="bg-gray-900/50  p-3 hover:cursor-pointer font-extrabold rounded-none"
                content="Report Download"
                placement="left"
              >
                <a
                  target="_blank"
                  className={`fixed top-[370px]   right-0 bg-emerald-900/80 shadow-md ${
                    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <hr class="border-[1px]  w-20 border-[#1b7ced]" />
                </a>
              </Tooltip>
            </Link>

            <Link to="/complain" target="_blank" rel="noopener noreferrer">
              <Tooltip
                className="bg-gray-900/50  p-3 hover:cursor-pointer font-extrabold rounded-none"
                content="Complain Submission"
                placement="left"
              >
                <a
                  target="_blank"
                  className={`fixed top-[420px]   right-0 bg-emerald-900/80 shadow-md ${
                    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <hr class="border-[1px]  w-20 border-[#1b7ced]" />
                </a>
              </Tooltip>
            </Link>

            <Link>
              {" "}
              <div
                className="bg-gray-900/50  p-3 hover:cursor-pointer font-extrabold rounded-none"
                content="Messanger"
                placement="left"
              >
                <a
                  target="_blank"
                  className={`fixed top-[470px]      right-0 bg-emerald-900/80 shadow-md ${
                    isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <hr class="border-[1px]  w-20 border-[#1b7ced]" />
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidemenu;
