import React from "react";
import "./CommentButton.scss";
import { FaRegCommentDots } from "react-icons/fa";
import Modal from "antd/es/modal/Modal";

const CommentButton = ({isModalOpen, setIsModalOpen, post}) => {
  const handleComment = () => {
    setIsModalOpen(true);
  };
  
  return (
    <div>
      <div className="comment-button" onClick={handleComment}>
        <FaRegCommentDots />
        <p>Comment</p>
      </div>
        <Modal
          title={post.userName}
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
        >
          <p>{post.timeStamp}</p>
          <p>{post.status}</p>
          <textarea className="comment-textarea"/>
        </Modal>
    </div>
  );
};

export default CommentButton;
