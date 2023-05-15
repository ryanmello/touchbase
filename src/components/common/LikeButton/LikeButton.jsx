import React, { useMemo, useState } from "react";
import "./LikeButton.scss";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { likePost } from "../../../api/FirestoreAPI";
import { getLikesByUser } from "../../../api/FirestoreAPI";

const LikeButton = ({ userId, postId }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleLike = () => {
    likePost(userId, postId, liked);
  };

  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount);
  }, [userId, postId]);

  return (
    <div className="like-container" onClick={handleLike}>
      {liked ? (
        <AiFillLike size={20} color="009b2e" />
      ) : (
        <AiOutlineLike size={20} />
      )}
      <p className={liked ? "blue" : "black"}>{liked ? "Liked" : "Like"}</p>
    </div>
  );
};

export default LikeButton;
