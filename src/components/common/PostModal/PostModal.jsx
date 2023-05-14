import React from "react";
import "./PostModal.scss";
import { Button, Modal } from "antd";
import { AiOutlinePicture } from "react-icons/ai";

const PostModal = ({
  modalOpen,
  setModalOpen,
  status,
  setStatus,
  sendStatus,
  setPostImageLink,
  uploadPostImage,
}) => {

  const handleModalClose = () => {
    setModalOpen(false);
    setPostImageLink("");
  }

  return (
    <div>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={handleModalClose}
        footer={[
          <Button
            onClick={sendStatus}
            key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
          >
            Post
          </Button>,
        ]}
      >
        <textarea
          placeholder="What do you want to talk about?"
          className="modal-textarea"
          onChange={(event) => setStatus(event.target.value)}
        ></textarea>
        <label className="image-label" htmlFor="file-upload">
          <AiOutlinePicture size={30} />
        </label>
        <input hidden id="file-upload" type="file" onChange={(event) => uploadPostImage(event.target.files[0], setPostImageLink)}></input>
      </Modal>
    </div>
  );
};

export default PostModal;
