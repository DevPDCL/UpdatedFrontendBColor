import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sidemenu, Bottommenu, Nav, Navbar, Tech } from "../components";
import { doctorData1 } from "../constants";

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

const DoctorCard = ({ doctor }) => {
  // const renderWorkingDays = (chambers) => {
  //   const allDays = chambers.flatMap((chamber) =>
  //     chamber.weekday.map((wd) => wd.day)
  //   );
  //   const uniqueDays = Array.from(new Set(allDays));

  //   // Split the days into two columns for rendering
  //   const midpoint = Math.ceil(uniqueDays.length / 2);
  //   const firstColumn = uniqueDays.slice(0, midpoint);
  //   const secondColumn = uniqueDays.slice(midpoint);

  //   return (
  //     <div className="flex">
  //       <ul className="list-disc pl-5 w-1/2">
  //         {firstColumn.map((day, index) => (
  //           <li key={index}>{day}</li>
  //         ))}
  //       </ul>
  //       <ul className="list-disc pl-5 w-1/2">
  //         {secondColumn.map((day, index) => (
  //           <li key={index}>{day}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // };
  const cardBackgroundColor =
    doctor.drGender === "Female"
      ? "bg-gradient-to-b from-[#F5FFFA]/20 to-[#fce8f3]/90"
      : "bg-gradient-to-b from--[#F5FFFA]/20 to-[#f0fff0]/90";

  const backgroundColor =
    doctor.drGender === "Female" ? "bg-[#fce8f3]" : "bg-[#f0fff0]";

  const textColor =
    doctor.drGender === "Female" ? "text-[#5E2750]" : "text-[#006642]";

  return (
    <div
      className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300  card-container text-gray-500 ${cardBackgroundColor} shadow-2xl rounded-2xl sm:w-[299px] flex flex-col justify-between`}>
      <div>
        <div className="card-header relative w-full">
          {doctor.image ? (
            <img
              src={doctor.image}
              alt={`${doctor.drName}'s picture`}
              className="w-full shadow-xl rounded-3xl object-cover p-2"
            />
          ) : (
            <div className="no-image font-ubuntu flex justify-center items-center h-36">
              No Image Available
            </div>
          )}
        </div>
        <div className={`card-name ${backgroundColor} p-2 pt-4 text-center`}>
          <h1 className={`${textColor} font-ubuntu font-bold text-xl truncate`}>
            {doctor.drName}
          </h1>
        </div>
        <div className="card-body p-4">
          <p className="text-sm py-2">
            <strong>Specialization:</strong> {doctor.drSpecilist}
          </p>
          <p className="text-sm py-2">
            <strong>Degrees:</strong> {doctor.drDegree}
          </p>
          {/* <p className="text-sm">
            <strong>Branch:</strong>{" "}
            {doctor.chember
              .map((ch) => `${ch.branch}, Room: ${ch.room}`)
              .join("; ")}
          </p> */}
          {/* <div className="py-2 text-sm">
            <strong>Working Days:</strong>
            {renderWorkingDays(doctor.chember)}
          </div> */}
        </div>
      </div>
    </div>
  );
};

const DoctorDetail = () => {
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

export default DoctorDetail;
