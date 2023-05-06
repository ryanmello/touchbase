import React from "react";
import "./CommentButton.scss";
import { FaRegCommentDots } from "react-icons/fa";
import { Button, Modal } from "antd";
import { commentPost } from "../../../api/FirestoreAPI";
import { useState } from "react";

const CommentButton = ({ isModalOpen, setIsModalOpen, post, currentUserId }) => {
  const [comment, setComment] = useState("");

  const handleComment = () => {
    let object = {
      usedId: currentUserId,
      postId: post.id,
      comment: comment,
    };

    commentPost(object);
    setIsModalOpen(false);
    () => setComment("");
  };

  return (
    <div>
      <div className="comment-button" onClick={() => setIsModalOpen(true)}>
        <FaRegCommentDots />
        <p>Comment</p>
      </div>
      <Modal
        title={post.userName}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>,
          <Button
            onClick={handleComment}
            key="submit"
            type="primary"
            disabled={comment.length > 0 ? false : true}
          >
            Comment
          </Button>,
        ]}
      >
        <p>{post.timeStamp}</p>
        <p>{post.status}</p>
        <textarea
          onChange={(event) => setComment(event.target.value)}
          className="comment-textarea"
        />
      </Modal>
    </div>
  );
};

export default CommentButton;
