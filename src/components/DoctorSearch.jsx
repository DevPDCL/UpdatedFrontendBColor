import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sidemenu, Bottommenu, Nav, Navbar, Tech } from "../components";
import { doctorData1 } from "../constants";
import { Link } from "react-router-dom";

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



// const DoctorCard = ({ doctor }) => {
//   // const renderWorkingDays = (chambers) => {
//   //   const allDays = chambers.flatMap((chamber) =>
//   //     chamber.weekday.map((wd) => wd.day)
//   //   );
//   //   const uniqueDays = Array.from(new Set(allDays));

//   //   // Split the days into two columns for rendering
//   //   const midpoint = Math.ceil(uniqueDays.length / 2);
//   //   const firstColumn = uniqueDays.slice(0, midpoint);
//   //   const secondColumn = uniqueDays.slice(midpoint);

//   //   return (
//   //     <div className="flex">
//   //       <ul className="list-disc pl-5 w-1/2">
//   //         {firstColumn.map((day, index) => (
//   //           <li key={index}>{day}</li>
//   //         ))}
//   //       </ul>
//   //       <ul className="list-disc pl-5 w-1/2">
//   //         {secondColumn.map((day, index) => (
//   //           <li key={index}>{day}</li>
//   //         ))}
//   //       </ul>
//   //     </div>
//   //   );
//   // };
//   const cardBackgroundColor =
//     doctor.drGender === "Female"
//       ? "bg-gradient-to-b from-[#F5FFFA]/20 to-[#fce8f3]/90"
//       : "bg-gradient-to-b from--[#F5FFFA]/20 to-[#f0fff0]/90";

//   const backgroundColor =
//     doctor.drGender === "Female" ? "bg-[#fce8f3]" : "bg-[#f0fff0]";

//   const textColor =
//     doctor.drGender === "Female" ? "text-[#5E2750]" : "text-[#006642]";

//   return (
//     <Link to={`/doctordetail/${doctor.drID}`} className="doctor-card-link">
//       <div
//         className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300  card-container text-gray-500 ${cardBackgroundColor} shadow-2xl rounded-2xl sm:w-[299px] flex flex-col justify-between`}>
//         <div>
//           <div className="card-header relative w-full">
//             {doctor.image ? (
//               <img
//                 src={doctor.image}
//                 alt={`${doctor.drName}'s picture`}
//                 className="w-full shadow-xl rounded-3xl object-cover p-2"
//               />
//             ) : (
//               <div className="no-image font-ubuntu flex justify-center items-center h-36">
//                 No Image Available
//               </div>
//             )}
//           </div>
//           <div className={`card-name ${backgroundColor} p-2 pt-4 text-center`}>
//             <h1
//               className={`${textColor} font-ubuntu font-bold text-xl truncate`}>
//               {doctor.drName}
//             </h1>
//           </div>
//           <div className="card-body p-4">
//             <p className="text-sm py-2">
//               <strong>Specialization:</strong> {doctor.drSpecilist}
//             </p>
//             <p className="text-sm py-2">
//               <strong>Degrees:</strong> {doctor.drDegree}
//             </p>
//             {/* <p className="text-sm">
//             <strong>Branch:</strong>{" "}
//             {doctor.chember
//               .map((ch) => `${ch.branch}, Room: ${ch.room}`)
//               .join("; ")}
//           </p> */}
//             {/* <div className="py-2 text-sm">
//             <strong>Working Days:</strong>
//             {renderWorkingDays(doctor.chember)}
//           </div> */}
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };


