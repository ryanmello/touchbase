import React from "react";
import Connections from "../pages/Connections";
import Home from "../pages/Home";
import Topbar from "../components/common/Topbar/Topbar";
import { getCurrentUser } from "../api/FirestoreAPI";
import { useMemo, useState } from "react";

const ConnectionLayout = () => {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div>
      <Topbar />
      <Connections currentUser={currentUser}></Connections>
    </div>
  );
};

export default ConnectionLayout;
