import React from "react";
import "./PostCard.scss";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post, id }) => {
  let redirect = useNavigate();

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
      </div>
    </div>
  );
};

export default PostCard;
