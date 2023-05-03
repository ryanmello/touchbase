import React, { useState } from "react";
import "./ProfileEdit.scss";
import { editProfile } from "../../../api/FirestoreAPI";

const ProfileEdit = ({ onEdit, currentUser }) => {
  const [editInputs, setEditInputs] = useState({});
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfileData = () => {
    editProfile(currentUser.userId, editInputs);
    onEdit();
  };

  return (
    <div className="profile-edit">
      <div className="profile-edit-container">
        <button className="back-btn" onClick={onEdit}>
          Back
        </button>

        <h2>Edit Profile</h2>
        <div className="profile-edit-inputs">
          <h4>Name</h4>
          <input
            placeholder={currentUser.name}
            className="common-input"
            name="name"
            onChange={getInput}
          ></input>
          <h4>About</h4>
          <input
            placeholder={currentUser.about}
            className="common-input"
            name="about"
            onChange={getInput}
          ></input>
          <h4>Location</h4>
          <input
            placeholder={currentUser.location}
            className="common-input"
            name="location"
            onChange={getInput}
          ></input>
          <h4>Company</h4>
          <input
            placeholder={currentUser.company}
            className="common-input"
            name="company"
            onChange={getInput}
          ></input>
          <h4>College</h4>
          <input
            placeholder={currentUser.college}
            className="common-input"
            name="college"
            onChange={getInput}
          ></input>
        </div>
        <div className="input-btns">
          <button className="save-btn" onClick={updateProfileData}>
            Save
          </button>
          <button className="cancel-btn" onClick={onEdit}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
