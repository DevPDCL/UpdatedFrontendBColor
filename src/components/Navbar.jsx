import React, { useState } from "react";
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
      className="block px-4 py-2 text-sm mx-5 my-3  text-gray-900 rounded  w-[270px] font-medium hover:bg-gray-200 hover:text-[#00664a]"
    >
      {children}
    </Link>
  );
};

const Dropdown = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="relative ">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
      >
        {title}
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
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
                onClick={() => setOpen(!open)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    x-show={!open}
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              className={`${
                open ? "flex" : "hidden"
              } flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
            >
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
                        className="w-[40px] h-[40px] p-2 rounded hover:bg-white bg-[#00664a]  fill-[#ffffff] hover:fill-[#00664a]"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                        <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
                      </svg>
                      <p className="pl-5">Objectives & Goals</p>
                    </div>
                  </DropdownItem>
                  <DropdownItem to="/goals">
                    <div className="flex col-span-1 items-center">
                      <svg
                        className="w-[40px] h-[40px] p-2 rounded hover:bg-white bg-[#00664a]  fill-[#ffffff] hover:fill-[#00664a]"
                        viewBox="0 0 640 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                        <path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z"></path>
                      </svg>
                      <p className="pl-5"> Message from Chairman</p>
                    </div>
                  </DropdownItem>
                  <DropdownItem to="/goals">
                    <div className="flex col-span-1 items-center">
                      <svg
                        className="w-[40px] h-[40px] p-2 rounded hover:bg-white bg-[#00664a]  fill-[#ffffff] hover:fill-[#00664a]"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                        <path d="M448 32H361.9l-1 1-127 127h92.1l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128V96c0-15.1-5.3-29.1-14-40l-104 104H512zM294.1 32H201.9l-1 1L73.9 160h92.1l1-1 127-127zM64 32C28.7 32 0 60.7 0 96v64H6.1l1-1 127-127H64zM512 192H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192z"></path>
                      </svg>
                      <p className="pl-5">Message from Director</p>
                    </div>
                  </DropdownItem>
                  <DropdownItem to="/goals">
                    <div className="flex col-span-1 items-center">
                      <svg
                        className="w-[40px] h-[40px] p-2 rounded hover:bg-white bg-[#00664a]  fill-[#ffffff] hover:fill-[#00664a]"
                        viewBox="0 0 640 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                        <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
                      </svg>
                      <p className="pl-5"> Management Team</p>
                    </div>
                  </DropdownItem>
                  <DropdownItem to="/goals">
                    <div className="flex col-span-1 items-center">
                      <svg
                        className="w-[40px] h-[40px] p-2 rounded hover:bg-white bg-[#00664a]  fill-[#ffffff] hover:fill-[#00664a]"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
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
