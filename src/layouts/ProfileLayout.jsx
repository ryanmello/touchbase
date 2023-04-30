import React, { useMemo, useState } from "react";
import Profile from "../pages/Profile";
import Topbar from "../components/common/Topbar/Topbar";
import { getCurrentUser } from "../api/FirestoreAPI";

const ProfileLayout = () => {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div>
      <Topbar />
      <Profile currentUser={currentUser} />
    </div>
  );
};

export default ProfileLayout;
