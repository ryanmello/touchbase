import React, { useState } from "react";
import { LoginAPI, RegisterAPI, GoogleSignInAPI } from "../../api/AuthAPI.jsx";
import "../../sass/LoginComponent.scss";
import LinkedInLogo from "../../assets/linkedinLogo.png";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginComponent = () => {
  const [credentials, setCredentials] = useState();
  const redirect = useNavigate();

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      localStorage.setItem('userEmail', res.user.email);
      toast.success("Success");
      redirect("/home");
    } catch (error) {
      console.log(error);
      toast.error("Error");
    }
  };

  // const googleSignIn = () => {
  //   let response = GoogleSignInAPI();
  //   console.log(response);
  // }

  return (
    <div className="login-wrapper">
      <img src={LinkedInLogo} className="linkedin-logo"></img>
      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="subheading">Stay updated on your professional world</p>
        <div className="auth-inputs">
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
            className="common-input password"
            placeholder="Password"
          />
          <div onClick={() => redirect("/reset")}>
            <span className="forgot-password">Forgot password?</span>
          </div>
        </div>
        <button className="login-btn" onClick={login}>
          Sign in
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          New to LinkedIn?{" "}
          <span className="join-now" onClick={() => redirect("/register")}>
            Join now
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
