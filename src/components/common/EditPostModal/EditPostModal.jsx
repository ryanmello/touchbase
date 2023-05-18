import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./EditPostModal.scss";
import { editPost } from "../../../api/FirestoreAPI";
import { AiOutlinePicture } from "react-icons/ai";
import { uploadPostImage } from "../../../api/ImageUpload";
import { editPostImage } from "../../../api/FirestoreAPI";

const EditPostModal = ({
  showEditPostModal,
  setShowEditPostModal,
  post,
  postStatus,
}) => {
  const [status, setStatus] = useState(post.status);
  const [image, setImage] = useState(post.imageLink);
  const [progress, setProgress] = useState(0);

  const getInput = (event) => {
    setStatus(event.target.value);
  };

  const updatePost = () => {
    editPost(post.id, status);
    editPostImage(post.id, image);
    setShowEditPostModal(false);
  };

  const handleCancel = () => {
    setShowEditPostModal(false);
    setImage(post.imageLink);
  };

  return (
    <div>
      <Modal
        title="Edit Post"
        centered
        open={showEditPostModal}
        onOk={() => setShowEditPostModal(false)}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={updatePost}
            disabled={
              status == post.status && image === post.imageLink ? true : false
            }
          >
            Edit Post
          </Button>,
        ]}
      >
        <div>
          <textarea
            className="textarea"
            value={status}
            onChange={getInput}
            name="comment"
          ></textarea>
          <img className="image" src={image}></img>
          <label className="label" htmlFor="input">
            <AiOutlinePicture size={30} />
          </label>
          <input
            onChange={(event) =>
              uploadPostImage(event.target.files[0], setImage, setProgress)
            }
            hidden
            id="input"
            type="file"
          ></input>
        </div>
      </Modal>
    </div>
  );
};

export default EditPostModal;
