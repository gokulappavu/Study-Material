import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="fixed top-20 left-40 w-[calc(100vw-160px)] h-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
