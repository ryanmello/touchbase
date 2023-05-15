import React, { useMemo, useState, useEffect } from "react";
import "./PostCard.scss";
import { useNavigate } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";
import CommentButton from "../CommentButton/CommentButton";
import { getLikesByUser, getAllUsers } from "../../../api/FirestoreAPI";
import { getComments } from "../../../api/FirestoreAPI";
import { BsPencil, BsTrash } from "react-icons/bs";
import EditPostModal from "../EditPostModal/EditPostModal";
import { deletePost } from "../../../api/FirestoreAPI";
import { getConnections } from "../../../api/FirestoreAPI";

const PostCard = ({ post, currentUser, currentUserId }) => {
  let redirect = useNavigate();
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allComments, setAllComments] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [showEditPostModal, setShowEditPostModal] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useMemo(() => {
    getLikesByUser(post.userId, post.id, setLiked, setLikesCount);
    getComments(setAllComments, post.id);
    getAllUsers(setAllUsers);
  }, []);

  useEffect(() => {
    getConnections(currentUser.userId, post.userId, setIsConnected);
  }, []);

  return isConnected || currentUserId == post.userId ? (
    <div className="post-card-container">
      <EditPostModal
        showEditPostModal={showEditPostModal}
        setShowEditPostModal={setShowEditPostModal}
        post={post}
        postStatus={post.status}
      />
      <div className="post-card" key={currentUserId}>
        {post.userId == currentUserId ? (
          <div className="action-container">
            <BsPencil
              className="action-icon"
              onClick={() => setShowEditPostModal(true)}
            ></BsPencil>
            <BsTrash
              className="action-icon"
              onClick={() => deletePost(post.id)}
            ></BsTrash>
          </div>
        ) : (
          <></>
        )}
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
              {allUsers.filter((user) => user.userId === post.userId)[0]?.name}
            </p>
            <p className="post-card-timestamp"> • {post.timeStamp}</p>
          </div>
          <p className="post-card-status">{post.status}</p>
          {post.imageLink ? (
            <img className="post-image" src={post.imageLink}></img>
          ) : (
            <></>
          )}
          <div className="actions">
            <p>
              {likesCount} {likesCount === 1 ? "person likes" : "people like"}{" "}
              this post{" "}
            </p>
            <div className="like-comment">
              <LikeButton userId={currentUserId} postId={post.id} />
              <CommentButton
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                post={post}
                currentUser={currentUser}
                currentUserId={currentUserId}
              />
            </div>
          </div>
        </div>
      </div>
      {allComments.length > 0 ? (
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
                            {
                              allUsers.filter(
                                (user) => user.userId === comment.userId
                              )[0]?.name
                            }
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
      ) : (
        <></>
      )}
    </div>
  ) : (
    <></>
  );
};

export default PostCard;
