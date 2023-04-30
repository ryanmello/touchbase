import React from "react";
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import ProfilePopup from "../ProfilePopup/ProfilePopup";

const Topbar = () => {
  const[popupVisible, setPopupVisible] = useState(false);

  const redirect = useNavigate();
  const goToRoute = (route) => {
    redirect(route)
  }

  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  }

  return (
    <div className="topbar-main">
      {popupVisible? (
        <div className="popup-position">
          <ProfilePopup />
        </div>
      ) : (
        <></>
      )}


      {/* <img className="topbar-logo" src={LinkedinLogo} alt="" /> */}
      <div className="topbar-logo">TouchBase</div>
      <div className="react-icons">
        <AiOutlineSearch size={25} className="react-icon"/>
        <AiOutlineHome size={25} className="react-icon" onClick={() => goToRoute("/home")}/>
        <AiOutlineUserSwitch size={25} className="react-icon" onClick={() => goToRoute("/connections")}/>
        <BsBriefcase size={25} className="react-icon" onClick={() => goToRoute("/jobs")}/>
        <AiOutlineMessage size={25} className="react-icon" onClick={() => goToRoute("/messages")}/>
        <AiOutlineBell size={25} className="react-icon" onClick={() => goToRoute("/notifications")}/>
        <div className="user-container">
            <img className="user" src={User} alt="" onClick={displayPopup}/>
        </div>

      </div>
    </div>
  );
};

export default Topbar;
