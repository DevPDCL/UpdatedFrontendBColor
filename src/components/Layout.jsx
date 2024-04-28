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
    <div className="bg-[#F5FFFA]">
      <Nav  />

      <Navbar  />
      <Sidemenu />
      <Bottommenu />
      <Hero />
      <Search />
      <Works />
      <Feedbacks />
      <Cor  />
      <Tech  />
    </div>
  );
}

export default Layout;
