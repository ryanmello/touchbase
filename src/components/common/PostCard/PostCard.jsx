import React, { useMemo, useState } from "react";
import "./PostCard.scss";
import { useNavigate } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";
import CommentButton from "../CommentButton/CommentButton";
import { getLikesByUser } from "../../../api/FirestoreAPI";
import Modal from "antd/es/modal/Modal";
import { getComments } from "../../../api/FirestoreAPI";

const PostCard = ({ post, currentUser, id }) => {
  let redirect = useNavigate();
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allComments, setAllComments] = useState([]);

  useMemo(() => {
    getLikesByUser(post.userId, post.id, setLiked, setLikesCount);
    getComments(setAllComments, post.id)
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
            <CommentButton
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              post={post}
              currentUser={currentUser}
              currentUserId={id}
            />
          </div>
        </div>
      </div>
      <div className="comments-container">
        <div className="recent-comment">
          {allComments.length > 0 ? allComments.map((comment) => {
            return (
              <div className="comment-content" key={comment.id}> 
                <p className="comment-content-name">{comment.name}</p>
                <p>{comment.comment}</p>
              </div>
            )
          }) : <></>}
        </div>
        <button className="comments-button">View More</button>
      </div>
    </div>
  );
};

export default PostCard;
