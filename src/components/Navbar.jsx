import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import image from "../assets/logo.webp";

const NavLink = ({ to, children }) => {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={`px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline ${
        location.pathname === to ? "text-[#00664a]" : ""
      }`}>
      {children}
    </Link>
  );
};

const DropdownItem = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="block px-4 py-2 text-sm mx-5 my-3 text-gray-900 rounded w-[270px] font-medium group hover:bg-gray-200 hover:text-[#00664a]">
      {children}
    </Link>
  );
};

const Dropdown = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  // Added useEffect hook to handle clicks outside of the dropdown
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (open && !event.target.closest(".dropdown")) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [open]); // Dependency array includes 'open' to re-bind the event on state change

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="relative dropdown">
      {" "}
      {/* Added 'dropdown' class for reference */}
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
        {title}
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
            open ? "rotate-180" : "rotate-0"
          }`}>
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"></path>
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 mt-2 md:-ml-[550px]  bg-white rounded-b-xl shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

    useEffect(() => {
      const handleDocumentClick = (event) => {
        if (open && !event.target.closest(".navbar")) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleDocumentClick);

      return () => {
        document.removeEventListener("mousedown", handleDocumentClick);
      };
    }, [open]); 


return (
  <div className="sticky top-[1px] z-30 shadow-2xl">
    <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
      <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between p-4">
            <a className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
              <Link to="/" className="flex items-center gap-0">
                <img
                  src={image}
                  alt="Logo"
                  className="w-[45px] h-[45px] bg-none object-contain"
                />
              </Link>
            </a>
            <button
              className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
              onClick={() => setOpen(!open)}>
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  x-show={!open}
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <nav
            className={`${
              open ? "flex" : "hidden"
            } flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
            <NavLink to="/patient">Patient Portal</NavLink>
            <NavLink to="/health">Packages</NavLink>
            <NavLink to="/doctorsearch">Doctors</NavLink>
            <NavLink to="/branch">Branches</NavLink>
            <NavLink to="/notice">Notice</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Dropdown title="About Us">
              <div className="flex flex-wrap  md:gap-2 items-center">
                <DropdownItem to="/goals">
                  <div className="flex col-span-1 items-center">
                    <svg
                      className="w-[40px] h-[40px] p-2 rounded group-hover:bg-gray-200 bg-[#00664a]  fill-[#ffffff] group-hover:fill-[#00664a]"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg">
                      {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                      <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
                    </svg>
                    <p className="pl-5">Objectives & Goals</p>
                  </div>
                </DropdownItem>
                <DropdownItem to="/chairman">
                  <div className="flex col-span-1 items-center">
                    <svg
                      className="w-[40px] h-[40px] p-2 rounded group-hover:bg-gray-200 bg-[#00664a]  fill-[#ffffff] group-hover:fill-[#00664a]"
                      viewBox="0 0 640 512"
                      xmlns="http://www.w3.org/2000/svg">
                      {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"></path>
                    </svg>
                    <p className="pl-5"> Message from Chairman</p>
                  </div>
                </DropdownItem>
                <DropdownItem to="/director">
                  <div className="flex col-span-1 items-center">
                    <svg
                      className="w-[48px] h-[40px] p-2 rounded  group-hover:bg-gray-200 bg-[#00664a]  fill-[#ffffff] group-hover:fill-[#00664a]"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg">
                      {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                      <path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z"></path>
                    </svg>
                    <p className="pl-5">Message from Managing Director</p>
                  </div>
                </DropdownItem>
                <DropdownItem to="/about">
                  <div className="flex col-span-1 items-center">
                    <svg
                      className="w-[40px] h-[40px] p-2 rounded group-hover:bg-gray-200 bg-[#00664a]  fill-[#ffffff] group-hover:fill-[#00664a]"
                      viewBox="0 0 640 512"
                      xmlns="http://www.w3.org/2000/svg">
                      {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                      <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"></path>
                    </svg>
                    <p className="pl-5"> Management Team</p>
                  </div>
                </DropdownItem>
                <DropdownItem to="/tech">
                  <div className="flex col-span-1 items-center">
                    <svg
                      className="w-[40px] h-[40px] p-2 rounded group-hover:bg-gray-200 bg-[#00664a]  fill-[#ffffff] group-hover:fill-[#00664a]"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg">
                      {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                      <path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"></path>
                    </svg>
                    <p className="pl-5">Our Technologies</p>
                  </div>
                </DropdownItem>
              </div>
            </Dropdown>
          </nav>
        </div>
      </div>
    </div>
  </div>
);
};

export default Navbar;
