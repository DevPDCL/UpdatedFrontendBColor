import React from "react";
import {
  Feedbacks,
  Hero,
  Cor,
  Sidemenu,
  Search,
  Works,
} from "../components";

function Layout() {
  return (
    <div className="bg-[#ffffff]">
      <Sidemenu />
      <Hero />
      <Search />
      <Works />
      <Cor />
      <Feedbacks />
    </div>
  );
}

export default Layout;
