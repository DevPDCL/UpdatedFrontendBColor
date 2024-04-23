import { styles } from "../styles";
import { ServiceCost, doctorData } from "../constants";
import React, { useState, useEffect } from "react";
import video from "../assets/video.mp4";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import List from "react-virtualized/dist/commonjs/List";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Message({ message, isUser }) {
  const messageClass = isUser
    ? "bg-blue-500 text-white rounded-lg p-4 my-2"
    : "bg-gray-100 text-gray-700 rounded-lg p-4 my-2";

  return (
    <div className={messageClass}>
      <p>{message}</p>
    </div>
  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
const buttonVariants = {
  initial: { opacity: 1, scale: 1 },
  animate: { opacity: 1, scale: 1.1 },
  hover: { scale: 1.05 },
};

const searchBoxVariants = {
  initial: { opacity: 1, scale: 1 },
  hover: { scale: 1.03 },
};

const ListHeader = () => (
  <div className="flex justify-between  px-8 py-2 bg-gray-400 font-bold">
    <p>Service Name</p>
    <p>Service Cost</p>
  </div>
);

const Header = () => (
  <div className="flex justify-between  px-8 py-2 bg-gray-400 font-bold">
    <p>Doctor Name</p>
    <p>Speciality</p>
  </div>
);

const Hero = ({ color }) => {
  const [activeTab, setActiveTab] = useState("styled-profile");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [selectedBranch, setSelectedBranch] = useState(null);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
 const [showFemaleDoctors, setShowFemaleDoctors] = useState(false);
  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
    setFilteredServices([]); // Reset filtered services on branch change
    setSearchTerm(""); // Reset search term on branch change
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    const branchServices = ServiceCost.find(
      (branch) => branch.braId === parseInt(selectedBranch)
    )?.services;
    if (branchServices) {
      const filtered = branchServices.flatMap((category) =>
        category.items.filter((service) =>
          service.serviceName.toLowerCase().includes(searchTerm)
        )
      );
      setFilteredServices(filtered);
    } else {
      setFilteredServices([]);
    }
  };
  const renderRow = ({ index, style }) => {
    const service = filteredServices[index];

    return (
      <li
        key={service.serviceId}
        style={style}
        className="flex justify-between px-4 py-2 bg-gray-300 hover:bg-gray-100"
      >
        <p className="text-gray-600 font-ubuntu">{service.serviceName}</p>
        <p className="font-medium text-gray-700 font-ubuntu">
          {service.price.toLocaleString("en-BD", {
            style: "currency",
            currency: "BDT",
          })}{" "}
        </p>
      </li>
    );
  };
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible, true);
  };
 
const [showSearchInput, setShowSearchInput] = useState(true);

