import React, { useState } from "react";
import "./ProfileCard.scss";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ currentUser, onEdit }) => {
  const redirect = useNavigate();

  return (
    <div className="profile-card">
      <div className="profile-card-container">
        <button className="edit-btn" onClick={onEdit}>
          Edit
        </button>
        <h3 className="username">{currentUser.name}</h3>
        <p className="email">{currentUser.email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
