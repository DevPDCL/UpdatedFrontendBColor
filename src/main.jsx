import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Nav,
  Navbar,
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
  Error,
  Tech,
} from "./components";
import Home from "./adminpanel/Home";
import Stats from "./adminpanel/Stats";
import Layer from "./adminpanel/Layer";
import Appointment from "./adminpanel/Appointment";
import Csample from "./adminpanel/Csample";
import Ccomplain from "./adminpanel/Ccomplain";
import Management from "./adminpanel/Management";
import "./index.css";

const App = () => {
  return (
    <div>
      <Nav />
      <Navbar />
      <Outlet />
      <Tech />
    </div>
  );
};

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Layout /> },
      { path: "/patient", element: <Patient /> },
      { path: "/login", element: <Login /> },
      { path: "/sample", element: <Sample /> },
      { path: "/search", element: <Search /> },
      { path: "/doctordetail/:doctorId", element: <DoctorDetail /> },
      { path: "/doctorsearch", element: <DoctorSearch /> },
      { path: "/tech", element: <Technology /> },
      { path: "/sign", element: <Sign /> },
      { path: "/goals", element: <Goals /> },
      { path: "/complain", element: <Complain /> },
      { path: "/branch", element: <Branch /> },
      { path: "/director", element: <Director /> },
      { path: "/chairman", element: <Chairman /> },
      { path: "/notice", element: <Notice /> },
      { path: "/contact", element: <Contact /> },
      { path: "/health", element: <Health /> },
      { path: "/details", element: <Details /> },
      { path: "/about", element: <About /> },
      { path: "/layer", element: <Layer /> },
      { path: "/home", element: <Home /> },
      { path: "/stats", element: <Stats /> },
      { path: "/appointment", element: <Appointment /> },
      { path: "/csample", element: <Csample /> },
      { path: "/ccomplain", element: <Ccomplain /> },
      { path: "/management", element: <Management /> },
    ],
    errorElement: <Error />,
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
