import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="hidden fixed md:block">
        <div>
          <Link to="/branch" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-900/50 fixed p-3  hover:cursor-pointer font-extrabold rounded-none">
              <p className="fixed  text-gray-400 rounded  p-2 top-[350px] flex right-[50px]   gradient-alt-flow">
                Hotline
              </p>
              <a
                target="_blank"
                className={`fixed touch-pinch-zoom top-[370px] flex right-0   bg-emerald-900/80 shadow-md ${
                  isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="w-[50px] h-[3px] bg-[#00664a]" />
              </a>
            </div>
          </Link>
          <div className="bg-gray-900/50 fixed p-3 hover:cursor-pointer font-extrabold rounded-none">
            <p className="fixed  rounded touch-pinch-zoom p-2 top-[400px] text-gray-400 flex right-[50px]   gradient-alt-flow">
              Messanger
            </p>
            <a
              className={`fixed touch-pinch-zoom top-[420px] flex right-0   bg-emerald-900/80 shadow-md ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="w-[50px] h-[3px] bg-[#00664a]" />
            </a>
          </div>
          <Link to="/report" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-900/50 fixed p-3 hover:cursor-pointer font-extrabold rounded-none">
              <p className="fixed rounded touch-pinch-zoom p-2 top-[450px] flex text-gray-400 right-[50px]   gradient-alt-flow ">
                Report Download
              </p>
              <a
                target="_blank"
                className={`fixed touch-pinch-zoom top-[470px] flex right-0   bg-emerald-900/80 shadow-md ${
                  isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="w-[50px] h-[3px] bg-[#00664a]" />
              </a>
            </div>
          </Link>
          <Link to="/sample" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-900/50 fixed p-3 hover:cursor-pointer font-extrabold rounded-none">
              <p className="fixed rounded touch-pinch-zoom p-2 top-[500px] flex right-[50px] opacity-80  text-gray-400 gradient-alt-flow">
                Sample Collection
              </p>
              <a
                target="_blank"
                className={`fixed touch-pinch-zoom top-[520px] flex right-0   bg-emerald-900/80  ${
                  isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="w-[50px] h-[3px] bg-[#00664a]" />
              </a>
            </div>
          </Link>

          <div className="bg-gray-900/50 fixed p-3 hover:cursor-pointer font-extrabold rounded-none">
            <p className="fixed rounded touch-pinch-zoom p-2 top-[550px] flex right-[50px]    gradient-alt-flow">
              Video Consutancy
            </p>
            <a
              target="_blank"
              className={`fixed touch-pinch-zoom top-[570px] flex right-0   bg-emerald-900/80 shadow-md ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="w-[50px] h-[3px] bg-[#00664a]" />
            </a>
          </div>

          <Link to="/complain" target="_blank" rel="noopener noreferrer">
            <div className="bg-gray-900/50 fixed p-3 hover:cursor-pointer font-extrabold rounded-none">
              <p className="fixed rounded touch-pinch-zoom p-2 top-[600px] flex right-[50px]  gradient-alt-flow">
                Complain Submition
              </p>
              <a
                target="_blank"
                className={`fixed touch-pinch-zoom top-[620px] flex right-0   bg-emerald-900/80 shadow-md ${
                  isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="w-[50px] h-[3px] bg-[#00664a]" />
              </a>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidemenu;
