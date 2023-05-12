import React, { useMemo, useState } from "react";
import "./PostCard.scss";
import { useNavigate } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";
import CommentButton from "../CommentButton/CommentButton";
import { getLikesByUser, getAllUsers } from "../../../api/FirestoreAPI";
import { getComments } from "../../../api/FirestoreAPI";
import { BsPencil, BsTrash } from "react-icons/bs";
import EditPostModal from "../EditPostModal/EditPostModal";

const PostCard = ({ post, currentUser, id, getEditData }) => {
  let redirect = useNavigate();
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allComments, setAllComments] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [showEditPostModal, setShowEditPostModal] = useState(false);

  useMemo(() => {
    getLikesByUser(post.userId, post.id, setLiked, setLikesCount);
    getComments(setAllComments, post.id);
    getAllUsers(setAllUsers);
  }, []);

  return (
    <div className="post-card-container">
      <EditPostModal
        showEditPostModal={showEditPostModal}
        setShowEditPostModal={setShowEditPostModal}
        post={post}
        postStatus={post.status}
      />
      <div className="post-card" key={id}>
        <div className="action-container">
          <BsPencil
            className="action-icon"
            onClick={() => setShowEditPostModal(true)}
          ></BsPencil>
          <BsTrash className="action-icon"></BsTrash>
        </div>
        <div className="post-card-image-container">
          <img
            className="post-card-image"
            src={
              allUsers
                .filter((item) => item.userId === post.userId)
                .map((item) => item.imageLink)[0]
            }
          ></img>
        </div>
        <div className="post-content-container">
          <div className="name-timestamp">
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
            <p className="post-card-timestamp"> • {post.timeStamp}</p>
          </div>
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
      </div>
      <div className="comments-container">
        <div className="recent-comment">
          {allComments.length > 0 ? (
            allComments.map((comment) => {
              return (
                <div className="comment-content" key={comment.id}>
                  <div className="comment-heading">
                    <img
                      className="profile-card-image"
                      src={
                        allUsers
                          .filter((item) => item.userId === comment.userId)
                          .map((item) => item.imageLink)[0]
                      }
                    ></img>
                    <div>
                      <div className="name-timestamp">
                        <div className="comment-content-name">
                          {comment.name}
                        </div>
                        <p className="comment-content-timestamp">
                          • {comment.timeStamp}
                        </p>
                      </div>
                      <p className="comment-content-comment">
                        {comment.comment}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
        <button className="comments-button">View More</button>
      </div>
    </div>
  );
};

export default PostCard;
