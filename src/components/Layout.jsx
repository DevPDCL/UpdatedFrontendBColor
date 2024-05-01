import React from "react";
import {
  Feedbacks,
  Hero,
  Cor,
  Nav,
  Sidemenu,
  Search,
  Navbar,
  Bottommenu,
  Tech,
  Works,
} from "../components";

function Layout() {
  return (
    <div className="bg-[#ffffff]">
      <Sidemenu />
      <Bottommenu />
      <Hero />
      <Search />
      <Works />
      <Feedbacks />
      <Cor  />
    </div>
  );
}

export default Layout;
