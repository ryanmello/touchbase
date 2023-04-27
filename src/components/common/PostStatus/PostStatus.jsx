import React from "react";
import "./PostStatus.scss";
import { useState } from "react";
import PostModal from "../PostModal/PostModal";

const PostStatus = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");

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
      />
    </div>
  );
};

export default PostStatus;
