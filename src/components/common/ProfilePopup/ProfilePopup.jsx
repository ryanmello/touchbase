import React from "react";
import { onLogout } from "../../../api/AuthApi";
import './ProfilePopup.scss'
import { useNavigate } from "react-router-dom";

const ProfilePopup = () => {
  const redirect = useNavigate();

  return (
    <div className="profile-popup">
      <ul className="profile-popup-options">
        <li className="profile-popup-option" onClick={() => redirect("/profile")}>View Profile</li>
        <li className="profile-popup-option" onClick={onLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default ProfilePopup;
