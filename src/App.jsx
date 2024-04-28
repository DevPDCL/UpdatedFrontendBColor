import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Branch,
  Layout,
  Sample,
  Contact,
  Health,
  Search,
  DoctorDetail,
  DoctorSearch,
  Technology,
  Details,
  About,
  Complain,
  Chairman,
  Goals,
  Login,
  Notice,
  Sign,
  Patient,
  Director,
} from "./components";
import Home from "./adminpanel/Home";
import Stats from "./adminpanel/Stats";
import Layer from "./adminpanel/Layer";
import Appointment from "./adminpanel/Appointment";
import Csample from "./adminpanel/Csample";
import Ccomplain from "./adminpanel/Ccomplain";
import Management from "./adminpanel/Management";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/search" element={<Search />} />
          <Route path="/doctordetail" element={<DoctorDetail />} />
          <Route path="/doctorsearch" element={<DoctorSearch />} />
          <Route path="/tech" element={<Technology />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/complain" element={<Complain />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/director" element={<Director />} />
          <Route path="/chairman" element={<Chairman />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/health" element={<Health />} />
          <Route path="/details" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/layer" element={<Layer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/csample" element={<Csample />} />
          <Route path="/ccomplain" element={<Ccomplain />} />
          <Route path="/management" element={<Management />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