const DoctorCard = ({ doctor }) => {
    const cardBackgroundColor =
      doctor.drGender === "Female"
        ? "bg-gradient-to-b from-transparent via-transparent to-[#fce8f3]/80"
        : "bg-gradient-to-b from-transparent via-transparent to-[#f0fff0]/80";

    const backgroundColor =
      doctor.drGender === "Female"
        ? "group-hover:bg-[#fce8f3]"
        : "group-hover:bg-[#f0fff0]";

    const textColor =
      doctor.drGender === "Female" ? "text-[#5E2750]" : "text-[#006642]";

  return (
    <Link
      to={`/doctordetail/${doctor.drID}`}
      className="doctor-card-link group">
      {/* Wrap the entire DoctorCard with the Link */}
      <div
        className={`relative flex w-72 flex-col rounded-xl ${cardBackgroundColor} bg-clip-border text-gray-700 shadow-md h-full transition-transform duration-700 transform hover:-translate-y-3`}>
        <div className="relative mx-4 mt-4 h-100 overflow-hidden rounded-xl ${backgroundColor} bg-clip-border text-gray-700 shadow-lg">
          {doctor.image ? (
            <img
              src={doctor.image}
              alt={`${doctor.drName}'s picture`}
              className={`w-full shadow-xl ${backgroundColor} rounded-3xl object-cover`}
            />
          ) : (
            <div className="no-image font-ubuntu flex flex-col justify-center items-center p-2 h-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                viewBox="0 0 256 256"
                xmlSpace="preserve">
                <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                  <path
                    d="M 74.453 48.627 c -5.538 0 -11.075 -2.107 -15.291 -6.324 c -6.11 -6.11 -7.768 -14.99 -5.024 -22.629 H 25.502 H 6.058 C 2.712 19.675 0 22.387 0 25.733 v 16.322 L 23.834 62.37 c 2.278 1.942 5.573 2.119 8.047 0.434 l 14.382 -9.801 c 2.33 -1.588 5.408 -1.531 7.677 0.141 l 27.15 20.001 V 47.865 v -0.294 C 78.934 48.263 76.696 48.627 74.453 48.627 z"
                    fill="rgb(193,229,244)"
                  />
                  <circle
                    cx="27.942"
                    cy="37.942"
                    r="6.072"
                    fill="rgb(255,240,169)"
                  />
                  <path
                    d="M 85.446 16.02 c -6.061 -6.061 -15.922 -6.061 -21.983 0 s -6.061 15.923 0 21.984 c 3.031 3.031 7.011 4.546 10.992 4.546 c 3.98 0 7.962 -1.515 10.992 -4.545 C 88.383 35.068 90 31.164 90 27.012 C 90 22.86 88.383 18.956 85.446 16.02 z M 81.891 19.575 c 1.987 1.986 3.081 4.627 3.081 7.436 c 0 1.95 -0.538 3.813 -1.525 5.438 L 69.019 18.021 C 73.062 15.579 78.403 16.087 81.891 19.575 z M 67.018 34.449 c -3.486 -3.487 -3.997 -8.829 -1.554 -12.873 L 79.89 36.003 C 75.847 38.446 70.505 37.935 67.018 34.449 z"
                    fill="rgb(226,147,147)"
                  />
                  <path
                    d="M 0 40.043 v 32.425 c 0 3.346 2.712 6.058 6.058 6.058 h 68.974 c 3.346 0 6.058 -2.712 6.058 -6.058 v -1.335 L 53.94 51.132 c -2.27 -1.672 -5.348 -1.729 -7.677 -0.141 L 31.88 60.792 c -2.473 1.686 -5.769 1.508 -8.047 -0.434 L 0 40.043 z"
                    fill="rgb(150,234,156)"
                  />
                </g>
              </svg>
              <p>No Image Available</p>
            </div>
          )}
        </div>
        <div className="p-6 text-center">
          <h4
            className={`mb-2 block font-sans ${textColor} text-2xl font-semibold leading-snug tracking-normal antialiased`}>
            {doctor.drName}
          </h4>
          <p className="block bg-gradient-to-tr from-gray-400 to-gray-600 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
            <strong>Degrees:</strong> {doctor.drDegree}
          </p>
        </div>
        <div className="flex justify-center gap-7 p-6 pt-2"></div>
      </div>
    </Link>
  );
};


