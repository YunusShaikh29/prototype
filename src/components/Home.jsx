import React from "react";
import Sidebar from "./Sidebar";
// import Sidebar from "./Sidebar";

function Home({children}) {
  return (
    <div className="flex">
     <Sidebar />
     <div className="flex-grow">{children}</div>
    </div>
  );
}

export default Home;
