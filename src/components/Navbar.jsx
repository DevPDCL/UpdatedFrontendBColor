import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles"
import {
  logo,
  
} from "../assets";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
 
} from "@material-tailwind/react";

import { Dialog } from "@headlessui/react";
import {
  
  Bars3Icon,
  
  XMarkIcon,
} from "@heroicons/react/24/outline";




const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  

  return (
    <>
      <header className="bg-white ">
        <nav
          className={`${styles.paddingX} w-full flex h-[80px] items-center shadow-2xl fixed top-[30px] z-20 bg-[#F5FFFA]`}
          aria-label="Global">
          <div className="flex flex-row items-center w-full justify-center mx-auto max-w-7xl">
            <div className="flex  lg:flex-1">
              <Link
                to="/"
                className="flex items-center gap-0"
                onClick={() => {
                  setActive("");
                  window.scrollTo(0, 0);
                }}>
                <img
                  src={logo}
                  alt="logo"
                  className="w-[45px] h-[45px] bg-none object-contain"
                />
              </Link>
            </div>
            <div className="flex ms-auto lg:hidden">
              <button
                type="button"
                className="-m-2.5 rounded-md text-gray-700"
                onClick={() => setMobileMenuOpen(true)}>
                {" "}
                <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <ul className="list-none hidden sm:flex  mx-auto flex-row gap-1">
                <li className="flex mr-4 flex-wrap  justify-center items-center">
                  <div className="flex flex-wrap ">
                    <a>
                      {" "}
                      <Link
                        to="/patient"
                        activeClassName="navbar__link--active">
                        {" "}
                        <p className="text-emerald-900/80 items-center flex flex-row text-[14px] ms-0 me-1 font-medium font-ubuntu">
                          <a href="">
                            {" "}
                            <span
                              className={`pl-1 text-[14px] font-medium font-ubuntu hidden md:block cursor-pointer hover:text-gray-400 active`}>
                              Patient Portal
                            </span>
                          </a>
                        </p>
                      </Link>
                    </a>
                  </div>
                </li>

                <li className="mr-4 inline-flex flex-row justify-center items-center">
                  <div className="flex flex-row ">
                    <a>
                      {" "}
                      <Link to="/health">
                        {" "}
                        <p className="text-emerald-900/80 items-center flex flex-row text-[14px] ms-0 me-1 font-medium font-ubuntu">
                          <a href="">
                            {" "}
                            <span className="pl-1 text-[14px] font-medium font-ubuntu hidden md:block">
                              Packages
                            </span>
                          </a>
                        </p>
                      </Link>
                    </a>
                  </div>
                </li>
                <li className="mr-4 inline-flex flex-row justify-center items-center">
                  <div className="flex flex-row ">
                    <a>
                      {" "}
                      <Link to="/doctordetail">
                        {" "}
                        <p className="text-emerald-900/80 items-center flex flex-row text-[14px] ms-0 me-1 font-medium font-ubuntu">
                          <a href="">
                            {" "}
                            <span className="pl-1 text-[14px] font-medium font-ubuntu hidden md:block">
                              Doctors
                            </span>
                          </a>
                        </p>
                      </Link>
                    </a>
                  </div>
                </li>
                <li className="inline-flex flex-row mr-4 justify-center items-center">
                  <div className="flex flex-row ">
                    <Popover placement="bottom">
                      <PopoverHandler>
                        <a>
                          <Link to="/branch">
                            {" "}
                            <p className="text-emerald-900/80 items-center flex flex-row text-[14px] ms-0 me-1 font-medium font-ubuntu">
                              <span className="pl-1 text-[14px] font-medium font-ubuntu hidden md:block cursor-pointer">
                                Branches
                              </span>
                            </p>
                          </Link>{" "}
                        </a>
                      </PopoverHandler>
                    </Popover>
                  </div>
                </li>

                <li className="inline-flex mr-4 flex-row justify-center items-center">
                  <div className="flex flex-row ">
                    <a>
                      <Link to="/notice">
                        <p className="text-emerald-900/80 items-center flex flex-row text-[14px] ms-0 me-1 font-medium font-ubuntu">
                          <a href="">
                            <span className="pl-1 text-[14px] font-medium font-ubuntu hidden md:block">
                              Notice
                            </span>
                          </a>
                        </p>
                      </Link>
                    </a>
                  </div>
                </li>
                <li className="inline-flex mr-4 flex-row justify-center items-center">
                  <div className="flex flex-row ">
                    <a>
                      {" "}
                      <Link to="/contact">
                        <p className="text-emerald-900/80 items-center flex flex-row text-[14px] ms-0 me-1 font-medium font-ubuntu">
                          <a href="">
                            <span className="pl-1 text-[14px] font-medium font-ubuntu hidden md:block">
                              Contact
                            </span>
                          </a>
                        </p>
                      </Link>
                    </a>
                  </div>
                </li>
                <li className="inline-flex mr-4 flex-row  justify-center items-center">
                  <div className=" items-end hidden  md:block md:order-2 ">
                    <Popover placement="bottom">
                      <PopoverHandler>
                        <p
                          type="button"
                          data-dropdown-toggle="language-dropdown-menu"
                          className="ms-auto text-[#006642] inline-flex items-end font-ubuntu font-medium justify-end text-sm rounded-lg cursor-pointer">
                          About Us
                        </p>
                      </PopoverHandler>
                      <PopoverContent className="mt-[24px] z-20 fill-white">
                        <a>
                          {" "}
                          <Link to="/goals">
                            <p
                              type="button"
                              data-dropdown-toggle="language-dropdown-menu"
                              className="ms-auto items-center font-ubuntu justify-center px-4 py-2 text-sm rounded-lg cursor-pointer">
                              <span className="text-emerald-900/80 hover:text-[#000000] text-[14px] ms-0 mx-auto font-medium font-ubuntu">
                                Objectives & Goals
                              </span>
                            </p>
                          </Link>
                        </a>
                        <a>
                          {" "}
                          <Link to="/chairman">
                            <p
                              type="button"
                              data-dropdown-toggle="language-dropdown-menu"
                              className="ms-auto  items-center font-ubuntu justify-center px-4 py-2 text-sm rounded-lg cursor-pointer">
                              <span className="text-emerald-900/80 hover:text-[#000000] text-[14px] ms-0 mx-auto font-medium font-ubuntu">
                                Message from Chairman
                              </span>
                            </p>
                          </Link>
                        </a>
                        <a>
                          <Link to="/director">
                            {" "}
                            <p
                              type="button"
                              data-dropdown-toggle="language-dropdown-menu"
                              className="ms-auto inline-flex items-center font-ubuntu justify-center px-4 py-2 text-sm rounded-lg cursor-pointer">
                              <span className="text-emerald-900/80 hover:text-[#000000] text-[14px] ms-0 mx-auto font-medium font-ubuntu">
                                Message from Managing Director
                              </span>
                            </p>
                          </Link>
                        </a>
                        <br />
                        <a>
                          {" "}
                          <Link to="/about">
                            <p
                              type="button"
                              data-dropdown-toggle="language-dropdown-menu"
                              className="ms-auto inline-flex items-center font-ubuntu justify-center px-4 py-2 text-sm rounded-lg cursor-pointer">
                              <span className="text-emerald-900/80 hover:text-[#000000] text-[14px] ms-0 mx-auto font-medium font-ubuntu">
                                Management Team
                              </span>
                            </p>
                          </Link>
                        </a>
                        <br />
                        <a>
                          {" "}
                          <Link to="/tech">
                            <p
                              type="button"
                              data-dropdown-toggle="language-dropdown-menu"
                              className="ms-auto inline-flex items-center font-ubuntu justify-center px-4 py-2 text-sm rounded-lg cursor-pointer">
                              <span className="text-emerald-900/80 hover:text-[#000000] text-[14px] ms-0 mx-auto font-medium font-ubuntu">
                                Our Technologies
                              </span>
                            </p>
                          </Link>
                        </a>
                      </PopoverContent>
                    </Popover>
                  </div>
                </li>
              </ul>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link to="/patient">
                <svg
                  fill="#006642"
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>download</title>{" "}
                    <path d="M18.313 13.625h-4.031v-6.594c0-0.563-0.469-1.031-1.031-1.031h-4.031c-0.594 0-1.063 0.469-1.063 1.031v6.594h-4.031c-0.531 0-0.719 0.344-0.313 0.75l6.688 6.656c0.188 0.188 0.438 0.281 0.719 0.281s0.563-0.094 0.75-0.281l6.656-6.656c0.375-0.406 0.25-0.75-0.313-0.75zM0 18.344v7.125c0 0.313 0.156 0.5 0.5 0.5h21.375c0.344 0 0.531-0.188 0.531-0.5v-7.125c0-0.313-0.25-0.531-0.531-0.531h-2.031c-0.281 0-0.531 0.25-0.531 0.531v4.531h-16.25v-4.531c0-0.313-0.219-0.531-0.5-0.531h-2.063c-0.281 0-0.5 0.25-0.5 0.531z"></path>{" "}
                  </g>
                </svg>
              </Link>
              {/* <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
          </div>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden "
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className="fixed  inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 h-auto top-[110px] right-0 z-10 w-full  bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center  justify-between">
              <button
                type="button"
                className="-m-2.5 ms-auto rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <ul className="flex  flex-col gap-3">
                    <li className="inline-flex flex-row justify-start items-start">
                      <div className="flex flex-row ">
                        <a>
                          <Link to="/patient">
                            {" "}
                            <p className="text-white me-auto items-start flex flex-row text-[14px] font-medium font-ubuntu">
                              <a href="">
                                {" "}
                                <span className=" me-auto text-[#006642] text-[14px] font-medium font-ubuntu ">
                                  Pataint Portal
                                </span>
                              </a>
                            </p>
                          </Link>
                        </a>
                      </div>
                    </li>
                    <li className="inline-flex flex-row justify-start items-start">
                      <div className="flex flex-col ">
                        <a>
                          {" "}
                          <Link to="/health">
                            {" "}
                            <p className="text-white me-auto items-start flex flex-row text-[14px] font-medium font-ubuntu">
                              <a href="">
                                {" "}
                                <span className="me-auto text-[#006642] text-[14px] font-medium font-ubuntu">
                                  Packages
                                </span>
                              </a>
                            </p>
                          </Link>
                        </a>
                      </div>
                    </li>
                    <li className="inline-flex flex-row justify-start items-start">
                      <div className="flex flex-row ">
                        <a>
                          {" "}
                          <Link to="/doctorsearch">
                            {" "}
                            <p className="text-white me-auto items-start flex flex-row text-[14px] font-medium font-ubuntu">
                              <a href="">
                                {" "}
                                <span className="text-[14px] text-[#006642] font-medium font-ubuntu ">
                                  Doctors
                                </span>
                              </a>
                            </p>
                          </Link>
                        </a>
                      </div>
                    </li>
                    <li className="inline-flex flex-row justify-start items-start">
                      <div className="flex flex-row ">
                        <a>
                          {" "}
                          <Link to="/branch">
                            {" "}
                            <p className="text-white me-auto items-start flex flex-row text-[14px] font-medium font-ubuntu">
                              <a href="">
                                {" "}
                                <span className="text-[14px] text-[#006642] font-medium font-ubuntu ">
                                  Branches
                                </span>
                              </a>
                            </p>
                          </Link>
                        </a>
                      </div>
                    </li>

                    <li className="inline-flex flex-row justify-start items-start">
                      <div className="flex flex-row ">
                        <a>
                          {" "}
                          <Link to="/notice">
                            <p className="text-white items-center flex flex-row text-[14px] font-medium font-ubuntu">
                              <a href="">
                                <span className="text-[14px] text-[#006642] font-medium font-ubuntu ">
                                  Notice
                                </span>
                              </a>
                            </p>
                          </Link>{" "}
                        </a>
                      </div>
                    </li>
                    <li className="inline-flex flex-row justify-start items-start">
                      <div className="flex flex-row ">
                        <a>
                          {" "}
                          <Link to="/contact">
                            <p className="text-white items-center flex flex-row text-[14px] ms-0 me-1 font-medium font-ubuntu">
                              <a href="">
                                <span className="text-[14px] text-[#006642] font-medium font-ubuntu ">
                                  Contact
                                </span>
                              </a>
                            </p>
                          </Link>{" "}
                        </a>
                      </div>
                    </li>
                    <li className="inline-flex flex-row justify-start items-start">
                      <div className="flex flex-row ">
                        <a>
                          {" "}
                          <Link to="/about">
                            <p className="text-white items-center flex flex-row text-[14px] ms-0 me-1 font-medium font-ubuntu">
                              <a href="">
                                <span className="text-[14px] text-[#006642] font-medium font-ubuntu ">
                                  About Us
                                </span>
                              </a>
                            </p>
                          </Link>{" "}
                        </a>
                      </div>
                    </li>
                    <li className="inline-flex flex-row justify-start items-start">
                      <div className="flex flex-row ">
                        <a>
                          {" "}
                          <Link to="/goals">
                            <p className="text-white items-center flex flex-row text-[14px] ms-0 me-1 font-medium font-ubuntu">
                              <a href="">
                                <span className="text-[14px] pl-10 text-[#006642] font-medium font-ubuntu ">
                                  Objectives & Goals
                                </span>
                              </a>
                            </p>
                          </Link>{" "}
                        </a>
                      </div>
                    </li>
                    <li className="inline-flex flex-row justify-start items-start">
                      <div className="flex flex-row ">
                        <a>
                          {" "}
                          <Link to="/chairman">
                            <p className="text-white items-center flex flex-row text-[14px] ms-0 me-1 font-medium font-ubuntu">
                              <a href="">
                                <span className="text-[14px] pl-10 text-[#006642] font-medium font-ubuntu ">
                                  Message from Chairman
                                </span>
                              </a>
                            </p>
                          </Link>{" "}
                        </a>
                      </div>
                    </li>
                    <li className="inline-flex flex-row justify-start items-start">
                      <div className="flex flex-row ">
                        <a>
                          {" "}
                          <Link to="/director">
                            <p className="text-white items-center flex flex-row text-[14px] ms-0 me-1 font-medium font-ubuntu">
                              <a href="">
                                <span className="text-[14px] pl-10 text-[#006642] font-medium font-ubuntu ">
                                  Message from Director
                                </span>
                              </a>
                            </p>
                          </Link>{" "}
                        </a>
                      </div>
                    </li>

                    <li className="inline-flex flex-row justify-start items-start">
                      <div className="flex flex-row ">
                        <a>
                          {" "}
                          <Link to="/about">
                            <p className="text-white items-center flex flex-row text-[14px] ms-0 me-1 font-medium font-ubuntu">
                              <a href="">
                                <span className="text-[14px] text-[#006642] pl-10 font-medium font-ubuntu ">
                                  Management Team
                                </span>
                              </a>
                            </p>
                          </Link>{" "}
                        </a>
                      </div>
                    </li>
                    <li className="inline-flex flex-row justify-start items-start">
                      <div className="flex flex-row ">
                        <a>
                          {" "}
                          <Link to="/tech">
                            <p className="text-white items-center flex flex-row text-[14px]  font-medium font-ubuntu">
                              <a href="">
                                <span className="text-[14px] text-[#006642] pl-10 font-medium font-ubuntu ">
                                  Our Technologies
                                </span>
                              </a>
                            </p>
                          </Link>{" "}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Navbar;