const DoctorSearch = () => {
  const [displayedDoctors, setDisplayedDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [showFemaleDoctors, setShowFemaleDoctors] = useState(false); // State for female doctors
  const [lastDoctorIndex, setLastDoctorIndex] = useState(12); // Initial number of doctors to display
  const branches = Array.from(
    new Set(
      doctorData1.doctors.flatMap((doc) => doc.chember.map((ch) => ch.branch))
    )
  );
  const specializations = Array.from(
    new Set(doctorData1.doctors.map((doc) => doc.drSpecilist))
  );

  useEffect(() => {
    setDisplayedDoctors(doctorData1.doctors.slice(0, lastDoctorIndex));
  }, [lastDoctorIndex]);

  useEffect(() => {
    let result = doctorData1.doctors;

    if (selectedBranch) {
      result = result.filter((doctor) =>
        doctor.chember.some((ch) => ch.branch === selectedBranch)
      );
    }

    if (selectedSpecialization) {
      result = result.filter(
        (doctor) => doctor.drSpecilist === selectedSpecialization
      );
    }

    if (selectedDay) {
      result = result.filter((doctor) =>
        doctor.chember.some((ch) =>
          ch.weekday.some((wd) => wd.day === selectedDay)
        )
      );
    }

    if (searchTerm) {
      result = result.filter((doctor) =>
        doctor.drName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (showFemaleDoctors) {
      result = result.filter((doctor) => doctor.drGender === "Female");
    }

    setDisplayedDoctors(result.slice(0, lastDoctorIndex));
  }, [
    selectedBranch,
    selectedSpecialization,
    selectedDay,
    searchTerm,
    lastDoctorIndex,
    showFemaleDoctors,
  ]);

  // Function to handle lazy loading of doctors
  const loadMoreDoctors = () => {
    // Load more doctors if we're at the end of the scroll if there are more doctors to show
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLastDoctorIndex((prevIndex) => prevIndex + 12);
    }
  };

  // Added event listener for scroll to handle lazy loading
  useEffect(() => {
    window.addEventListener("scroll", loadMoreDoctors);
    return () => window.removeEventListener("scroll", loadMoreDoctors);
  }, []);

  return (
    <div className="bg-[#ffffff]">
      <Sidemenu />
      <Bottommenu />
      <div>
        <div className="flex flex-col pt-[80px] mx-auto max-w-7xl">
          <h2 className="text-gray-900/50 pb-5 text-center pl-2 text-[28px] font-bold font-ubuntu">
            CONSULTANTS
          </h2>
        </div>

        <div className="sticky top-[74px] z-10  rounded-xl shadow-2xl bg-white flex flex-col-reverse gap-2 xl:flex-row p-5 row-span-1 mx-12 xl:mx-auto xl:max-w-7xl justify-between">
          <motion.input
            className="px-2 py-1 border text-[#006642] border-PDCL-green bg-gray-200  rounded-lg focus:outline-none focus:ring-1 focus:ring-PDCL-green"
            type="text"
            placeholder="Search by doctor's name..."
            layout
            transition={spring}
            whileTap={{ scale: 0.9 }}
            variants={buttonVariants}
            whileHover="hover"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <motion.select
            className="px-2 py-1 border text-[#006642] border-PDCL-green bg-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-PDCL-green"
            onChange={(e) => setSelectedBranch(e.target.value)}
            layout
            transition={spring}
            whileTap={{ scale: 0.9 }}
            variants={buttonVariants}
            whileHover="hover">
            <option value="">Select Branch</option>
            {branches.map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </motion.select>

          <motion.select
            className="px-2 py-1 border text-[#006642] border-PDCL-green bg-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-PDCL-green"
            onChange={(e) => setSelectedSpecialization(e.target.value)}
            layout
            transition={spring}
            whileTap={{ scale: 0.9 }}
            variants={buttonVariants}
            whileHover="hover">
            <option value="">Select Specialization</option>
            {specializations.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </motion.select>

          <motion.select
            className="px-2 py-1 border text-[#006642] border-PDCL-green bg-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-PDCL-green"
            onChange={(e) => setSelectedDay(e.target.value)}
            layout
            transition={spring}
            whileTap={{ scale: 0.9 }}
            variants={buttonVariants}
            whileHover="hover">
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
          </motion.select>
          <motion.label
            className="flex items-center gap-2 px-2 py-1 border text-[#5E2750] border-[#5E2750] bg-[#fce8f3] rounded-lg focus:outline-none focus:ring-1 focus:ring-PDCL-green"
            layout
            transition={spring}
            whileTap={{ scale: 0.9 }}
            variants={buttonVariants}
            whileHover="hover">
            Female
            <motion.input
              type="checkbox"
              checked={showFemaleDoctors}
              onChange={() => setShowFemaleDoctors(!showFemaleDoctors)}
              className="form-checkbox text-PDCL-green rounded"
            />
          </motion.label>
        </div>
        <div className="doctor-list flex mx-auto pb-10 px-3 sm:px-0 pt-[50px] max-w-7xl justify-center flex-wrap gap-5">
          {displayedDoctors.map((doctor) => (
            <DoctorCard key={doctor.drID} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorSearch;
