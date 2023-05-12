import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./EditPostModal.scss";
import { editPost } from "../../../api/FirestoreAPI";

const EditPostModal = ({ showEditPostModal, setShowEditPostModal, post, postStatus }) => {
  const [status, setStatus] = useState(post.status)

  const getInput = (event) => {
    setStatus(event.target.value)
  }

  const updatePost = () => {
    editPost(post.id, status);
    setShowEditPostModal(false)
  };

  return (
    <div>
      <Modal
        title="Edit Post"
        centered
        open={showEditPostModal}
        onOk={() => setShowEditPostModal(false)}
        onCancel={() => setShowEditPostModal(false)}
        footer={[
          <Button key="back" onClick={() => setShowEditPostModal(false)}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={updatePost}
            disabled={status == post.status ? true : false}
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
        </div>
      </Modal>
    </div>
  );
};

export default EditPostModal;
