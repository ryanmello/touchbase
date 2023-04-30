import React from "react";
import Profile from "../pages/Profile";
import Topbar from "../components/common/Topbar/Topbar";

const ProfileLayout = () => {
  return (
    <div>
      <Topbar />
      <Profile />
    </div>
  );
};

export default ProfileLayout;
