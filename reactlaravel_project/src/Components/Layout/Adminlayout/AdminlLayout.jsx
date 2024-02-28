/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "./sidebar";
import Header from "./Header"
import { Outlet } from "react-router-dom";

const AdminlLayout = () => {
  return (
    <div className="row">
      <div className="">
        <Header />
      </div>
      <div className="col-3">
       <Sidebar />
      </div>
      <div className="col-9">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminlLayout;
