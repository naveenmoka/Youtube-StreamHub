import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />

      {/* Main content area */}
      <div className={`flex-1 transition-all duration-200 overflow-x-hidden`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
