import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components";

const MainRouter = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <div className="">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} />
        <Outlet />
    </div>
  )
}

export default MainRouter;