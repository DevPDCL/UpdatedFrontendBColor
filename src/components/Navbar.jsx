import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import image from "../assets/logo.png";

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

const Navbar = () => {
  const [open, setOpen] = useState(true);
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
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6">
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
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
