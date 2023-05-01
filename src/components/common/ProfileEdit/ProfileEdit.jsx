import React from "react";
import "./ProfileEdit.scss";

const ProfileEdit = ({ onEdit }) => {
  const getInput = (event) => {

  };

  return (
    <div className="profile-edit">
      <div className="profile-edit-container">
        <button className="back-btn" onClick={onEdit}>
          Back
        </button>

        <h2>Edit Profile</h2>
        <div className="profile-edit-inputs">
          <input
            placeholder="Name"
            className="common-input"
            name="name"
            onChange={getInput}
          ></input>
          <input
            placeholder="About"
            className="common-input"
            name="about"
            onChange={getInput}
          ></input>
          <input
            placeholder="Location"
            className="common-input"
            name="location"
            onChange={getInput}
          ></input>
          <input
            placeholder="Company"
            className="common-input"
            name="company"
            onChange={getInput}
          ></input>
          <input
            placeholder="College"
            className="common-input"
            name="college"
            onChange={getInput}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
