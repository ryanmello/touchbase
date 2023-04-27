import React from "react";
import "./PostModal.scss";
import { Button, Modal } from "antd";

const PostModal = ({ modalOpen, setModalOpen, status, setStatus }) => {


  return (
    <div>
      <Modal
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button key="submit" type="primary" disabled={status.length > 0 ? false : true}>
            Post
          </Button>
        ]}
      >
        <textarea
          placeholder="What do you want to talk about?"
          className="modal-textarea"
          onChange={(event) => setStatus(event.target.value)}
        ></textarea>
      </Modal>
    </div>
  );
};

export default PostModal;
