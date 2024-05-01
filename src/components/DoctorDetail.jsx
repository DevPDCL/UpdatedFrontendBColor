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
  } = selectedDoctor;

  return (
    <div className="doctor-detail">
      <h2>{drName}</h2>
      <p>Specialization: {drSpecilist}</p>
      <p>Degrees: {drDegree}</p>
      <p>Doctor Number: {drNumber}</p>
      <p>Email: {email}</p>
      <p>Gender: {drGender}</p>
      {/* Display other relevant details */}
    </div>
  );
};

export default DoctorDetail;