const handleShowClick = () => {
  setShowSearchInput(false);
};

  

  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm1, setSearchTerm1] = useState("");
  const [selectedBranch1, setSelectedBranch1] = useState(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const specializationSet = new Set(
    doctorData.branches
      .flatMap((branch) => branch.specilizations)
      .map((spec) => spec.specializationName)
  );
  const specializationOptions = Array.from(specializationSet);

  const handleBranchChange1 = (e) => {
    setSelectedBranch1(e.target.value);
  };

  const handleSpecializationChange = (e) => {
    setSelectedSpecialization(e.target.value);
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleSearchChange1 = (e) => {
    setSearchTerm1(e.target.value.toLowerCase());
  };

  useEffect(() => {
    let result = doctorData.branches.flatMap((branch) =>
      branch.specilizations.flatMap((spec) =>
        spec.doctorDetails.map((doctor) => ({
          ...doctor,
          braName: branch.braName,
          specializationName: spec.specializationName,
        }))
      )
    );

    if (
      selectedBranch1 ||
      selectedSpecialization ||
      selectedDay ||
      searchTerm1
    ) {
      if (selectedBranch1) {
        result = result.filter((doctor) => doctor.braName === selectedBranch1);
      }

      if (selectedSpecialization) {
        result = result.filter(
          (doctor) => doctor.specializationName === selectedSpecialization
        );
      }

      if (selectedDay) {
        result = result.filter((doctor) =>
          doctor.weekday.some(
            (day) => day.day.toLowerCase() === selectedDay.toLowerCase()
          )
        );
      }

      if (searchTerm1) {
        result = result.filter((doctor) =>
          doctor.drName.toLowerCase().includes(searchTerm1)
        );
      }
    } else {
      result = [];
    }

    setFilteredDoctors(result);
  }, [selectedBranch1, selectedSpecialization, selectedDay, searchTerm1]);

  const renderRow1 = ({ index, style }) => {
    const doctor = filteredDoctors[index];

    return (
      <li
        key={doctor.SpecilizationID}
        style={style}
        className="flex justify-between px-4 py-2 bg-gray-300 hover:bg-gray-100"
      >
        <p className="text-gray-600 font-ubuntu">{doctor.drName}</p>
        <p className="text-gray-600 font-ubuntu">{doctor.specializationName}</p>
      </li>
    );
  };

  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };
const [messages, setMessages] = useState([]);
const [inputMessage, setInputMessage] = useState("");
const handleUserInput = () => {
  setMessages([...messages, "Your message has been sent!"]);
};

const [userInput, setUserInput] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  if (userInput.trim()) {
    // Avoid sending empty messages
    setMessages([...messages, userInput]);
    setUserInput("");
  }
};

