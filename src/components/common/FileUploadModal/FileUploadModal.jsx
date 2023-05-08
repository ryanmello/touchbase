import React, { useState } from "react";
import Modal from "antd/es/modal/Modal";
import { Button, Upload } from "antd";
import "./FileUploadModal.scss";
import { uploadImage as uploadImageAPI } from "../../../api/ImageUpload";

const FileUploadModal = ({
  currentUser,
  showFileUploadModal,
  setShowFileUploadModal,
}) => {
  const [currentImage, setCurrentImage] = useState({});

  const getImage = (event) => {
    setCurrentImage(event.target.files[0]);
  };

  const uploadImage = () => {
    uploadImageAPI(currentImage, currentUser.userId);
    setShowFileUploadModal(false);
  };

  return (
    <div>
      <Modal
        title="Upload Image"
        open={showFileUploadModal}
        onCancel={() => setShowFileUploadModal(false)}
        footer={[
          <Button key="back" onClick={() => setShowFileUploadModal(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={uploadImage}>
            Save
          </Button>,
        ]}
      >
        <input className="file-input" type="file" onChange={getImage}></input>
        <div className="container">
          <img className="current-user-image" src={currentUser.imageLink} />
        </div>
      </Modal>
    </div>
  );
};

export default FileUploadModal;
