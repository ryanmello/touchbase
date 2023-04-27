import React from "react";
import  { useEffect } from "react";
import "./topbar.scss";
import LinkedinLogo from "../../../assets/linkedinLogo.png";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import User from "../../../assets/user.png";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const redirect = useNavigate();
  const goToRoute = (route) => {
    redirect(route)
  }

  return (
    <div className="topbar-main">
      <img className="topbar-logo" src={LinkedinLogo} alt="" />
      <div className="react-icons">
        <AiOutlineSearch size={25} className="react-icon"/>
        <AiOutlineHome size={25} className="react-icon" onClick={() => goToRoute("/home")}/>
        <AiOutlineUserSwitch size={25} className="react-icon" onClick={() => goToRoute("/profile")}/>
        <BsBriefcase size={25} className="react-icon"/>
        <AiOutlineMessage size={25} className="react-icon"/>
        <AiOutlineBell size={25} className="react-icon"/>
        <div className="user-container">
            <img className="user" src={User} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Topbar;
