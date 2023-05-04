import React, { useState } from "react";
import Modal from "antd/es/modal/Modal";
import { Button } from "antd";
import { editProfile } from "../../../api/FirestoreAPI";
import "./ProfileEditModal.scss";

const ProfileEditModal = ({ openEditModal, setOpenEditModal, currentUser }) => {
  const [editInputs, setEditInputs] = useState(currentUser);

  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfileData = () => {
    editProfile(currentUser.userId, editInputs);
    setOpenEditModal(false);
  };

  return (
    <div>
      <Modal
        className="profile-edit-modal-container"
        centered
        open={openEditModal}
        onOk={() => setOpenEditModal(false)}
        onCancel={() => setOpenEditModal(false)}
        footer={[
          <Button onClick={updateProfileData} key="submit" type="primary">
            Save
          </Button>,
        ]}
      >
        <h2>Edit Profile</h2>
        <div className="profile-edit-inputs">
          <h4>Name</h4>
          <input
            value={editInputs.name}
            placeholder="Name"
            className="common-input modal-input"
            name="name"
            onChange={getInput}
          ></input>
          <h4>Headline</h4>
          <input
            value={editInputs.headline}
            placeholder="Headline"
            className="common-input modal-input"
            name="headline"
            onChange={getInput}
          ></input>
          <h4>Location</h4>
          <input
            value={editInputs.location}
            placeholder="Location"
            className="common-input modal-input"
            name="location"
            onChange={getInput}
          ></input>
          <h4>Company</h4>
          <input
            value={editInputs.company}
            placeholder="Company"
            className="common-input modal-input"
            name="company"
            onChange={getInput}
          ></input>
          <h4>Industry</h4>
          <input
            value={editInputs.industry}
            placeholder="Industry"
            className="common-input modal-input"
            name="industry"
            onChange={getInput}
          ></input>
          <h4>College</h4>
          <input
            value={editInputs.college}
            placeholder="College"
            className="common-input modal-input"
            name="college"
            onChange={getInput}
          ></input>
          <h4>Website</h4>
          <input
            value={editInputs.website}
            placeholder="Website"
            className="common-input modal-input"
            name="website"
            onChange={getInput}
          ></input>
          <h4>About</h4>
          <textarea
            value={editInputs.about}
            placeholder="About"
            className="common-textarea modal-input"
            name="about"
            onChange={getInput}
          ></textarea>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileEditModal;
