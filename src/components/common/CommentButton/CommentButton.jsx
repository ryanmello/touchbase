import React from "react";
import "./CommentButton.scss";
import { FaRegCommentDots } from "react-icons/fa";

const CommentButton = () => {
  const handleComment = () => {

  };
  
  return (
    <div className="comment-button" onClick={handleComment}>
      <FaRegCommentDots />
      <p>Comment</p>
    </div>
  );
};

export default CommentButton;
