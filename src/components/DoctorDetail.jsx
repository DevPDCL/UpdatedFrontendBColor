// DoctorDetail.js

import React from "react";
import { useParams } from "react-router-dom";
import { doctorData1 } from "../constants"; // Import your doctor data

const DoctorDetail = () => {
  const { doctorId } = useParams();
  const selectedDoctor = doctorData1.doctors.find(
    (doctor) => doctor.drID.toString() === doctorId
  );

  if (!selectedDoctor) {
    return <div>Doctor not found.</div>;
  }

  const {
    drName,
    drSpecilist,
    drDegree,
    chember,
    drNumber,
    email,
    drGender,
    newPatientVisit,
    oldPatient,
    report,
    image,
    currPractice,
  } = selectedDoctor;

  return (
    <div className="doctor-detail bg-gray-100">
      <div className="container mx-auto py-10 p-5">
        <div className="md:flex no-wrap md:-mx-2">
          {/* Left Side */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* Profile Card */}
            <div className="bg-white p-3 border-t-4 border-[#006642]">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src={image}
                  alt="Profile"
                />
              </div>
              <h1 className="text-gray-700 font-bold text-xl leading-8 my-1">
                {drName}
              </h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                Specialization: {drSpecilist}
              </h3>
              <div className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                <p>Degrees: {drDegree}</p>
                {/* Display other relevant details */}
              </div>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-[#006642] py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">Nov 07, 2016</span>
                </li>
              </ul>
            </div>
            {/* End of profile card  */}
            <div className="my-4"></div>
            {/* Friends card  */}
            <div className="bg-white p-3 hover:shadow">
              <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                <span className="text-[#006642]">
                  {" "}
                  <svg
                    className="h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span>More from {drSpecilist}</span>
              </div>
              <div className="grid grid-cols-3 text-[#006642]">
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src={image}
                    alt=""
                  />
                  <a href="#">{drName}</a>
                </div>
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src={image}
                    alt=""
                  />
                  <a href="#">{drName}</a>
                </div>
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src={image}
                    alt=""
                  />
                  <a href="#">{drName}</a>
                </div>
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src={image}
                    alt=""
                  />
                  <a href="#">{drName}</a>
                </div>
              </div>
            </div>
            {/* End of friends card  */}
          </div>
          {/* Right Side */}
          <div class="w-full md:w-9/12 mx-2 h-64">
            {/* Profile tab  */}
            {/* About Section  */}
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div>
                <h1 className="text-[#006642] text-center font-bold text-[18px]"> {currPractice} </h1>
              </div>
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-[#006642]">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Full Name</div>
                    <div className="px-4 py-2">{drName}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">{drGender}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">+88 {drNumber}</div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">
                      <a
                        className="text-[#006642]"
                        href="mailto:jane@example.com">
                        {email}
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Chembers</div>
                    <div className="px-4 py-2">{chember.branch}</div>
                  </div>
                </div>
              </div>
              <button className="block w-full text-[#006642] text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Show Full Information
              </button>
            </div>
            {/* End of about section */}
            <div className="my-4"></div>
            {/* Experience and education  */}
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="grid grid-cols-2">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-[#006642]">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Experience</span>
                  </div>
                  <ul className="list-inside space-y-2 text-[#006642]">
                    <li>
                      <div>Owner at Her Company Inc.</div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div>Owner at Her Company Inc.</div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div>Owner at Her Company Inc.</div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div>Owner at Her Company Inc.</div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-[#006642]">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Education</span>
                  </div>
                  <ul className="list-inside space-y-2 text-[#006642]">
                    <li>
                      <div>Masters Degree in Oxford</div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div>Bachelors Degree in LPU</div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End of Experience and education grid */}
            </div>
            {/* End of profile tab */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
