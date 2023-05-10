import React, { useState } from "react";
import Modal from "antd/es/modal/Modal";
import { Button, Upload, Progress, Space } from "antd";
import "./FileUploadModal.scss";
import { uploadImage as uploadImageAPI } from "../../../api/ImageUpload";

const FileUploadModal = ({
  currentUser,
  showFileUploadModal,
  setShowFileUploadModal,
  setProgress,
  progress,
}) => {
  const [currentImage, setCurrentImage] = useState({});

  const getImage = (event) => {
    setCurrentImage(event.target.files[0]);
  };

  const uploadImage = () => {
    uploadImageAPI(
      currentImage,
      currentUser.userId,
      setShowFileUploadModal,
      setProgress
    );
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
          <Button
            disabled={currentImage.name ? false : true}
            key="submit"
            type="primary"
            onClick={uploadImage}
          >
            Save
          </Button>,
        ]}
      >
        <div className="image-upload-container">
          <label for="image-upload" className="upload-button">
            Add An Image
          </label>
          {progress === 0 ? (
            <></>
          ) : (
            <div className="progress-bar">
              <Progress type="circle" percent={progress} />
            </div>
          )}
          <input
            hidden
            id="image-upload"
            className="file-input"
            type="file"
            onChange={getImage}
          ></input>
          <p>{currentImage.name}</p>
        </div>
        <div className="container">
          <img className="current-user-image" src={currentUser.imageLink} />
        </div>
      </Modal>
    </div>
  );
};

export default FileUploadModal;
