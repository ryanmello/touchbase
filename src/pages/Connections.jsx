import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader/Loader";
import ConnectionsComponent from "../components/ConnectionsComponent";

const Connections = ({ currentUser }) => {
  const redirect = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        redirect("/login");
      }
      setLoading(false);
    });
  }, []);

  return loading ? <Loader /> : <ConnectionsComponent currentUser={currentUser} />;
};

export default Connections;
