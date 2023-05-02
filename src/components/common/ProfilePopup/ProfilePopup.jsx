import React from "react";
import { onLogout } from "../../../api/AuthAPI";
import "./ProfilePopup.scss";
import { useNavigate } from "react-router-dom";

const ProfilePopup = () => {
  const redirect = useNavigate();

  const onViewProfile = () => {
    redirect("/profile");
  };

  return (
    <div className="profile-popup">
      <ul className="profile-popup-options">
        <li className="profile-popup-option" onClick={onViewProfile}>
          View Profile
        </li>
        <li className="profile-popup-option" onClick={onLogout}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default ProfilePopup;
