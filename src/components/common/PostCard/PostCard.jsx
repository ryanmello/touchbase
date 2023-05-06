import React, { useMemo, useState } from "react";
import "./PostCard.scss";
import { useNavigate } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";
import CommentButton from "../CommentButton/CommentButton";
import { getLikesByUser } from "../../../api/FirestoreAPI";
import Modal from "antd/es/modal/Modal";

const PostCard = ({ post, id }) => {
  let redirect = useNavigate();
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false)

  useMemo(() => {
    getLikesByUser(post.userId, post.id, setLiked, setLikesCount);
  }, [post.userId, post.id]);

  return (
    <div className="post-card-container">
      <div className="post-card" key={id}>
        <p
          className="post-card-username"
          onClick={() =>
            redirect("/profile", {
              state: { id: post?.userId, email: post.userEmail },
            })
          }
        >
          {post.userName}
        </p>
        <p className="post-card-timestamp">{post.timeStamp}</p>
        <p className="post-card-status">{post.status}</p>
        <div className="actions">
          <p>
            {likesCount} {likesCount === 1 ? "person likes" : "people like"}{" "}
            this post{" "}
          </p>
          <div className="like-comment">
            <LikeButton userId={id} postId={post.id} />
            <CommentButton isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} post={post}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
