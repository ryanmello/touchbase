import React from "react";
import Home from "../pages/Home";
import Topbar from "../components/common/Topbar/Topbar";
import { getCurrentUser } from "../api/FirestoreAPI";
import { useMemo, useState } from "react";

const HomeLayout = () => {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div>
      <Topbar currentUser={currentUser}/>
      <Home currentUser={currentUser}/>
    </div>
  );
};

export default HomeLayout;