const handleClick1 = () => {
  window.open(url, "_blank", "noopener,noreferrer");
};
// Array to store messages

  return (
    <>
      <section className="w-full h-[650px]  relative justify-top items-bottom">
        <video
          className=" w-full h-[650px] object-cover object-top top-0 left-0"
          src={video}
          autoPlay
          loop
          muted
        />
        <div className="absolute w-full h-[650px] top-0 left-0 bg-gray-900/50"></div>

        <div
          className={`${styles.paddingX} absolute  flex   max-w-7xl mx-auto inset-1 justify-center items-bottom text-center sm:w-[80%]  flex-col text-gray-900`}
        >
          <div className="bg-white rounded">
            <div class="mb-4 ">
              <ul class=" text-sm font-medium text-center text-gray-900 rounded shadow sm:flex">
                <li class="w-full p-1 focus-within:z-10">
                  <a
                    href="#"
                    data-tabs-target="styled-profile"
                    className={`inline-block w-full p-3 rounded text-gray-900 bg-[#00664a] border-r border-gray-200   focus:ring-1 focus:ring-white ${
                      activeTab === "styled-profile"
                        ? "bg-[#ffffff] text-gray-900"
                        : "bg-[#00664a] text-white"
                    } "active focus:outline-none "
                        : ""
                    `}
                    aria-current="page"
                    onClick={() => handleTabClick("styled-profile")}
                  >
                    Doctors
                  </a>
                </li>
                <li class="w-full p-1 focus-within:z-10">
                  <a
                    href="#"
                    data-tabs-target="styled-profile1"
                    className={`inline-block w-full p-3 rounded bg-[#00664a] border-r border-gray-200  focus:ring-1 focus:ring-white ${
                      activeTab === "styled-profile1"
                        ? "bg-[#ffffff] text-gray-900"
                        : "bg-[#00664a] text-white"
                    } "active focus:outline-none "
                        : ""
                    `}
                    aria-current="page"
                    onClick={() => handleTabClick("styled-profile1")}
                  >
                    Appoinment
                  </a>
                </li>
                <li class="w-full p-1 focus-within:z-10">
                  <a
                    href="#"
                    data-tabs-target="styled-profile2"
                    className={`inline-block w-full p-3 rounded text-gray-900 bg-[#00664a] border-r border-gray-200   focus:ring-1 focus:ring-white ${
                      activeTab === "styled-profile2"
                        ? "bg-[#ffffff] text-gray-900"
                        : "bg-[#00664a] text-white"
                    } "active focus:outline-none "
                        : ""
                    `}
                    aria-current="page"
                    onClick={() => handleTabClick("styled-profile2")}
                  >
                    Test Prices
                  </a>
                </li>
              </ul>
            </div>

            <div id="default-styled-tab-content">
              <div
                className={` p-2 rounded bg-white ${
                  activeTab === "styled-profile" ? "" : "hidden"
                }`}
                id="styled-profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p class="text-sm text-gray-900 ">
                  <form className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-9 md:gap-0">
                      <div className="relative z-0 col-span-3 p-1 w-full mb-0 group">
                        <select
                          className="block py-2.5 px-0 w-full text-sm rounded-lg  text-gray-900 bg-gray-300 pl-2   peer"
                          onChange={handleBranchChange1}
                          value={selectedBranch1}
                          transition={spring}
                          whileTap={{ scale: 0.9 }}
                          variants={buttonVariants}
                          whileHover="hover"
                        >
                          <option value="">Select Branch</option>
                          {doctorData.branches.map((branch) => (
                            <option key={branch.braID} value={branch.braName}>
                              {branch.braName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="relative z-0 w-full p-1 col-span-3 mb-0 group">
                        <select
                          className="block py-2.5 px-0 w-full text-sm rounded-lg  text-gray-900 bg-gray-300 pl-2   peer"
                          onChange={handleSpecializationChange}
                          transition={spring}
                          whileTap={{ scale: 0.9 }}
                          variants={buttonVariants}
                          whileHover="hover"
                        >
                          <option value="">Select Specialization</option>
                          {specializationOptions.map((specName) => (
                            <option key={specName} value={specName}>
                              {specName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="relative col-span-2 p-1 mb-0 group">
                        <select
                          className="block py-2.5 px-0 w-full text-sm rounded-lg  text-gray-900 bg-gray-300 pl-2   peer"
                          onChange={handleDayChange}
                          transition={spring}
                          whileTap={{ scale: 0.9 }}
                          variants={buttonVariants}
                          whileHover="hover"
                        >
                          <option value="">Select Day</option>
                          {[
                            "Saturday",
                            "Sunday",
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                          ].map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="relative col-span-1 p-1 mb-0 group">
                        <label
                          className="block py-2.5 px-0 w-full text-sm rounded-lg  text-gray-900 bg-gray-300 pl-2   peer"
                          layout
                          transition={spring}
                          whileTap={{ scale: 0.9 }}
                          variants={buttonVariants}
                          whileHover="hover"
                        >
                          Female
                          <input
                            type="checkbox"
                            checked={showFemaleDoctors}
                            onChange={() =>
                              setShowFemaleDoctors(!showFemaleDoctors)
                            }
                            className="form-checkbox text-PDCL-green rounded"
                          />
                        </label>
                      </div>
                      <div className="relative col-span-9 mb-1 group ">
                        <input
                          type="text"
                          value={searchTerm1}
                          onChange={handleSearchChange1}
                          name="floating_first_name"
                          placeholder="Doctor Name"
                          id="floating_first_name"
                          className="block py-2.5 px-0 w-full text-sm rounded-lg focus:outline-none focus:ring-0 focus:border-PDCL-green  text-gray-900 bg-gray-300 placeholder-gray-900  peer pl-2"
                          required
                        />
                        <section className="">
                          <ul className="">
                            {filteredDoctors.length > 0 && (
                              <li>
                                {/* Render the header */}
                                <Header />

                                {/* List */}
                                <AutoSizer>
                                  {({ width }) => (
                                    <List
                                      height={250}
                                      rowCount={filteredDoctors.length}
                                      rowHeight={50}
                                      rowRenderer={renderRow1}
                                      overscanRowCount={5}
                                      width={width}
                                    />
                                  )}
                                </AutoSizer>
                              </li>
                            )}
                          </ul>
                        </section>
                      </div>
                    </div>
                  </form>
                </p>
              </div>
              <div
                className={` p-2 rounded bg-white  ${
                  activeTab === "styled-profile1" ? "" : "hidden"
                }`}
                id="styled-profile1"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p class="text-sm text-gray-900 ">
                  <form className="max-w-screen-xl mx-auto">
                    <div className="grid md:grid-cols-9 md:gap-1">
                      <div className="relative z-0 col-span-9 w-full group">
                        <Link
                          to="http://appointment.populardiagnostic.com/appointment"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            type="button"
                            className="text-gray-600 w-full rounded block col-span-7 mb-2 h-[43px] hover:text-gray-900 border bg-gray-300 shadow-2xl  border-none focus:ring-4 focus:outline-none focus:ring-[#006642] font-ubuntu text-[16px] font-bold px-5 py-2.5 text-center "
                            onClick={handleClick1}
                          >
                            Make An Appointment{" "}
                            <span className="animate-ping">Now</span>
                          </button>
                        </Link>
                      </div>

                      <div className="relative z-0 col-span-9 w-full  group">
                        <div className="flex flex-row w-full col-span-9">
                          <div className="flex w-full col-span-4 items-center">
                            {!isSearchVisible && (
                              <button
                                className={`px-4 py-2 bg-gray-300 shadow-2xl mb-1 w-full mr-2 font-ubuntu font-medium col-span-4 text-gray-900 rounded ${
                                  showSearchInput
                                    ? ""
                                    : "opacity-50 cursor-not-allowed"
                                }`}
                                onClick={handleSearchClick}
                                disabled={showSearchInput}
                              >
                                <p class>
                                  Chat{" "}
                                  <span class=" drop-shadow-[0_1.0px_1.0px_rgba(0,0,0,0.5)] text-white gradient-alt-flow">
                                    AI Consultant
                                  </span>
                                </p>
                              </button>
                            )}
                            {!isSearchVisible && (
                              <button
                                className={`px-4 py-2 bg-gray-300 shadow-2xl  mb-1 w-full font-ubuntu font-medium col-span-4 text-gray-900 rounded ${
                                  showSearchInput
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                                }`}
                                onClick={(handleSearchClick, handleShowClick)}
                                disabled={!showSearchInput}
                              >
                                Chat Human Consultant
                              </button>
                            )}
                            {isSearchVisible && (
                              <div className="relative flex flex-row z-0 col-span-9 w-full  group">
                                <form class=" w-full col-span-7 mr-2 mb-1">
                                  <label
                                    for="default-search"
                                    class="mb-1 text-sm font-medium text-gray-900 sr-only"
                                  ></label>

                                  <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                      <svg
                                        class="w-4 h-4 text-gray-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                      >
                                        <path
                                          stroke="currentColor"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                      </svg>
                                    </div>

                                    <div class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none"></div>
                                    {showSearchInput ? (
                                      <div>
                                        <input
                                          type="search"
                                          id="default-search"
                                          class="block w-full p-2 pr-10 white-space:pre-wrap col-span-9 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                          placeholder="Chat With PDCL HUMAN Consultant"
                                          value={inputMessage}
                                          onChange={(e) =>
                                            setInputMessage(e.target.value)
                                          }
                                          onFocus={() => setInputMessage("")}
                                          required
                                        />
                                        <button
                                          type="submit"
                                          class="text-white absolute  end-0 bottom-1 top-1 m-1 bg-[#00664a] hover:bg-blue-800  font-medium rounded text-sm px-4 py-2 "
                                        >
                                          Send
                                        </button>
                                      </div>
                                    ) : (
                                      <div>
                                        <input
                                          type="search"
                                          id="default-search"
                                          class="block w-full p-2 pr-10 white-space:pre-wrap col-span-9 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                                          placeholder="Chat With PDCL AI Consultant"
                                          value={inputMessage}
                                          onChange={(e) =>
                                            setInputMessage(e.target.value)
                                          }
                                          onFocus={() => setInputMessage("")}
                                          required
                                        />
                                        <button
                                          type="submit"
                                          class="text-white absolute end-0  bottom-0 top-0 m-1 bg-[#00664a] hover:bg-blue-800  font-medium rounded text-sm px-4 py-2 "
                                        >
                                          Send
                                        </button>{" "}
                                      </div>
                                    )}
                                  </div>

                                  {isSearchVisible && (
                                    <div className="relative flex flex-row z-0 col-span-9 w-full group">
                                      <div className="flex flex-col space-y-2 mb-4">
                                        {messages.map((message, index) => (
                                          <div
                                            key={index}
                                            className="bg-gray-100 white-space:pre-wrap rounded-lg p-4 text-sm"
                                          >
                                            <Message
                                              key={index}
                                              message={message}
                                              isUser={index % 2 === 0}
                                            />{" "}
                                          </div>
                                        ))}
                                      </div>

                                      <form className="w-full col-span-7 mr-2 mb-1">
                                        <label for="default-search"></label>
                                        <div className="relative">
                                          <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none"></div>

                                          {inputMessage && (
                                            <p className="text-gray-500 white-space:pre-wrap text-sm mt-2">
                                              {inputMessage}
                                            </p>
                                          )}
                                        </div>
                                      </form>
                                    </div>
                                  )}
                                </form>
                                <Link to="/#">
                                  <div className="relative z-0 col-span-2 w-full  group">
                                    <button
                                      type="button"
                                      className={`text-gray-600 w-full rounded block col-span-2 mb-0 h-[35px] hover:text-gray-900 border bg-gray-300 shadow-2xl  border-none focus:ring-4 focus:outline-none focus:ring-[#006642] font-ubuntu text-[16px] font-bold px-4  text-center   ${
                                        isVisible ? "" : "hidden"
                                      }`}
                                      onClick={(handleClick, handleSearchClick)}
                                    >
                                      <span className="">Back</span>
                                    </button>
                                  </div>
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </p>
              </div>
              <div
                className={` p-2 rounded bg-white ${
                  activeTab === "styled-profile2" ? "" : "hidden"
                }`}
                id="styled-profile2"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p class="text-sm text-gray-900">
                  <form className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-9 md:gap-1">
                      <div className="relative z-0 w-full col-span-9 mb-1 group">
                        <select
                          value={selectedBranch}
                          onChange={handleBranchChange}
                          className="block py-2.5 px-0 w-full text-sm rounded-lg  text-gray-900 bg-gray-300 pl-2   peer"
                        >
                          <option value="">Select Branch</option>
                          {ServiceCost.map((branch) => (
                            <option key={branch.braId} value={branch.braId}>
                              {branch.braName}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="relative col-span-9 mb-1 group">
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={handleSearchChange}
                          name="floating_first_name"
                          placeholder="Test Name"
                          id="floating_first_name"
                          className="block py-2.5 px-0 w-full text-sm rounded-lg  focus:outline-none focus:ring-0 focus:border-PDCL-green  text-gray-900 bg-gray-300 placeholder-gray-900  peer pl-2"
                          required
                        />
                        <section className="">
                          <ul className="">
                            {filteredServices.length > 0 && (
                              <div>
                                {/* Render the header */}
                                <ListHeader />

                                {/* List */}
                                <AutoSizer>
                                  {({ width }) => (
                                    <List
                                      height={250}
                                      rowCount={filteredServices.length}
                                      rowHeight={50}
                                      rowRenderer={renderRow}
                                      overscanRowCount={5}
                                      width={width}
                                    />
                                  )}
                                </AutoSizer>
                              </div>
                            )}
                          </ul>
                        </section>
                      </div>
                    </div>
                  </form>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
