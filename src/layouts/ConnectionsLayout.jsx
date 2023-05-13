import React from "react";
import Connections from "../pages/Connections";
import Home from "../pages/Home";
import Topbar from "../components/common/Topbar/Topbar";
import { getCurrentUser } from "../api/FirestoreAPI";
import { useMemo, useState } from "react";

const ConnectionsLayout = () => {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div>
      <Topbar currentUser={currentUser} />
      <Connections currentUser={currentUser}></Connections>
    </div>
  );
};

export default ConnectionsLayout;
