import React from "react";
import LoginComponent from "../components/common/LoginComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader/Loader";

const Login = () => {
  const redirect = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        redirect("/home");
      }
      setLoading(false);
    });
  }, []);

  return loading ? <Loader /> : <LoginComponent />;
};

export default Login;
