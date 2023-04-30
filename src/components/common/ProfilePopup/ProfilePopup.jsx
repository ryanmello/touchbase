import React from "react";
import { onLogout } from "../../../api/AuthApi";
import './ProfilePopup.scss'

const ProfilePopup = () => {
  return (
    <div className="profile-popup">
      <ul className="profile-popup-options">
        <li className="profile-popup-option" onClick={onLogout}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default ProfilePopup;
