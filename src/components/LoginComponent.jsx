import React, { useState } from "react";
import { LoginAPI, ResgisterAPI } from "../api/AuthApi";
import "../sass/LoginComponent.scss";

const LoginComponent = () => {
  const [credentials, setCredentials] = useState();
  const login = () => {
    try {
      let res = ResgisterAPI(credentials.email, credentials.password);
    } catch (error) {}
  };

  return (
    <div className="login-wrapper">
      <h1>Login Component</h1>
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
          className="common-input"
          placeholder="Password"
        />
      </div>
      <button className="login-btn" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default LoginComponent;
