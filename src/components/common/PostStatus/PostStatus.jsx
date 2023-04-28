import React from "react";
import "./PostStatus.scss";
import { useState } from "react";
import PostModal from "../PostModal/PostModal";
import { postStatus } from "../../../api/FirestoreAPI";

const PostStatus = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");

  const sendStatus = () => {
    postStatus(status);
    setModalOpen(false);
  };

  return (
    <div className="post-status-container">
      <div className="post-status">
        <button className="open-post-modal" onClick={() => setModalOpen(true)}>
          Start a post
        </button>
      </div>
      <PostModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        status={status}
        setStatus={setStatus}
        sendStatus={sendStatus}
      />
    </div>
  );
};

export default PostStatus;
