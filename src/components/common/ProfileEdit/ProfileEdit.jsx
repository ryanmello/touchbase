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
            placeholder="Name"
            className="common-input"
            name="name"
            value={currentUser.name}
            onChange={getInput}
          ></input>
          <h4>About</h4>
          <input
            placeholder="About"
            className="common-input"
            name="about"
            value={currentUser.about}
            onChange={getInput}
          ></input>
          <h4>Location</h4>
          <input
            placeholder="Location"
            className="common-input"
            name="location"
            value={currentUser.location}
            onChange={getInput}
          ></input>
          <h4>Company</h4>
          <input
            placeholder="Company"
            className="common-input"
            name="company"
            value={currentUser.company}
            onChange={getInput}
          ></input>
          <h4>College</h4>
          <input
            placeholder="College"
            className="common-input"
            name="college"
            value={currentUser.college}
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
