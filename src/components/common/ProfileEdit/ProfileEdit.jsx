import React, { useState } from "react";
import "./ProfileEdit.scss";
import { editProfile } from "../../../api/FirestoreAPI";
import { AiOutlineClose } from "react-icons/ai";

const ProfileEdit = ({ onEdit, currentUser }) => {
  const [editInputs, setEditInputs] = useState(currentUser);

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
        <div className="heading">
          <h2>Edit Profile</h2>
          <AiOutlineClose className="close" size={30} onClick={onEdit} />
        </div>
        <div className="profile-edit-inputs">
          <h4>Name</h4>
          <input
            value={editInputs.name}
            placeholder="Name"
            className="common-input"
            name="name"
            onChange={getInput}
          ></input>
          <h4>Headline</h4>
          <input
            value={editInputs.headline}
            placeholder="Headline"
            className="common-input"
            name="headline"
            onChange={getInput}
          ></input>
          <h4>Location</h4>
          <input
            value={editInputs.location}
            placeholder="Location"
            className="common-input"
            name="location"
            onChange={getInput}
          ></input>
          <h4>City</h4>
          <input
            value={editInputs.city}
            placeholder="City"
            className="common-input"
            name="city"
            onChange={getInput}
          ></input>
          <h4>Company</h4>
          <input
            value={editInputs.company}
            placeholder="Company"
            className="common-input"
            name="company"
            onChange={getInput}
          ></input>
          <h4>Industry</h4>
          <input
            value={editInputs.industry}
            placeholder="Industry"
            className="common-input"
            name="industry"
            onChange={getInput}
          ></input>
          <h4>College</h4>
          <input
            value={editInputs.college}
            placeholder="College"
            className="common-input"
            name="college"
            onChange={getInput}
          ></input>
          <h4>Website</h4>
          <input
            value={editInputs.website}
            placeholder="Website"
            className="common-input"
            name="website"
            onChange={getInput}
          ></input>
          <h4>About</h4>
          <textarea
            value={editInputs.about}
            placeholder="About"
            className="common-textarea"
            name="about"
            onChange={getInput}
          ></textarea>
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
