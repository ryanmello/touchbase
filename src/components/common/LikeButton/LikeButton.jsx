import React from "react";
import "./LikeButton.scss";
import { AiOutlineLike } from "react-icons/ai";

const LikeButton = ({ userId, postId }) => {
  const handleLike = () => {

  };

  return (
    <div className="like-container">
      <AiOutlineLike size={20} onClick={handleLike}/>
      <p>Like</p>
    </div>
  );
};

export default LikeButton;
