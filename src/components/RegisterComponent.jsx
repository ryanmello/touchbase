import React, { useState } from "react";
import { RegisterAPI } from "../api/AuthAPI.jsx";
import { postUserData } from "../api/FirestoreAPI";
import "../sass/RegisterComponent.scss";
import LinkedInLogo from "../assets/linkedinLogo.png";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUniqueId } from "../helpers/getUniqueId.jsx";

const RegisterComponent = () => {
  const [credentials, setCredentials] = useState();
  const redirect = useNavigate();

  const register = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      localStorage.setItem("userEmail", res.user.email);
      postUserData({
        userId: getUniqueId(),
        name: credentials.name,
        email: credentials.email,
        imageLink:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      });
      toast.success("Success");
      redirect("/home");
    } catch (error) {
      console.log(error);
      toast.error("Error");
    }
  };

  return (
    <div className="register-wrapper">
      <img src={LinkedInLogo} className="linkedin-logo"></img>
      <div className="register-wrapper-inner">
        <h1 className="heading">Register</h1>
        <p className="subheading">Make the most of your professional life</p>
        <div className="register-inputs">
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, name: e.target.value })
            }
            className="common-input"
            placeholder="Name"
          />
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            className="common-input"
            placeholder="Email"
          />
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button className="register-btn" onClick={register}>
          Agree & Join
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signin">
          <span className="join-now" onClick={() => redirect("/login")}>
            Back to Sign In{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterComponent;
