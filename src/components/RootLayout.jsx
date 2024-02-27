import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Home from "./Home";

const RootLayout = () => {
  return (
    <>
      <div className="w-full flex justify-evenly">
        <Home>
            <Outlet />
       </Home>
      </div>
    </>
  );
};

export default RootLayout;
