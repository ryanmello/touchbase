import React from "react";
import "./LikeButton.scss";
import { AiOutlineLike } from "react-icons/ai";
import { likePost } from "../../../api/FirestoreAPI";

const LikeButton = ({ userId, postId }) => {
  const handleLike = () => {
    likePost(userId, postId);
  };

  return (
    <div className="like-container" onClick={handleLike}>
      <AiOutlineLike size={20}/>
      <p>Like</p>
    </div>
  );
};

export default LikeButton;
