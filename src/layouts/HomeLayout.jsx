import React from "react";
import Home from "../pages/Home";
import Topbar from "../components/common/Topbar/Topbar";

const HomeLayout = () => {
  return (
    <div>
      <Topbar />
      <Home />
    </div>
  );
};

export default HomeLayout;
