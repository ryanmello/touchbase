import React from "react";
import "./PostModal.scss";
import { Modal } from "antd";

const PostModal = ({ modalOpen, setModalOpen }) => {
  return (
    <div>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
};

export default PostModal;
